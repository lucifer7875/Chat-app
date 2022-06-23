import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/esm/Container";
import { Card } from "react-bootstrap";
import { io } from "socket.io-client";
const socket = io("http://localhost:4000");

function MsgBox() {
  const [todos, setTodos] = React.useState([
    // {
    // text: "This is a sampe todo",
    // isDone: false,
    //}
  ]);
  socket.on("received-message", (receivedMsg) => {
    console.log(`received message from server${receivedMsg}`);
    // addTodo(receivedMsg)
  });

  const addTodo = (text) => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
    socket.emit("event-manager", text);
  };
  const [value, setValue] = React.useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };
  return (
    <div className="col-sm-11">
      <div className="card" style={{ height: "650px", marginLeft: "9%" }}>
        <div className="card-header" style={{ padding: "3px" }}>
          <h4 className="bi bi-chat-dots-fill"> Group Chat</h4>
        </div>
        <div className="card-body">
          {todos.map((todo, index) => (
            <Card>
              <Card.Body>{todo.text}</Card.Body>
            </Card>
          ))}
        </div>
        <div
          className="card-footer"
          style={{ backgroundColor: "rgb(193 180 180)" }}
        >
          <div className="row">
            <div className="input-group ">
              <input
                type="text"
                className="form-control"
                placeholder="Type a message"
                aria-label="Recipient's username"
                aria-describedby="button-addon2"
                value={value}
                onChange={(e) => setValue(e.target.value)}
              ></input>
              &nbsp;&nbsp;
              <button
                className="btn"
                onClick={handleSubmit}
                style={{ backgroundColor: "#50d6a8" }}
              >
                &#9658;
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
const GroupChat = () => {
  const navigate = useNavigate();

  return (
    <div className="groupChat">
      <div style={{ backgroundColor: "rgb(0 0 0)" }}>
        <Navbar>
          <Container>
            <button className="btn btn-primary" onClick={() => navigate("/")}>
              Logout<i className="bi bi-lock-fill"></i>
            </button>

            <button
              type="button"
              className="btn btn-primary"
              onClick={() => navigate("/home")}
            >
              <i className="bi bi-house-heart"></i>
            </button>
          </Container>
        </Navbar>
        <hr />
      </div>
      <MsgBox />
    </div>
  );
};

export default GroupChat;
