import React, { useState, useEffect } from "react";
import Search from "./components/Search";
import List from "./components/List";

interface AppProps {}

const App: React.FC<AppProps> = () => {
  const [searchResults, setSearchResults] = useState([]); // Assuming your search results will be an array of objects

  useEffect(() => {
    // Fetch data from your Node.js backend and set it in setSearchResults.
    // You can use libraries like Axios or the built-in fetch function.
  }, []);

  const handleSearch = (searchTerm: string, filters: any) => {
    // Implement the logic to filter and sort the data here based on searchTerm and filters.
    // Then set the filtered data in setSearchResults.
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-semibold mb-4 text-center">URI ICRL Image Analysis & Annotation</h1>
      <Search onSearch={handleSearch} />
      <List results={searchResults} />
    </div>
  );
};

export default App;


