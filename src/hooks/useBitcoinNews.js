import { useState, useEffect } from 'react';

const useBitcoinNews = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const apiKey = '0182acb9bf8749fa9d9d9468cdf8c896';
    fetch(`https://newsapi.org/v2/everything?q=bitcoin&apiKey=${apiKey}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.json();
      })
      .then((data) => {
        console.log('Fetched news data:', data);
        setNews(data.articles);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching news:', error);
        setError(error);
        setLoading(false);
      });
  }, []);

  return { news, loading, error };
};

const useMobileView = () => {
  const [isMobileView, setIsMobileView] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 768);
    };
    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return isMobileView;
};

export { useBitcoinNews, useMobileView };
