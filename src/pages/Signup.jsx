import React, { useState } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import logo from "../assets/ali.webp"
import "./Signup.css"


function validateImg() {}

const Signup = () => {

  const [email,setEmail] =useState("")
  const [password,setPassword]=useState("")
  const [name,setName]=useState("")

  function handleSubmit(e){
    e.preventDefault()
    console.log(name,email,password);
    setEmail("")
    setName("")
    setPassword("")
  }



  return (
    <Container>
    <Row>
    <Col md={7} className="d-flex align-items-center justify-content-center flex-direction-column">
    <Form onSubmit={(e)=>handleSubmit(e)} style={{width:"80%", maxWidth:500}}>
        <h1 className="text-center">Create Account</h1>
        <div className="signup-profile-pic__container">
          <img src={logo} className="signup-profile-pic" alt="" />
          <label htmlFor="image-upload" className='image-upload-label'>
            <i className='fas fa-plus-circle add-picture-icon'></i>
          </label>
          <input type="file" id="image-upload" hidden-accept="image/png, image/jpeg" onChange={validateImg} />
        </div>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Username</Form.Label>
        <Form.Control type="text" placeholder="Enter username" value={name} onChange={(e)=> setName(e.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e)=> setEmail(e.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" value={password} onChange={(e)=> setPassword(e.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Login
      </Button>
      <div className="py-4">
        <p className="text-center">
          Already have an account ? <Link to="/login">Login</Link>
        </p>
      </div>
    </Form>
    </Col>
    <Col md={5} className="signup_bg">
    </Col>
    </Row>
    </Container>
  )
}

export default Signup