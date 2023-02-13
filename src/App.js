import './App.css';
import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import backgroundVideo from './str_snow_final_181-360.mp4';

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
    <>
      <div className="App">
        <video autoPlay loop muted>
          <source src={backgroundVideo} type='video/mp4' />
        </video>
        <div className="str-container">
          <div>
            <h1>Short term is <strong>{keyword}</strong></h1>
            <button className='button-34' onClick={spinWord}>SPIN</button>
          </div>
        </div>
      </div>
      <ToastContainer />
      {/* <video autoPlay loop muted>
        <source src={backgroundVideo} type='video/mp4' />
      </video> */}
    </>
  );
}

export default App;
