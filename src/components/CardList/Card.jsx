import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import '../../App.css';

const Card = ({ data }) => {
  return (
    <div className='bg-white cursor-pointer w-5/5 p-4 md:w-3/5 md:p-0 h-auto rounded-lg'>
      <figure className='relative mb-2 w-full h-4/5'>
        <span className='absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5'>{data?.category}</span>
        <img className='w-full h-full object-cover rounded-lg' src={data?.urlToImage} alt={data?.title} />
      </figure>
      <div className='flex justify-between items-center gap-4 mb-2'>
        <h2 className='text-md font-bold text-purple font-sans'>{data?.title}</h2>
        <span className='text-sm font-light border-l border-gray-600 pl-4 text-nowrap'>{data?.publishedAt.split("T",2)[0]}</span>
      </div>
      <p className='font-serif text-sm'>{data?.description} <span className='text-blue-600 underline underline-offset-4'><NavLink to={`/articles/${data?.title}`}>
          Ver artículo completo
      </NavLink> </span></p>
    </div>
  );
};

Card.propTypes = {
  data: PropTypes.shape({
    category: PropTypes.string,
    urlToImage: PropTypes.string,
    title: PropTypes.string,
    publishedAt: PropTypes.string,
    description: PropTypes.string,
  }).isRequired,
};

export default Card;
