import React, { useState, useEffect } from 'react';
import './style.css';
import { Button, Form } from 'react-bootstrap';
import Todo from './Todo.js';

// https://www.educative.io/blog/react-hooks-tutorial-todo-list

export default function App() {
  const [todoList, setTodoList] = useState([]);
  const [userInput, setUserInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setTodoList((prevArray) => [
      ...prevArray,
      {
        id: todoList.length + 1,
        task: userInput,
        complete: false,
      },
    ]);
    console.log('after settodolist');
    setUserInput('');
  };

  const handleToggle = (taskId) => {
    let mapped = todoList.map(todo => {
      return todo.id === taskId ? {...todo, complete : !todo.complete} : {...todo}
    });
    setTodoList(mapped);
  }

  const handleDelete = (taskId) => {
    let afterDelete = todoList.filter(ele => ele.id !== taskId);
    setTodoList(afterDelete)
  }

  return (
    <div className="App">
      <h1>To Do List</h1>
      {todoList.length === 0 ? (
        <p>You don't have any item in your Todo App yet!</p>
      ) : (
        todoList.map((todo) => <Todo key={todo.id} {...todo} handleToggle={handleToggle} handleDelete={handleDelete}/>)
      )}
      <br />
      <Form onSubmit={handleSubmit}>
        <Form.Control
          value={userInput}
          required
          type="text"
          placeholder="Enter task todo ..."
          autoComplete="off"
          onChange={(e) => setUserInput(e.target.value)}
        ></Form.Control>
        <br />
        <Button type="submit">Submit</Button>
      </Form>
    </div>
  );
}
