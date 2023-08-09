import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [urls, setUrls] = useState('');
  const [response, setResponse] = useState('');

  const handleFetchNumbers = async () => {
    try {
      const response = await axios.get(`http://localhost:8008/numbers`);
      setResponse(JSON.stringify(response.data.numbers, null, 2));
    } catch (error) {
      console.error(error);
      setResponse('An error occurred');
    }
  };

  return (
    <div className="App">
      <h1>Number Management App</h1>
      <div>
        <button onClick={handleFetchNumbers}>Fetch Numbers</button>
      </div>
      <div>
        <h2>Response:</h2>
        <pre>{response}</pre>
      </div>
    </div>
  );
}

export default App;
