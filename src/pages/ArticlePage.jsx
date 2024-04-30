import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/ui/Header';
import Footer from '../components/ui/Footer';
import Layout from '../components/Layout';
import '../App.css';

const ArticlePage = ({ apiKey }) => {
  const { title } = useParams();
  console.log("Título recibido:", title);
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

  console.log("Loading:", loading);
  console.log("Error:", error);

  if (loading) {
    return <p>Cargando...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (!article) {
    return <p>No se encontró ningún artículo.</p>;
  }

  return (
    <Layout>
    <Header />
    <div className="container mx-auto mt-8 flex justify-center">
      <div className="w-3/4">
        <h2 className="text-2xl  text-purple font-semibold mb-4 font-serif">{article.title}</h2>
        <div className="bg-white rounded-lg overflow-hidden shadow-lg">
          <img src={article.urlToImage} alt={article.title} className="w-full h-auto" />
          <div className="p-4">
            <p className="text-gray-600 mb-2">{article.author}</p>
            <p className="text-gray-700 font-sans">{article.content}</p>
            <a href={article.url} target="_blank" rel="noopener noreferrer font-mono" className="text-blue-500 mt-2 block">Read more</a>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </Layout>
  );
};

export default ArticlePage;
