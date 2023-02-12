import React, { useState } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import "./Login.css"


const Login = () => {

  const [email,setEmail] =useState("")
  const [password,setPassword]=useState("")

  function handleSubmit(e){
    e.preventDefault()
  }


  return (
    <Container>
    <Row>
    <Col md={5} className="login_bg">

    </Col>
    <Col md={7} className="d-flex align-items-center justify-content-center flex-direction-column">
    <Form onSubmit={handleSubmit} style={{width:"80%", maxWidth:500}}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e)=> setEmail(e.target.value)} required/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" value={password} onChange={(e)=> setPassword(e.target.value)} required/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Login
      </Button>
      <div className="py-4">
        <p className="text-center">
          Don't have an account ? <Link to="/signup">Signup</Link>
        </p>
      </div>
    </Form>
    </Col>
    </Row>
    </Container>
  )
}

export default Login