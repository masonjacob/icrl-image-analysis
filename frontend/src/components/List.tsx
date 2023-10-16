// src/components/ResultsList.tsx
import React from "react";

interface Item {
  id: number;
  name: string;
  date: Date;
  image: string; // Assuming you have a URL to the image
  location: string; // Assuming you have a string for location
  description: string;
}

interface ListProps {
  results: Item[];
}

const List: React.FC<ListProps> = ({ results }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {results.map((result) => (
        <div key={result.id} className="bg-white p-4 rounded-md shadow-md">
          <img src={result.image} alt={result.name} className="w-full h-48 object-cover" />
          <h3 className="text-lg font-semibold mt-2">{result.name}</h3>
          <p className="text-gray-600">{result.location}</p>
          <p className="text-gray-600">{result.date.toLocaleDateString()}</p>
          <p className="mt-2">{result.description}</p>
        </div>
      ))}
    </div>
  );
};

export default List;