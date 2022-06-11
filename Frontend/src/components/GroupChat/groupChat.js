import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/esm/Container";


const GroupChat = () => {
    const navigate = useNavigate()



    return (
        <div className="personalChat" >
            <div style={{ backgroundColor: "rgb(0 0 0)" }}>
                <Navbar>
                    <Container>
                        <button className="btn btn-primary" onClick={() => navigate("/")}>
                            Logout<i className="bi bi-lock-fill"></i>
                        </button>

                        <button type="button" className="btn btn-primary" onClick={() => navigate("/home")}>
                            <i className="bi bi-house-heart"></i>
                        </button>
                    </Container>
                </Navbar>
                <hr />
            </div>


            <div className="Pchat" >
                <div className="col-sm-11" >
                    <div className="card" style={{ height: "650px", marginLeft: "9%" }}>
                        <div className="card--title" style={{ padding: "3px" }}><h4 className="bi bi-chat-dots-fill"> Group Chat</h4>
                            <hr />
                        </div>
                        <div className="card-body"></div>
                        <div className="card-footer" style={{ backgroundColor: "rgb(193 180 180)" }}>
                            <div className="row">
                                <div className="input-group ">
                                    <input type="text"
                                        className="form-control"
                                        placeholder="Type a message"
                                        aria-label="Recipient's username"
                                        aria-describedby="button-addon2">
                                    </input>&nbsp;&nbsp;
                                    <button className="btn" style={{ backgroundColor: "#50d6a8" }}>&#9658;</button>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>


        </div>
    )
}
export default GroupChat;