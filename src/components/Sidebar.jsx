import React from 'react'
import { ListGroup, ListGroupItem } from 'react-bootstrap'

const Sidebar = () => {
    const rooms = ["first room", "second room", "third room"]
  return (
    <div>
        <h2>Avaliable Rooms</h2>
        <ListGroup>
            {rooms.map((room,i)=> {
               return( <ListGroupItem key={i}>
                    {room}
                </ListGroupItem>
            )})}
        </ListGroup>
        <h2>Members</h2>
    </div>
  )
}

export default Sidebar