import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch('/api/articles')
      .then(response => response.json())
      .then(data => setArticles(data));
  }, []);

  return (
    <div>
      <h2>Blog Articles</h2>
      <ul>
        {articles.map(article => (
          <li key={article.id}>
            <Link to={`/article/${article.id}`}>{article.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
