import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import MessageForm from '../components/MessageForm'
import Sidebar from '../components/Sidebar'

const Chat = () => {
  return (
    <Container>
      <Row>
        <Col>
          <Sidebar md={4} />
        </Col>
        <Col>
        <MessageForm md={8} />
        </Col>
      </Row>
    </Container>
  )
}

export default Chat