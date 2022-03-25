import './App.css';
import axios from "axios"
import React, { useEffect, useState } from 'react';
import { nameRef } from "./firebase"

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
    const item = {
      Info: name,
      Task: false
    }

    nameRef.push(item)
		try {
			await axios.post("http://localhost:9200/post_name", {
				name
			})
		} catch (error) {
			console.error(error)
		}
    
    setName("")
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
