import React, { useState } from 'react';
import axios from 'axios';

function NumberManagement() {
  const [urls, setUrls] = useState('');
  const [response, setResponse] = useState('');

  const handleFetchNumbers = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/numbers?url=${urls}`);
      setResponse(JSON.stringify(response.data.numbers, null, 2));
    } catch (error) {
      console.error(error);
      setResponse('An error occurred');
    }
  };

  return (
    <div>
      <h1>Number Management App</h1>
      <div>
        <label>Enter URLs (comma-separated):</label>
        <input type="text" value={urls} onChange={(e) => setUrls(e.target.value)} />
      </div>
      <button onClick={handleFetchNumbers}>Fetch Numbers</button>
      <div>
        <h2>Response:</h2>
        <pre>{response}</pre>
      </div>
    </div>
  );
}

export default NumberManagement;

