import { useEffect, useState } from 'react';

function App() {
  const [status, setStatus] = useState('');

  useEffect(() => {
    fetch('http://localhost:5274/health')
      .then(res => res.json())
      .then(data => setStatus(data.status))
      .catch(err => setStatus('Error: ' + err));
  }, []);

  return (
    <div style={{ padding: '2rem' }}>
      <h1>React + ASP.NET Core Test</h1>
      <p>API Status: {status || 'Loading...'}</p>
    </div>
  );
}

export default App;