import React, { useEffect, useState } from 'react';
import ListComponent from './ListComponent';

const App = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => {
        if (!response.ok) throw new Error('Failed to fetch');
        return response.json();
      })
      .then((data) => {
        setItems(data.slice(0, 8)); 
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1>Post List</h1>
      <ListComponent items={items} renderItem={(item) => <li key={item.id}>{item.title}</li>} />
    </div>
  );
};

export default App;

