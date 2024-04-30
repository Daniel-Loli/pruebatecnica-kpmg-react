const Search = ({ searchTerm, onSearchChange }) => {
  const handleChange = (event) => {
    onSearchChange(event.target.value);
  };
  const handleClickClear = () => {
    onSearchChange('');
  }

  return (
    <div className="mb-4 relative">
      <input
        type="text"
        placeholder="Buscar artículo"
        value={searchTerm}
        onChange={handleChange}
        className="border border-gray-500 font-ligth rounded-3xl p-2 py-2 pr-10 focus:outline-none focus:border-blue-500"
      />
      <span className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer ">
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
  );
};

export default Search;
