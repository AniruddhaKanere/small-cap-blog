import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Article = () => {
  const { id } = useParams();
  const [article, setArticle] = useState(null);

  useEffect(() => {
    fetch(`/api/articles/${id}`)
      .then(response => response.json())
      .then(data => setArticle(data));
  }, [id]);

  if (!article) {
    return <div className="container my-4">Loading...</div>;
  }

  return (
    <div className="container my-4">
      <h2>{article.title}</h2>
      <p>{article.content}</p>
    </div>
  );
};

export default Article;
