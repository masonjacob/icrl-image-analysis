// EntryViewer.tsx
import React, { useState } from 'react';
import axios from 'axios';

function EntryViewer({ entry }) {
  const [annotation, setAnnotation] = useState('');
  const [comments, setComments] = useState(entry.comments || []);

  const handleAnnotationSave = () => {
    // Send annotation to the backend and update the database
    axios.post(`/api/entries/${entry.id}/annotations`, { annotation }).then((response) => {
      // Update state with the new annotation
      setComments([...comments, response.data]);
      setAnnotation('');
    });
  };

  return (
    // Render entry details, image, comments, and annotation input
  );
}

export default EntryViewer;
