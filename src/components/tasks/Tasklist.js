import React, { useState } from 'react'
import { Table } from 'react-bootstrap';
import Taskdetails from './Taskdetails';


const Tasklist = (props) => {
    const tasks=props.data;
    const [buttonMode, setButtonMode] = useState("add");
    const [isCreatemode, setIsCreateMode] = useState(false);
    function changehandle() {
       props.setIsCreateMode(isCreatemode ? false : true);
        setButtonMode(buttonMode === "add" ? "remove" : "add");
      }
    return (
        <div>
            <div className="row d-flex justify-content-between mt-5 pb-5">
            <div className="col-sm-2">My Tasks</div>
            <div className="col-sm-2">
              <button
                className="btn btn-success"
                onClick={() =>changehandle()}
              >
                {buttonMode}
              </button>
            </div>
          </div>
          <Table striped bordered hover className=" mt-5 pt-4">
            <thead>
              <tr>
                <th>#</th>
                <th>Title</th>
                <th>Description</th>
                <th>Priority</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {tasks.map((item, index) => <Taskdetails  key={index} item={item} index={index} />)}
            </tbody>
          </Table>
        </div>
    )
}

export default Tasklist;
