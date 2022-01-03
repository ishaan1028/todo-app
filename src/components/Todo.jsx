import React, { useRef, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { nanoid } from 'nanoid';

export default function Todo() {

    const taskTextRef = useRef();

    const [tasks, setTasks] = useState(["Complete todo app", "Practice react hooks and JSX"]);

    const handleSubmit = (e) => {
        e.preventDefault();

        const text = taskTextRef.current.value.trim();

        taskTextRef.current.value = "";

        if (text.length === 0) {
            alert("please enter something");
            return;
        }

        if (tasks.find(e => e === text)) {
            alert("this task already exists");
            return;
        }

        setTasks([...tasks, text]);
    }

    const handleDelete = (task) => {
        const newTasks = tasks.filter(t => t !== task);
        setTasks([...newTasks]);
    }

    return <div className="todoBody">
        <Form className='formBody' onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
                <Form.Label>New task</Form.Label>
                <Form.Control type="text" placeholder="Enter task detail..." required
                    ref={taskTextRef}
                />
            </Form.Group>
            <div className="addTaskBtn">
                <Button variant='dark' type='submit'>ADD</Button>
            </div>
        </Form>
        <div className="TasksDiv">
            <h4>
                PENDING TASKS
            </h4>
            <ul className="tasksList">
                {
                    tasks?.map((t, i) => <li key={nanoid()} className="taskItem">
                        <p className="taskDetailPara">
                            {t}
                        </p>
                        <Button variant='dark' onClick={() => handleDelete(t)}>DONE</Button>
                    </li>)
                }

            </ul>
        </div>

    </div>

}
