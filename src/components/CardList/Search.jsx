

const Search = ({ searchTerm, onSearchChange }) => {
  const handleChange = (event) => {
    onSearchChange(event.target.value);
  };

  return (
    <div className="mb-4">
      <input
        type="text"
        placeholder="Buscar artículo"
        value={searchTerm}
        onChange={handleChange}
        className="border border-gray-500  font-medium rounded-3xl p-2 py-2 focus:outline-none focus:border-blue-500"
      />
    </div>
  );
};

export default Search;
