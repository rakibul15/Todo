import React from 'react'

const Taskdetails = (props) => {
    const{item,index}=props;
    return (
       
            <tr>
                  <td>{index + 1}</td>
                  <td>{item.title}</td>
                  <td>{item.body}</td>
                  <td>{item.priority}</td>
                  <td>
                    <i
                      className="fa fa-edit text-success"
                      title="edit tasks"
                    ></i>
                    <i
                      className="fa fa-trash text-danger"
                      title="delete tasks"
                    ></i>
                  </td>
                </tr>
       
    )
}

export default Taskdetails;
