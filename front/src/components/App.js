import { Container } from 'react-bootstrap';
import '../App.css';
import { AuthProvider } from '../contexts/AuthContext';
import { BrowserRouter as Router,Routes,  Route } from "react-router-dom"
// import {Switch} from "react-router"
import Dashboard from './Dashboard';
import Signup from './Signup';
import Login from './Login';
import PrivateRoute from "./PrivateRoute"

function App() {
  return (
    <Container className="d-flex align-items-center justify-content-center" style={{minHeight: "100vh"}}>
      <div className="w-100" style={{maxWidth: "400px"}}>
      <Router>
        <AuthProvider>
        <Routes>
        <Route exact path='/' element={
        <PrivateRoute>
        <Dashboard />
        </PrivateRoute>
          }>
          </Route>
        {/* <PrivateRoute exact path="/" element={<Dashboard/>} /> */}
        <Route exact path="/signup" element={<Signup/>} />
        <Route exact path="/login" element={<Login/>} />
        </Routes>
    </AuthProvider>
      </Router>
      </div>
    </Container>
    
  )
}

export default App;