import { useState } from 'react'
import "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListTask from './components/LiskTask';
import Controll from './components/Controll';
import AddNewTask from './components/AddNewTask';



function App() {
  const [listTask, setListTask] = useState([
    { taskId: 1, taskName: "Task 1" },
    { taskId: 2, taskName: "Task 2" },
    { taskId: 3, taskName: "Task 3" },
  ])

  return (
    <Container>
      <div>
        <div className='header'>
          <h2>Todo List</h2>
          <small>Get things done, one item at time</small>
        </div>
        <hr />
        <div className='container' >
          <ListTask listTask={listTask} />

          <Controll />
        </div>
        <div className='footer'>
          <span>Add to the todo list</span>
          <InputGroup className="mb-3">
            <Form.Control
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
            />
            <Button variant="outline-light" id="button-addon2">
              Button
            </Button>
          </InputGroup>
        </div>
        {/* <AddNewTask/> */}
      </div>
    </Container>
  )
}

export default App
