import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";


export const AddTodo = ({ addTodo }) => {
    let addTodoStyle = {
        color: "white",
        background: "black"
    }
    const [title, setTtitle] = useState("");
    const [desc, setDesc] = useState("");

    const submit = (e) => {
        e.preventDefault();
        if (!title || !desc) {
            alert("Title or Desciption cannot be null")
        }
        else{
        addTodo(title, desc);
        setTtitle("")
        setDesc("")
    }
}
    return (
        <div className="container my-3">
            <h3 className="my-5 p-2" style={addTodoStyle}>Add a Todo</h3>
            <Form onSubmit={submit}>
                <Form.Group className="mb-3" id="title">
                    <Form.Label htmlFor="title">Todo Title</Form.Label>
                    <Form.Control type="text" value={title} onChange={(e) => setTtitle(e.target.value)} placeholder="Enter Todo Title" />
                </Form.Group>

                <Form.Group className="mb-3" id="desc">
                    <Form.Label htmlFor="desc">Todo Description</Form.Label>
                    <Form.Control type="text" value={desc} onChange={(e) => setDesc(e.target.value)} placeholder="Enter Todo Description" />
                </Form.Group>
                <Button className="btn-sm" variant="success" type="submit">
                    Add Todo
                </Button>
            </Form>
        </div>
    );
};
