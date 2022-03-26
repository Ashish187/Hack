import axios from "axios"
import '../App.css'
import React, { useEffect, useState } from 'react';
import { nameRef } from "../firebase"
import { Button,Alert, Nav } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext"
import { Link, useNavigate } from "react-router-dom"
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { storage } from "../firebase";
import { Dropdown } from "react-bootstrap";
import 'tachyons'

function Search() {
    const [text, setText] = useState("Select search type")
    const [search_value, setSearch_value] = useState("");
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
  )
}

export default Search