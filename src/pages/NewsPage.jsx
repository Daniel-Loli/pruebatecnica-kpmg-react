import { useState, useEffect } from 'react';
import Card from '../components/CardList/Card';
import Header from '../components/ui/Header';
import Footer from '../components/ui/Footer';
import Layout from '../components/Layout';
import Search from '../components/CardList/Search';
import AuthorFilter from '../components/AuthorFilter';
import useNewsData from '../hooks/useNewsData';
import {  useMobileView } from '../hooks/useBitcoinNews';

const NewsPage = () => {
  const { news, authors } = useNewsData();
  const [searchTerm, setSearchTerm] = useState('');
  const isMobileView = useMobileView();
  const [filteredNews, setFilteredNews] = useState([]);
  const [selectedAuthors, setSelectedAuthors] = useState([]);
  const [showAuthorFilter, setShowAuthorFilter] = useState(false);

  useEffect(() => {
    const filtered = news.filter((item) => {
      if (selectedAuthors.length > 0) {
        return selectedAuthors.includes(item.author);
      }
      return true;
    }).filter((item) => {
      return item.title.toLowerCase().includes(searchTerm.toLowerCase());
    });
    setFilteredNews(filtered);
  }, [selectedAuthors, news, searchTerm]);

  const handleSearchChange = (value) => {
    setSearchTerm(value);
  };

  const handleAuthorChange = (author) => {
    if (selectedAuthors.includes(author)) {
      setSelectedAuthors(selectedAuthors.filter(a => a !== author));
    } else {
      setSelectedAuthors([...selectedAuthors, author]);
    }
  };

  const handleToggleAuthorFilter = () => {
    setShowAuthorFilter(!showAuthorFilter);
  };

  return (
    <Layout>
      <Header />
      <h1 className='mb-10 font-bold text-2xl text-amber-700 font-serif text-center'>Lo que está pasando en el mundo</h1>
      <main className='grid grid-cols-1 lg:grid-cols-7 gap-8'>
        <div className='lg:col-span-2'>
          {(showAuthorFilter || window.innerWidth >= 768) && (
            <AuthorFilter authors={authors} selectedAuthors={selectedAuthors} onAuthorChange={handleAuthorChange} />
          )}
          {isMobileView && (
            <button onClick={handleToggleAuthorFilter} className="mt-4 mx-auto flex lg:hidden text-lg font-serif text-slate-700">
              <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-filter" width="32" height="32" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#000000" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M4 4h16v2.172a2 2 0 0 1 -.586 1.414l-4.414 4.414v7l-6 2v-8.5l-4.48 -4.928a2 2 0 0 1 -.52 -1.345v-2.227z" />
              </svg>
              Filtrar por autor
            </button>
          )}
        </div>
        <div className='lg:col-span-5'>
          <div className='flex flex-col gap-10 justify-center items-center'>
            <Search searchTerm={searchTerm} onSearchChange={handleSearchChange} />
            {filteredNews.map((item, index) => (
              <Card key={item.id || index} data={item} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </Layout>
  );
};

export default NewsPage;
  