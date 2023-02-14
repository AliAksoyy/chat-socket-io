import React, { useState } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'

import logo from "../assets/ali.webp"
import "./Signup.css"
import {useSignupUserMutation} from "../services/appApi"



const Signup = () => {

  const [email,setEmail] =useState("")
  const [password,setPassword]=useState("")
  const [name,setName]=useState("")
  const [image,setImage]=useState(null)
  const [uploadingImg,setUploadingImg]=useState(false)
  const [imagePreview,setImagePreview]=useState("")
  const [signupUser, {isLoading,error}] =useSignupUserMutation()
  const navigate=useNavigate()
  
  function validateImg(e) {
    const file =e.target.files[0]
    if(file.size >1048576){
      return alert("Max file size is 1mb")
    }else {
      setImage(file)
      setImagePreview(URL.createObjectURL(file))
      console.log(URL.createObjectURL(file))
    }
  }

  async function uploadImage () {
      const data = new FormData();
      console.log(data);
      data.append("file", image);
      data.append("upload_preset","xfg7kqtc")
      try {
        setUploadingImg(true)
        const res = await fetch("https://api.cloudinary.com/v1_1/ddhnnnyes/image/upload", {
          method:"post",
          body:data
        });
        console.log(res)
        const urlData = await res.json()
        console.log(urlData)
        setUploadingImg(false)
        return urlData.url
      }catch(err) {
        setUploadingImg(false)
        console.log(err)
      }
  }




  async function handleSubmit(e) {
    e.preventDefault();
    if(!image) return alert("Please upload your profile picture")
    const url = await uploadImage(image);
    console.log(url)
    signupUser({name,email,password,picture:url}).then(({data})=> {
      if(data){
        console.log(data);
        navigate("/chat")
      }
    })
  }


  return (
    <Container>
    <Row>
    <Col md={7} className="d-flex align-items-center justify-content-center flex-direction-column">
    <Form onSubmit={handleSubmit} style={{width:"80%", maxWidth:500}}>
        <h1 className="text-center">Create Account</h1>
        <div className="signup-profile-pic__container">
          <img src={imagePreview || logo} className="signup-profile-pic" alt="" />
          <label htmlFor="image-upload" className='image-upload-label'>
            <i className='fas fa-plus-circle add-picture-icon'></i>
          </label>
          <input type="file" id="image-upload" hidden accept="image/png, image/jpeg" onChange={validateImg} />
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
        {uploadingImg ? "Signing you up.." : "Signup" }
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