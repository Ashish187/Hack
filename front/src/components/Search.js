import '../App.css'
import React, { useEffect, useState } from 'react';
import { nameRef } from "../firebase"
import { Button,Alert, Nav } from "react-bootstrap"
import { Dropdown,Card } from "react-bootstrap";
import 'tachyons'


function Search() {

<<<<<<< HEAD
  
=======
>>>>>>> 430cbb9125148ff6506e798d92b5d5f0ccb3d61b
    const [text, setText] = useState("Select search type")
    const [search_value, setSearch_value] = useState("");
    const [post,setPost] = useState([])

    useEffect(()=>{
        nameRef.on('value',(snapshot)=>{
            const data = snapshot.val()
            const post = []
            for(let id in data){
              post.push(data[id])
            }
            console.log(post)
            setPost(post)
        })
    },[])

    const handle_byname = () =>{
        setText("By Project Name");
    }

    const handle_byinstitute = () =>{
        setText("By University/College Name");
    }
const handleSearch = () =>{
    console.log(search_value);
}

  return (

    <>
    <div className="container">
        <h1>Search Projects</h1>
        <Dropdown>
  <Dropdown.Toggle variant="success" id="dropdown-basic">
    {text}
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item href="#/action-1" onClick={()=>handle_byname()}>By project name</Dropdown.Item>
    <Dropdown.Item href="#/action-2" onClick={()=>handle_byinstitute()}>By University/College name</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>
<input 
type="text" 
id="search_content"
name="search_content"
value={search_value}
onChange={(e)=>setSearch_value(e.target.value)}
className= "my-3" />
<br/>
<Button variant="info" onClick={()=>handleSearch()} >Search</Button>
    </div>


    <table className='fetch-data'>
      {post ? post.map((vari)=> 
      <>
      <tr>
        <th>University</th>
        <th>Student</th>
        <th>About Project</th>
        <th>Project</th>
      </tr>
      <tr>
      <td>{vari.CollegeName}</td>
      <td>{vari.UserName}</td>
      <td>{vari.Description}</td>
      <td>{vari.ProjectName}</td>
      </tr>
      
      </>
      
      
      ):''}
    </table>
    </>
    
    

  )
}

export default Search