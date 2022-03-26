import axios from "axios"
import React, { useEffect, useState } from 'react';
import { nameRef } from "../firebase"
import { Button,Alert } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext"
import { useNavigate } from "react-router-dom"

export default function Dashboard() {
    const [name,setName] = useState("");
  const [home,setHome] = useState("");
  const [error, setError] = useState("")
  const { logout } = useAuth()
  const history = useNavigate()

  useEffect(()=>{
    axios.get("http://localhost:9200/home").then(function(response){
      setHome(response.data)
    })
  },[])

  async function handleLogout() {
    setError("")

    try {
      await logout()
      history("/login")
    } catch {
      setError("Failed to log out")
    }
  }
  
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
                {error && <Alert variant="danger">{error}</Alert>}
                <div className="w-100 text-center mt-2">
        <Button variant="link" onClick={handleLogout}>
          Log Out
        </Button>
      </div>
			</form>
{home}
    </div>
  )
}
