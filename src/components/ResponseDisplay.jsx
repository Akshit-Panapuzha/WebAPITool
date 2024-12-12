import React from 'react';

const ResponseDisplay = ({ response }) => {
  if (!response) {
    return <div className="response">No response yet.</div>;
  }

  return (
    <div className="response">
      <h2>Response</h2>
      <div>
        <strong>Status:</strong> {response.status}
      </div>
      <div>
        <strong>Headers:</strong>
        <pre>{JSON.stringify(response.headers, null, 2)}</pre>
      </div>
      <div>
        <strong>Body:</strong>
        <pre>{JSON.stringify(response.body, null, 2)}</pre>
      </div>
    </div>
  );
};

export default ResponseDisplay;