import './App.css';
import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [keyword, setKeyword] = useState("");

  function spinWord(e) {
    fetch("http://localhost:4000/")
      .then(res => {
        if(!res.ok) throw new Error(res.status);
        else return res.json();
      })
      .then(data => setKeyword(data))
      .catch(e => {
        toast.error('Slow down!', {
          position: "top-right",
          autoClose: 4000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          });
      })
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
      <ToastContainer />
    </div>
  );
}

export default App;
