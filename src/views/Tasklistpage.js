import React from "react";
import { Container } from "react-bootstrap";
// import { Button } from "bootstrap";
import "../styles/CustomStyle.css";
import { useEffect, useState } from "react";
import Layout from "../components/layout/Layout";
import Tasklist from "../components/tasks/Tasklist";
import Taskcreate from "../components/tasks/Taskcreate";

import { getTaskData } from "../services/TaskdataService";
import CounterComponents from "../components/counter/CounterComponents";
import TestCounterHit from "../components/counter/TestCounterHit";

const Tasklistpage = () => {
  const [isCreatemode, setIsCreateMode] = useState(false);
  // const [buttonMode, setButtonMode] = useState("add");

  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("");
  const [isAdded, setIsAdded] = useState(false);
  // const isAdded=false;

  useEffect(() => {
    //Call API and Get Data
    //    const Data=[
    //      {
    //        id:1,
    //        title:"First Title",
    //        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis iste laboriosam earum?",
    //        priority: "High",
    //      },
    //      {
    //       id:2,
    //       title:"Second Title",
    //       description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis iste laboriosam earum?",
    //       priority: "Low",
    //     },
    //     {
    //       id:3,
    //       title:"Third Title",
    //       description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis iste laboriosam earum?",
    //       priority: "High",
    //     }
    //    ]
    initializedata();
      
    //  
  }, []);

  const initializedata =async () => {
    const data=await getTaskData();
    setTasks(data);
    // console.log(`data from UI`, data)
  };

  // Button Change Event Change

  const createTask = (e) => {
    e.preventDefault();
    const taskItem = {
      id: 1,
      title,
      description,
      priority,
    };
    const tasksdata = tasks;
    tasksdata.unshift(taskItem);
    setTasks(tasksdata);
    setIsAdded(true);
    setDescription("");
    setTitle("");
    setPriority("");
  };
  return (
    <div>
      <Layout>
          <CounterComponents></CounterComponents>
          <br/>
           <br/>
           <TestCounterHit></TestCounterHit>
        <Container className="mt-5 pb-5">
          {isCreatemode && (
            <Taskcreate
            
            ></Taskcreate>
          )}

          <Tasklist
            data={tasks}
            setIsCreateMode={() => setIsCreateMode(isCreatemode ? false : true)}
          ></Tasklist>
        </Container>
      </Layout>
    </div>
  );
};

export default Tasklistpage;
