import { NavLink } from 'react-router-dom';
import '../../App.css';

const Card = ({ data, index }) => {
  return (
    <div className='bg-white cursor-pointer w-3/5 h-auto rounded-lg'>
      <figure className='relative mb-2 w-full h-4/5'>
        <span className='absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5'>{data?.category}</span>
        <img className='w-full h-full object-cover rounded-lg' src={data?.urlToImage} alt={data?.title} />
      </figure>
      <p className='flex justify-between'>
        <span className='text-sm font-semibold text-purple'>{data?.title}</span>
        <span className='text-sm font-light' >Publicado el: {data?.publishedAt.split("T",2)[0]}</span>
      </p>
      <p>{data?.description} <span className='text-blue-600 underline underline-offset-4'><NavLink to={`/articles/${data?.title}`} >
          Ver artículo completo
      </NavLink> </span></p>
    </div>
  );
};

export default Card;
