import React,{useRef,useState} from 'react'
import {Form,Button,Card, Alert} from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext.js"
import { Link,useNavigate } from 'react-router-dom'
import 'tachyons'
export default function Login() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const {login} = useAuth()
    const [error,setError] = useState('')
    const [loading,setLoading] = useState(false)
    const history = useNavigate()

   async function handleSubmit(e){
        e.preventDefault()
        

        try{
            setError("")
            setLoading(true)
            await login(emailRef.current.value,passwordRef.current.value)
            history("/")
        }
        catch{
            setError('Failed to Sign in')
        }
        setLoading(false)
    }
  return (
    <>  
        <Card  className=''>
            
            <Card.Body className='mb4'>
            <h2 className="text-center mb-4">Log In</h2>
            {error && <Alert variant="danger">{error}</Alert>}
            <Form onSubmit={handleSubmit}>
                <Form.Group id="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" required ref={emailRef}></Form.Control>
                </Form.Group>
                <Form.Group id="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" required ref={passwordRef}></Form.Control>
                </Form.Group>
                
                <Button disabled={loading} className="w-100 mt-4" type="submit">Log In</Button>
            </Form>
            </Card.Body>
        </Card>
        <div className="w-100 text-center mt-2">
        Need an account? <Link to="/signup">Sign Up</Link>
      </div>
    </>
  )
}
