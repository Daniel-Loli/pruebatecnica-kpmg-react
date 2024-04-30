import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import Header from '../components/ui/Header';
import Footer from '../components/ui/Footer';
import Layout from '../components/Layout';
import useArticleData from '../hooks/useArticleData';

const ArticlePage = ({ apiKey }) => {
  const { title } = useParams();
  const { article, loading, error } = useArticleData(apiKey, title);

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
      <Footer />
    </Layout>
  );
};

ArticlePage.propTypes = {
  apiKey: PropTypes.string.isRequired,
};

export default ArticlePage;
