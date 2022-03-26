import React from 'react'
import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router'

export default function Home() {
    const history = useNavigate()
    async function handleDash(){
        history("/dashboard")
    }
    async function handleSearch(){
      history("/search")
    }
  return (
    <>
    
      <div className="d-flex">
              <Button className="w-100 mt-4 mx-4 d-flex align-items-center justify-content-center" variant="success" onClick={handleDash}>Upload Project</Button>

              <Button className="w-100 mt-4 d-flex align-items-center justify-content-center" variant="success" onClick={handleSearch}>Search Project</Button>
          </div>
          </>
  )
}
