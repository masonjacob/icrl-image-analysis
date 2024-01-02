import React, { useState } from "react";

interface SearchProps {
  onSearch: (searchTerm: string, filters: any) => void;
}

const Search: React.FC<SearchProps> = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filters, setFilters] = useState({
    dateFilter: false,
    locationFilter: false,
  });

  const handleSearch = () => {
    onSearch(searchTerm, filters);
  };

  return (
    <div className="p-4 bg-gray-200 justify-center flex">
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="p-2 rounded-md"
      />
      <button onClick={handleSearch} className="bg-blue-500 text-white p-2 rounded-md">
        Search
      </button>
      <label>
        <input
          type="checkbox"
          checked={filters.dateFilter}
          onChange={() => setFilters({ ...filters, dateFilter: !filters.dateFilter })}
        />
        Filter by Date
      </label>
      <label>
        <input
          type="checkbox"
          checked={filters.locationFilter}
          onChange={() => setFilters({ ...filters, locationFilter: !filters.locationFilter })}
        />
        Filter by Location
      </label>
    </div>
  );
};

export default Search;