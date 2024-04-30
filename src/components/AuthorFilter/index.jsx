
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
    <aside className="bg-gray-100 p-4 rounded-md">
      <div>
        <input
          type="text"
          placeholder="Filtrar por Autor"
          value={searchTerm}
          onChange={handleSearchChange}
          className="border border-gray-300 mb-4 font-medium rounded-3xl px-4 py-2 focus:outline-none focus:border-blue-500"
        />
        {filteredAuthors.map((author, index) => (
          <label key={index} className="flex items-center mb-1">
            <input
              type="checkbox"
              checked={selectedAuthors.includes(author)}
              onChange={() => handleCheckboxChange(author)}
              className="mr-2 text-blue-500 focus:ring-blue-500"
            />
            <span className="text-gray-800">{author}</span>
          </label>
        ))}
      </div>
    </aside>
  );
};

export default AuthorFilter;
