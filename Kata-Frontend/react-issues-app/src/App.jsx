import React, { useEffect, useState } from 'react';

function App() {
  const [issues, setIssues] = useState([]);
  const [search, setSearch] = useState('');
  const [filteredIssues, setFilteredIssues] = useState([]);

  useEffect(() => {
    fetch('https://api.github.com/repos/facebook/react/issues')
      .then((res) => res.json())
      .then((data) => {
        setIssues(data);
        setFilteredIssues(data);
      });
  }, []);

  useEffect(() => {
    const results = issues.filter(issue =>
      issue.title.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredIssues(results);
  }, [search, issues]);

  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial, sans-serif' }}>
      <h1>📌 React Issues (GitHub)</h1>

      <input
        type="text"
        placeholder="Buscar por título..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          padding: '0.5rem',
          margin: '1rem 0',
          width: '100%',
          maxWidth: '400px'
        }}
      />

      {filteredIssues.length === 0 ? (
        <p>No se encontraron issues.</p>
      ) : (
        <ul>
          {filteredIssues.map((issue) => (
            <li key={issue.id} style={{ borderBottom: '1px solid #ccc', padding: '1rem 0' }}>
              <p><strong>ID:</strong> {issue.id}</p>
              <p>
                <strong>Título:</strong>{' '}
                <a href={issue.html_url} target="_blank" rel="noopener noreferrer">
                  {issue.title}
                </a>
              </p>
              <p><strong>Autor:</strong> {issue.user.login}</p>
              {issue.labels.length > 0 && (
                <p><strong>Labels:</strong>{' '}
                  {issue.labels.map(label => (
                    <span key={label.id} style={{
                      backgroundColor: `#${label.color}`,
                      color: '#fff',
                      padding: '2px 6px',
                      marginRight: '5px',
                      borderRadius: '4px',
                      fontSize: '0.8rem'
                    }}>
                      {label.name}
                    </span>
                  ))}
                </p>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
