import './App.css';
import React, { useState, useEffect } from 'react';

function App() {
  const [keyword, setKeyword] = useState("");

  function spinWord(e) {
    fetch("http://localhost:4000/")
      .then(res => res.json())
      .then(data => setKeyword(data));
    console.log('You clicked submit.');
  }

  useEffect(() => {
    spinWord("");
  }, [])

  return (
    <div className="App">
      <div>
        <h1>Short term is {keyword}</h1>
        <button onClick={spinWord}>Spin</button>
      </div>
    </div>
  );
}

export default App;
