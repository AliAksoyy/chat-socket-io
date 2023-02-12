import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import MessageForm from '../components/MessageForm'
import Sidebar from '../components/Sidebar'

const Chat = () => {
  return (
    <Container>
      <Row>
        <Col>
          <Sidebar />
        </Col>
        <Col>
        <MessageForm />
        </Col>
      </Row>
    </Container>
  )
}

export default Chat