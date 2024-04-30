import Header from '../components/ui/Header';
import Layout from '../components/Layout';
import Footer from '../components/ui/Footer';
import '../App.css';

const ResourcesPage = () => {
  return (
    <Layout>
      <Header />
      <main className='container flex flex-col justify-center items-center'>
        <h1 className='mb-10 font-bold text-2xl text-amber-700 font-serif text-center'>Fuentes de información</h1>
        <div className='w-full md:w-2/3 p-4'>
          <p className='mb-6'>Los artículos fueron creados en base a los siguientes EndPoints y su intuitiva documentación:</p>
          <ul className='w-full'>
            <li className='mb-4'>
              <a href="https://newsapi.org/docs/endpoints/everything" className='text-slate-800 font-mono underline underline-offset-4' target="_blank" rel="noopener noreferrer">https://newsapi.org/docs/endpoints/everything<span className='text-black'> - Everything</span></a>
            </li>
            <li className='mb-4'>
              <a href="https://newsapi.org/docs/endpoints/top-headlines" target="_blank" rel="noopener noreferrer" className='text-slate-800 font-mono underline underline-offset-4'>https://newsapi.org/docs/endpoints/top-headlines<span> - Headlines</span></a>
            </li>
            <li className='mb-4'>
              <a href="https://newsapi.org/docs/endpoints/sources" target="_blank" rel="noopener noreferrer" className='text-slate-800 font-mono underline underline-offset-4'>https://newsapi.org/docs/endpoints/sources<span> - Sources</span></a>
            </li>
          </ul>
        </div>
      </main>
      <Footer />
    </Layout>
  );
};

export default ResourcesPage;
