import React, { useState } from 'react'
import {
    Form,
    Button,
  } from "react-bootstrap";

const Taskcreate = (props) => {
  // const {title,createTask,setTitle,description,setDescription,priority,setPriority}=props;
  const [title, setTitle] = useState('')
  const [priority, setPriority] = useState('')

  const createTask=()=>{
    alert("Hello")
  }
    return (
        <div>
            <Form onSubmit={(e) => createTask(e)}>
              <Form.Group controlId="title">
                <Form.Control
                  type="text"
                  placeholder="Enter Title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </Form.Group>

              

              <select
                className="form-control"
                as="select"
                value={priority}
                onChange={(e) => setPriority(e.target.value)}
              >
                <option value="">Select Priority</option>
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
              </select>
              <Button className="mt-5" variant="primary" type="submit">
                Submit
              </Button>
            </Form>
        </div>
    )
}

export default Taskcreate
