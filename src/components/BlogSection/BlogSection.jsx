import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

import {BlogPost} from '../BlogPost/BlogPost';

const BlogSection = () => {
  const [posts, setPosts] = useState([])

  useEffect(() => { 
    fetch("http://localhost:1337/api/blogs?populate=*")
    .then(res => res.json())
    .then(data => setPosts(data.data))
  }, [])

  return (
    <section className="container mx-auto py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {posts && posts.map(blog => (
          <Link key={blog.id} to={`/blog/${blog.id}`}>
            <BlogPost
              title={blog.attributes.title}
              desciption={blog.attributes.description}
              content={blog.attributes.content}
              date={blog.attributes.createdAt}
              img={`http://localhost:1337${blog.attributes.coverImg.data.attributes.formats.thumbnail.url}`}
            />
          </Link>
        ))}
      </div>
    </section>
  );
};

export {BlogSection};
