import axios from "axios"
import '../App.css'
import React, { useEffect, useState } from 'react';
import { nameRef } from "../firebase"
import { Button,Alert, Nav } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext"
import { Link, useNavigate } from "react-router-dom"
import FileSave from "./FileSave";
// import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
// import { storage } from "../firebase";

export default function Dashboard() {
    const [name,setName] = useState("");
    const [pName,setPName] = useState("");
    const [area,setArea] = useState("");
    const [college,setCollege] = useState("");
  const [home,setHome] = useState("");
  // const [progress, setProgress] = useState(0);
  const [error, setError] = useState("")
  const { logout } = useAuth()
  const history = useNavigate()

//   const [image , setImage] = useState('');
// const upload = ()=>{
//   if(image == null)
//     return;
//   storage.ref(`/images/${image.name}`).put(image)
//   .on("state_changed" , alert("success") , alert);
// }


  // function handleChange(e) {
  //   setFile(e.target.files[0]);
  // }
  useEffect(()=>{
    axios.get("http://localhost:9200/home").then(function(response){
      setHome(response.data)
    })
  },[])

//   const formHandler = (e) => {
//     e.preventDefault();
//     const file = e.target[0].files[0];
//     uploadFiles(file);
//   };

  

  async function handleLogout() {
    setError("")

    try {
      await logout()
      history("/login")
    } catch {
      setError("Failed to log out")
    }
  }

  // const uploadFiles = (file) => {
  //   //
  //   if (!file) return;
  //   const storageRef = ref(storage, `files/${file.name}`);
  //   const uploadTask = uploadBytesResumable(storageRef, file);

  //   uploadTask.on(
  //     "state_changed",
  //     (snapshot) => {
  //       const prog = Math.round(
  //         (snapshot.bytesTransferred / snapshot.totalBytes) * 100
  //       );
  //       setProgress(prog);
  //     },
  //     (error) => console.log(error),
  //     () => {
  //       getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
  //         console.log("File available at", downloadURL);
  //       });
  //     }
  //   );
  // };

  // const storageRef = ref(storage, `files/${file.name}`);
  //   const uploadTask = storageRef.put(file);
  //   uploadTask.on("state_changed", console.error, () => {
  //     ref
  //       .getDownloadURL()
  //       .then((url) => {
  //         setFile(null);
  //         setURL(url);
  //       });
  //   });
  
  async function postName(e) {
		e.preventDefault()
    const item = {
      UserName: name,
      ProjectName: pName,
      CollegeName: college,
      Description: area
    }

    // const file = e.target.files;
    // if (!file) return;
    // const storageRef = ref(storage, `files/${file.name}`);
    // const uploadTask = uploadBytesResumable(storageRef, file);

    // uploadTask.on(
    //   "state_changed",
    //   (snapshot) => {
    //     const prog = Math.round(
    //       (snapshot.bytesTransferred / snapshot.totalBytes) * 100
    //     );
    //     setProgress(prog);
    //   },
    //   (error) => console.log(error),
    //   () => {
    //     getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
    //       console.log("File available at", downloadURL);
    //     });
    //   }
    // );


    nameRef.push(item)
		try {
			await axios.post("http://localhost:9200/post_name", {
				name,pName,college,area
			})
		} catch (error) {
			console.error(error)
		}

    //     const file = e.target.files;
    // if (!file) return;
    // const storageRef = ref(storage, `files/${file.name}`);
    // const uploadTask = uploadBytesResumable(storageRef, file);

    // uploadTask.on(
    //   "state_changed",
    //   (snapshot) => {
    //     const prog = Math.round(
    //       (snapshot.bytesTransferred / snapshot.totalBytes) * 100
    //     );
    //     setProgress(prog);
    //   },
    //   (error) => console.log(error),
    //   () => {
    //     getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
    //       console.log("File available at", downloadURL);
    //     });
    //   }
    // );

    
    setName("")
    setPName("")
    setCollege("")
    setArea("")
	}

  const handleclick =(e) => {
    
    alert("Project submitted");
    e.preventDefault();
  }
    
  return (
      <>
    <Nav defaultActiveKey="/home" as="ul" style={{}} className="fixed-top">
  <Nav.Item as="li" style={{margin: "8px"}}>
    <Nav.Link href="/" >Back</Nav.Link>
  </Nav.Item>
  
  <Nav.Item as="li" variant="primary" style={{marginLeft: "1350px",marginTop: "8px",marginBottom: "8px"}}>
    <Nav.Link eventKey="link-2" onClick={handleLogout} style={{color: "004ec2",backgroundColor: "#8eb3b2"}} className="logout">Logout</Nav.Link>
  </Nav.Item>
</Nav>
      <div className="App">
          <h2 className="head">Upload Your Projects</h2>
      <form onSubmit={postName}>
				<input type="text" required placeholder="Enter Your Name" className="input-class" value={name} onChange={(e) => setName(e.target.value)} />

        <input type="text" required placeholder="Enter Your Project Name" className="input-class" value={pName} onChange={(e) => setPName(e.target.value)} />

				<input type="text" required placeholder="University/College Name" className="input-class" value={college} onChange={(e) => setCollege(e.target.value)} />

                <textarea name="desc" required placeholder="Project Description" className="desc" cols="30" rows="10" value={area} onChange={(e) => setArea(e.target.value)}></textarea>

                <FileSave />
                {/* <input type="file" className="input-class"/> */}
                {/* <button onClick={upload}>Upload</button> */}
                {/* <button>upload to firebase</button> */}

        <p>
          Note: In case of multiple files, create a zip file and then upload that file
        </p>
				<Button type="submit" onClick={(e)=>{handleclick(e)}}>Submit</Button>
                {error && <Alert variant="danger">{error}</Alert>}
			</form>
            <hr />
      {/* <h2>Uploading done {progress}%</h2> */}
    </div>
      </>
    
  )
}
