import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/esm/Container";
import { io } from "socket.io-client";
import { Card } from "react-bootstrap";
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
    <div className="col-sm-10">
      <div className="card" style={{ height: "650px" }}>
        <div className="card-header" style={{ padding: "3px" }}>
          <h4>
            <i className="bi bi-chat-dots-fill"></i> User Chat
          </h4>
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
class Personalchat extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      items: {},
      DataisLoaded: false,
    };
  }
  componentDidMount() {
    const user_id = JSON.parse(localStorage.getItem("user_values"))._id;
    fetch(`http://localhost:9002/personalChat`)
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        this.setState({
          items: json,
          DataisLoaded: true,
        });
      })

      .catch((error) => console.log(error));
  }
  render() {
    var allItems = this.state.items;
    var parsedList;

    if (Array.isArray(allItems)) {
      console.log("items is present");
      console.log(allItems);
      parsedList = allItems.map((user) => (
        <tr>
          <button className="btn btn-outline-info" style={{ width: "100%" }}>
            <td className="bi bi-person-fill">{user.userName}</td>
          </button>
        </tr>
      ));
    }

    return (
      <div className="personalChat">
        <div style={{ backgroundColor: "rgb(0 0 0)" }}>
          <Navbar>
            <Container>
              <button
                className="btn btn-primary"
                onClick={() => this.props.navigate("/")}
              >
                Logout<i className="bi bi-lock-fill"></i>
              </button>

              <button
                className="btn btn-primary"
                onClick={() => this.props.navigate("/home")}
              >
                <i className="bi bi-house-heart"></i>
              </button>
            </Container>
          </Navbar>
          <hr />
        </div>
        <div className="row" style={{ marginLeft: "2px", marginRight: "10px" }}>
          <div className="col-sm-2">
            <div className="card" style={{ height: "650px" }}>
              <div className="card-header" style={{ padding: "3px" }}>
                <h4>
                  <i className="bi bi-person-fill"></i> User
                </h4>
              </div>
              <div className="card-body">
                <tr>
                  <th style={{ textAlign: "justify", padding: "" }}>
                    {parsedList}
                  </th>
                </tr>
              </div>
            </div>
          </div>

          {/* note:*/}
          <MsgBox />
        </div>
      </div>
    );
  }
}

function PersonalChat(props) {
  let navigate = useNavigate();
  return <Personalchat {...props} navigate={navigate} />;
}
export default PersonalChat;
