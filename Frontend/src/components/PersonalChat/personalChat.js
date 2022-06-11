import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/esm/Container";

class Personalchat extends React.Component {


    constructor(props) {
        super(props)

        this.state = {
            items: {},
            DataisLoaded: false,
        }
    }
    componentDidMount() {
        const user_id = JSON.parse(localStorage.getItem("user_values"))._id
        fetch(`http://localhost:9002/personalChat`)
            .then((res) => res.json())
            .then((json) => {
                console.log(json)
                this.setState({
                    items: json,
                    DataisLoaded: true,
                })
            })

            .catch((error) => console.log(error))
    }
    render() {
        var allItems = this.state.items
        var parsedList

        if (Array.isArray(allItems)) {
            console.log("items is present")
            console.log(allItems)
            parsedList = allItems.map((user) => (
                <tr>

                    <button className="btn btn-outline-info" style={{ width: "100%" }}>
                        <td className="bi bi-person-fill">{user.userName}
                        </td>
                    </button>

                </tr>


            ))
        }

        return (

            <div className="personalChat">
                <div style={{ backgroundColor: "rgb(0 0 0)" }}>
                    <Navbar>
                        <Container>
                            <button className="btn btn-primary" onClick={() => this.props.navigate("/")}>
                                Logout<i className="bi bi-lock-fill"></i>
                            </button>

                            <button type="button" className="btn btn-primary" onClick={() => this.props.navigate("/home")}>
                                <i className="bi bi-house-heart"></i>
                            </button>
                        </Container>
                    </Navbar>
                    <hr />
                </div>

                <div className="row" style={{ marginLeft: "2px", marginRight: "10px" }}>
                    <div className="col-sm-2">
                        <div className="card" style={{ height: "650px" }}>
                            <div className="card-body">
                                <h4 className="card--title"><i className="bi bi-person-fill"></i>User</h4>
                                <hr />
                                <tr>
                                    <th style={{ textAlign: "justify", padding: "" }}>{parsedList}</th>
                                </tr>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-10">
                        <div className="card" style={{ height: "650px" }}>
                            <div className="card-header" style={{ padding: "3px" }}><h4><i className="bi bi-chat-dots-fill"></i> User Chat</h4>
                            </div><hr />
                            <div className="card-body"></div>
                            <div className="card-footer" style={{ position: "absolute", bottom: "0", width: "100%" }}>
                                <div className="row">
                                    <div className="input-group ">
                                        <input type="text"
                                            className="form-control"
                                            placeholder="Type a message"
                                            aria-label="Recipient's username"
                                            aria-describedby="button-addon2">
                                        </input>
                                        <button className="btn btn-outline-info" >&#9658;</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

function PersonalChat(props) {
    let navigate = useNavigate();
    return <Personalchat {...props} navigate={navigate} />
}
export default PersonalChat;
