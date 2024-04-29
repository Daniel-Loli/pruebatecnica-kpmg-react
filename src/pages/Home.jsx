import React, { useState, useEffect } from 'react';
import Card from '../components/CardList/Card';
import Header from '../components/ui/Header';
import Layout from '../components/Layout';
import Search from '../components/CardList/Search';
import AuthorFilter from '../components/AuthorFilter'; 
import Footer from '../components/ui/Footer';
import '../App.css'

const apiKey = '0182acb9bf8749fa9d9d9468cdf8c896';

const Home = () => {
  const [news, setNews] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredNews, setFilteredNews] = useState([]);
  const [authors, setAuthors] = useState([]);
  const [selectedAuthors, setSelectedAuthors] = useState([]);

  useEffect(() => {
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
        setFilteredNews(data.articles); 
        const uniqueAuthors = [...new Set(data.articles.map(item => item.author))];
        setAuthors(uniqueAuthors.filter(author => author));
      })
      .catch(error => {
        console.error('Error fetching news:', error);
      });
  }, []);

  useEffect(() => {
    const filtered = news.filter((item) => {
      if (selectedAuthors.length > 0) {
        return selectedAuthors.includes(item.author);
      }
      return true;
    });
    setFilteredNews(filtered);
  }, [selectedAuthors, news]);

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

  return (
    <Layout>
      <Header />
      <main className='grid grid-cols-4'>
        <div className='col-span-1 bg-white' >
          <AuthorFilter authors={authors} selectedAuthors={selectedAuthors} onAuthorChange={handleAuthorChange} />
        </div>
        <div className='col-span-3 bg-grayLight'>
          <div className='flex flex-col gap-10 justify-center items-center'>
            <Search searchTerm={searchTerm} onSearchChange={handleSearchChange} />
            {filteredNews.map((item, index) => (
              <Card key={item.id || index} data={item} />
            ))}
          </div>
        </div>
      </main>
      <Footer/>
    </Layout>
  );
};

export default Home;
