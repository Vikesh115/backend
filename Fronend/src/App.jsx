import { useState,useEffect } from 'react'
import './App.css'
import axios from 'axios';

function App() {
  const [jokes, setjokes] = useState([]);
  useEffect(() => {
    axios.get('/api/jokes')
    .then((responce) => {
      setjokes(responce.data)
    }
    )
    .catch((error) => {
      console.log(error);
    })
  })
  return (
    <>
    <h1>full stack project</h1>
      <p>JOKES: {jokes.length}</p>
      {
        jokes.map((joke, index)=>(
            <div key={joke.id}>
            <h3>{joke.title}</h3>
            <p>{joke.content}</p>
            </div>
        ))
      }
    </>
  )
}

export default App
