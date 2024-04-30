import { useState } from 'react';
import PropTypes from 'prop-types';

const AuthorFilter = ({ authors, selectedAuthors, onAuthorChange }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleCheckboxChange = (author) => {
    onAuthorChange(author);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredAuthorsSet = new Set(authors?.filter(author =>
    author?.toLowerCase().includes(searchTerm.toLowerCase())
  ));

  const filteredAuthors = [...filteredAuthorsSet];

  const handleClickClear = () => {
    setSearchTerm('');
  };

  return (
    <aside className="bg-gray-300 p-8 md:ml-4 rounded-md flex flex-col items-center container ">
      <div className="relative mb-4 ">
        <input
          type="text"
          placeholder="Filtrar por autor"
          value={searchTerm}
          onChange={handleSearchChange}
          className="border border-gray-500 font-ligth text-black/70 rounded-3xl p-2 py-2  focus:outline-none focus:border-blue-500"
        />
        <span className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            onClick={handleClickClear}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </span>
      </div>
      <div className='grid grid-cols-2  w-full font-sans gap-x-16'>
        {filteredAuthors.map((author, index) => (
          <label key={index} className="flex items-center mb-1">
            <input
              type="checkbox"
              checked={selectedAuthors.includes(author)}
              onChange={() => handleCheckboxChange(author)}
              className="mr-2 text-blue-500 focus:ring-blue-500 flex items-center cursor-pointer "
            />
            <span className="text-blue">{author.split("@",1).join(" ").split(" ",1)}</span>
          </label>
        ))}
      </div>
    </aside>
  );
};

AuthorFilter.propTypes = {
  authors: PropTypes.arrayOf(PropTypes.string).isRequired,
  selectedAuthors: PropTypes.arrayOf(PropTypes.string).isRequired,
  onAuthorChange: PropTypes.func.isRequired,
};

export default AuthorFilter;
