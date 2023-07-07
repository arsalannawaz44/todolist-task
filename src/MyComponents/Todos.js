import React from "react";
import { TodoItem } from "./TodoItem";
import Card from "react-bootstrap/Card";

export const Todos = (props) => {
  let todosStyle = {
    color: "white",
    background: "black",
  }
  return (
    <div className="container">
      <h3 className="my-5 p-2" style={todosStyle}>Todos List</h3>
      {props.todos.length == 0 ? (
        <Card className="text-center bg-danger text-white border-0">
          <Card.Body>No Todos to Display</Card.Body>
        </Card>
      ) : (
        props.todos.map((todo) => {
          return (
            <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete} />
          );
        })
      )}
    </div>
  );
};
