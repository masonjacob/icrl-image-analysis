import React, { useState, useEffect } from "react";
import Search from "./components/Search";
import List from "./components/List";
import ImageUpload from "./components/ImageUpload";


///////////////////////////////////////////////////////////////////////////////////////////////////
/// TEMPORARY WAY OF GETTING SERVER URL, NEED TO USE DOCKER-COMPOSE AND ENV VARIABLES IN FUTURE ///
///////////////////////////////////////////////////////////////////////////////////////////////////
const serverPort = 6868; // Your server's port
const serverApiEndpoint = '/api'; // Your API endpoint
const reactAppBaseUrl = window.location.origin.replace(/:\d+$/, ''); // gets the absolute URL of the react app and cuts off the port
const serverUrl = `${reactAppBaseUrl}:${serverPort}${serverApiEndpoint}`;
///////////////////////////////////////////////////////////////////////////////////////////////////

const App: React.FC = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [uploadedImage, setUploadedImage] = useState<{ image: Blob | MediaSource } | null>(null); // To store the uploaded image for displaying it
  // Other state variables for form input (title and description) can be added here

  useEffect(() => {
    // Fetch data from your Node.js backend and set it in setSearchResults.
    // You can use libraries like Axios or the built-in fetch function.
  }, []);

  const handleSearch = (searchTerm: string, filters: any) => {
    // Implement the logic to filter and sort the data here based on searchTerm and filters.
    // Then set the filtered data in setSearchResults.
  };

  const handleImageUpload = async (formData: FormData) => {
    try {
      const response = await fetch(serverUrl + "/images", {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        const uploadedImageData = await response.json();
        setUploadedImage(uploadedImageData); // Save the uploaded image data for display or further use
        // You can also reset the form input fields here if needed
      } else {
        // Handle the case where the image upload fails
        console.error('Image upload failed.');
      }
    } catch (error) {
      console.error('Error while uploading the image:', error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-semibold mb-4 text-center">
        URI ICRL Image Analysis & Annotation
      </h1>
      <div className="content-start">
        <Search onSearch={handleSearch} />
        <List results={searchResults} />
        {uploadedImage && (
          <div>
            <h2>Uploaded Image</h2>
            <img
              src={URL.createObjectURL(uploadedImage.image)}
              alt="Uploaded"
            />
          </div>
        )}
        <ImageUpload onImageUpload={handleImageUpload} />
      </div>
    </div>
  );
};

export default App;
