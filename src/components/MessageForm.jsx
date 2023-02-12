import React from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'
import "./MessageForm.css"


const MessageForm = () => {

    const handleSubmit =function(e){
            e.preventDefault()
    }


  return (
    <>
    <div className="messages-output"></div>
        <Form onSubmit={handleSubmit}>
            <Row>
                <Col md={11}>
                    <Form.Group>
                        <Form.Control type="text" placeholder="Your Message"></Form.Control>
                    </Form.Group>
                </Col>
                <Col md={1}>
                    <Button type="submit" style={{backgroundColor:"orange"}}>
                        <i className="fas fa-paper-plane"></i>
                    </Button>
                </Col>
            </Row>
        </Form>
    </>
  )
}

export default MessageForm