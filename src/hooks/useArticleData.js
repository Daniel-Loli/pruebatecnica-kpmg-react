import { useState, useEffect } from 'react';

const useArticleData = (apiKey, title) => {
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    fetch(`https://newsapi.org/v2/everything?q=bitcoin&apiKey=${apiKey}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.json();
      })
      .then((data) => {
        const foundArticle = data.articles.find(article => article.title === title); 
        if (foundArticle) {
          setArticle(foundArticle);
        } else {
          throw new Error('xD! Parece que la página que estás buscando no existe o no llegue a terminarla.');
        }
      })
      .catch(error => {
        setError(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [title, apiKey]);

  return { article, loading, error };
};

export default useArticleData;
