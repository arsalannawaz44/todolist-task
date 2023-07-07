import React from "react";
import Button from "react-bootstrap/Button";

export const TodoItem = ({ todo, onDelete }) => {
  return (
    <>
    <div>
      <h5 className="mt-3">{todo.title}</h5>
      <p>{todo.desc}</p>
      <Button
        variant="danger"
        size="sm"
        onClick={() => {
          onDelete(todo);
        }}
      >
        Delete
      </Button>{" "}
    </div>
    <hr/>
    </>
  );
};
