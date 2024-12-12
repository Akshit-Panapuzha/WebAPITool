import React, { useState } from 'react';

const InputForm = ({ onApiCall }) => {
  const [url, setUrl] = useState('');
  const [method, setMethod] = useState('GET');
  const [headers, setHeaders] = useState('');
  const [body, setBody] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const parsedHeaders = headers ? JSON.parse(headers) : {};
    const parsedBody = body ? JSON.parse(body) : null;
    onApiCall({ url, method, headers: parsedHeaders, body: parsedBody });
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <div>
        <label>URL:</label>
        <input
          type="text"
          placeholder="Enter API URL"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Method:</label>
        <select value={method} onChange={(e) => setMethod(e.target.value)}>
          <option value="GET">GET</option>
          <option value="POST">POST</option>
          <option value="PUT">PUT</option>
          <option value="DELETE">DELETE</option>
        </select>
      </div>
      <div>
        <label>Headers (JSON):</label>
        <textarea
          placeholder='e.g., {"Authorization": "Bearer token"}'
          value={headers}
          onChange={(e) => setHeaders(e.target.value)}
        />
      </div>
      {method !== 'GET' && (
        <div>
          <label>Body (JSON):</label>
          <textarea
            placeholder='e.g., {"key": "value"}'
            value={body}
            onChange={(e) => setBody(e.target.value)}
          />
        </div>
      )}
      <button type="submit">Send Request</button>
    </form>
  );
};

export default InputForm;