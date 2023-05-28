import React from 'react';
import { Button, Form } from 'react-bootstrap';

export default function Todo(props) {
  return (
    <div className="todoItem">
      <ul>
        <li className={props.complete ? 'strike' : ''}>
          {console.log(props.complete)}
          {props.task}{' '}
          <Button
            variant="success"
            onClick={(e) => {
              props.handleToggle(props.id);
            }}
          >
            Change status
          </Button>
          {"  "}
          <Button
            variant="danger"
            onClick={(e) => {
              props.handleDelete(props.id);
            }}
          >
            Delete
          </Button>
        </li>
      </ul>
    </div>
  );
}
