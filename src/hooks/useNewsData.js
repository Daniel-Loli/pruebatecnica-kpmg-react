import { useState, useEffect } from 'react';

const useNewsData = () => {
  const [news, setNews] = useState([]);
  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    const apiKey = '0182acb9bf8749fa9d9d9468cdf8c896';
    fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.json();
      })
      .then((data) => {
        console.log('Fetched news data:', data);
        setNews(data.articles);
        const uniqueAuthors = [...new Set(data.articles.map(item => item.author))];
        setAuthors(uniqueAuthors.filter(author => author));
      })
      .catch(error => {
        console.error('Error fetching news:', error);
      });
  }, []);

  return { news, authors };
};

export default useNewsData;
