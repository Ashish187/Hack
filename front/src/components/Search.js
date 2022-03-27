import '../App.css'
import React, { useEffect, useState } from 'react';
import { nameRef } from "../firebase"
import { Button,Alert, Nav } from "react-bootstrap"
import { Dropdown,Card } from "react-bootstrap";
import 'tachyons'


function Search() {

    const [text, setText] = useState("Select search type")
    const [search_value, setSearch_value] = useState("");
    const [post,setPost] = useState([])

    let flag=0;  
    useEffect(()=>{
        nameRef.on('value',(snapshot)=>{
            const data = snapshot.val()
            const post = []
            for(let id in data){
              if(text===data[id].ProjectName)
              post.push(data[id])
            }
            console.log(post)
            //setPost(post)
        })
    },[])

    const handle_byname = () =>{
        setText("By Project Name");
        flag=1;
    }

    const handle_byinstitute = () =>{
        setText("By University/College Name");
        flag=2;
        nameRef.on('value',(snapshot)=>{
          const data = snapshot.val()
          const post = []
          for(let id in data){
    
    
            if( search_value===data[id].CollegeName)
            post.push(data[id])
          }
          console.log(post)
          setPost(post)
      })
    }
const handleSearch = () =>{
    console.log(search_value);
    nameRef.on('value',(snapshot)=>{
      const data = snapshot.val()
      const post = []
      for(let id in data){

        if(   search_value===data[id].ProjectName)
        post.push(data[id])

        if( flag!==1 && (search_value===data[id].CollegeName ))
        post.push(data[id])
      }
      console.log(post)
        
      
const ans = post.filter(myFunction);

function myFunction(value, index, array) {
  return (index%2==0)?value:"";
}

      setPost(ans)
  })
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
    <tr style={{border: "5px red"}}>
        <th className='pa3'>University</th>
        <th className='pa3'>Student</th>
        <th className='pa3'>About Project</th>
        <th className='pa3'>Project</th>
      </tr>
      {post ? post.map((vari)=> 
      
      <>
      
      
      <tr>
      <td className='pa3'>{vari.CollegeName}</td>
      <td className='pa3'>{vari.UserName}</td>
      <td className='pa3'>{vari.Description}</td>
      <td className='pa3'>{vari.ProjectName}</td>
      </tr>
      
      </>
      
      
      ):''}
    </table>
    </>
    
    

  )
}

export default Search