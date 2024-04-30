
import  { useState } from 'react';
import '../../App.css'

const AuthorFilter = ({ authors, selectedAuthors, onAuthorChange }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleCheckboxChange = (author) => {
    onAuthorChange(author);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };


  const filteredAuthors = authors.filter(author =>
    author.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <aside className="bg-gray-200 p-8 ml-4 rounded-md flex flex-col items-center">

        <input
          type="text"
          placeholder="Filtrar por Autor"
          value={searchTerm}
          onChange={handleSearchChange}
          className="border border-gray-500 mb-4 font-medium rounded-3xl p-2 py-2 focus:outline-none focus:border-blue-500"
        />
        <div className='grid grid-cols-2 justify-beetween w-full'>
        {filteredAuthors.map((author, index) => (
          <label key={index} className="flex items-center mb-1">
            <input
              type="checkbox"
              checked={selectedAuthors.includes(author)}
              onChange={() => handleCheckboxChange(author)}
              className="mr-2 text-blue-500 focus:ring-blue-500 flex items-center"
            />
            <span className="text-blue">{author.split("@",1).join(" ").split(" ",1)}</span>
          </label>
        ))}
      </div>
    </aside>
  );
};

export default AuthorFilter;
