// eslint-disable-next-line react/prop-types
const BlogPost = ({ title, date, img, content }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 mb-4">
      <img src={img} alt="img de post" />
      <h2 className="text-xl font-semibold">{title}</h2>
      <p className="text-gray-600 text-sm">Subido el: {date}</p>
      <p className="mt-4">{content}</p>
    </div>
  );
};

export {BlogPost};
