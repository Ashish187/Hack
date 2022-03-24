import './App.css';
import axios from "axios"
import React, { useEffect, useState } from 'react';

function App() {
  const [name,setName] = useState("");
  const [home,setHome] = useState("");

  useEffect(()=>{
    axios.get("http://localhost:9200/home").then(function(response){
      setHome(response.data)
    })
  },[])
  
  async function postName(e) {
		e.preventDefault()
		try {
			await axios.post("http://localhost:9200/post_name", {
				name
			})
		} catch (error) {
			console.error(error)
		}
	}
  return (
    <div className="App">
      <form onSubmit={postName}>
				<input type="text" value={name} onChange={(e) => setName(e.target.value)} />
				<button type="submit">Send Name</button>
			</form>
      {home}
    </div>
  );
}

export default App;
