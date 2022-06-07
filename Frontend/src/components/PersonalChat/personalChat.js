import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/esm/Container";

const PersonalChat = () => {

    const navigate = useNavigate()

    return (

        <div className="personalChat">
            <Navbar>
                <Container>
                    <button className="btn btn-outline-primary" onClick={() => navigate("/")}>
                        Logout<i className="bi bi-lock-fill"></i>
                    </button>

                    <button type="button" className="btn btn-outline-primary" onClick={() => navigate("/home")}>
                        <i className="bi bi-house-heart"></i>
                    </button>
                </Container>
            </Navbar>
            <hr />

            <div className="row">
                <div className="col-sm-2">
                    <div className="card" style={{ height: "600px" }}>
                        <div className="card-body">
                            <h4 className="card--title"><i className="bi bi-person-fill"></i>User</h4>
                            <hr />
                        </div>
                    </div>
                </div>
                <div className="col-sm-9">
                    <div className="card" style={{ height: "600px" }}>
                        <div className="header" style={{ padding: "3px" }}><h4><i class="bi bi-chat-dots-fill"></i> User</h4></div><hr />

                        <div className="body"></div>

                        <div className="footer" style={{ position: "absolute", bottom: "0", width: "100%" }}>
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

export default PersonalChat;