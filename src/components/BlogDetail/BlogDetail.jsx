import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {marked} from 'marked';


const BlogDetail = () => {
  const [postSelected, setPostSelected] = useState({})
  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:1337/api/blogs/${id}?populate=*`)
      .then(res => res.json())
      .then(data => setPostSelected(data.data))
      .catch(error => console.error(error));
  }, [id]);

  const parseMarkdown = (markdown) => {
    return { __html: marked(markdown) };
  };

  // Verificar si postSelected.attributes existe antes de acceder a sus propiedades
  if (!postSelected.attributes) {
    return <div>Cargando...</div>;
  }

  return (
    <div className="container mx-auto py-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">{postSelected.attributes.title}</h1>
        <p className="text-gray-600 mb-4">{postSelected.attributes.description}</p>
        <img
          src={`http://localhost:1337${postSelected.attributes.coverImg.data.attributes.formats.thumbnail.url}`}
          alt={postSelected.attributes.coverImg.name}
          className="w-full max-h-96 object-cover rounded-lg mb-4"
        />
        <div className="prose">
          {/* Renderiza el contenido del post en formato HTML */}
          <div dangerouslySetInnerHTML={parseMarkdown(postSelected.attributes.content)} />
        </div>
      </div>
    </div>
  );
};

export { BlogDetail };
