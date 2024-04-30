import { useState, useEffect } from 'react';
import Card from '../components/CardList/Card';
import Header from '../components/ui/Header';
import Layout from '../components/Layout';
import Search from '../components/CardList/Search';
import AuthorFilter from '../components/AuthorFilter';
import Footer from '../components/ui/Footer';
import '../App.css';
const ResourcesPage = () => {
  return (
    <>
    <Layout>
      <Header/>

    </Layout>
    <Footer/>
    </>
  )
}

export default ResourcesPage