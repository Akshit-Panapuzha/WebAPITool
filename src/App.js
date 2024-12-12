import React, { useState } from 'react';
import InputForm from './components/InputForm';
import ResponseDisplay from './components/ResponseDisplay';
import './App.css';

function App() {
  const [response, setResponse] = useState(null);

  const handleApiCall = async ({ url, method, headers, body }) => {
    try {
      const res = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json', // Default to JSON
          ...headers, // Allow additional headers
        },
        body: method !== 'GET' && body ? JSON.stringify(body) : null,
      });
  
      const responseHeaders = {};
      res.headers.forEach((value, key) => {
        responseHeaders[key] = value;
      });
  
      const contentType = res.headers.get('content-type');
      let data;
      if (contentType && contentType.includes('application/json')) {
        data = await res.json();
      } else {
        data = await res.text();
      }
  
      setResponse({
        status: res.status,
        headers: responseHeaders,
        body: data,
      });
    } catch (error) {
      setResponse({
        status: 'Error',
        body: { message: error.message },
      });
    }
  };

  return (
    <div className="App">
      <h1>Compact API Tester</h1>
      <InputForm onApiCall={handleApiCall} />
      <ResponseDisplay response={response} />
    </div>
  );
}

export default App;