import React, { useState, useEffect } from 'react';

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => setPosts(data));
  }, []);

  return (
    <div>
      <h1>Lista de posts</h1>
      <table>
        <thead>
          <tr style={{ margin: '0 auto', textAlign: 'center' }}>
            <th>User ID</th>
            <th>ID</th>
            <th>Título</th>
            <th>Contenido</th>
          </tr>
        </thead>
        <tbody>
          {posts.map(post => (
            <tr key={post.id}>
              <td style={{ margin: '0 auto', textAlign: 'center' }}>{post.userId}</td>
              <td style={{ margin: '0 auto', textAlign: 'center' }}>{post.id}</td>
              <td>{post.title}</td>
              <td>{post.body}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
