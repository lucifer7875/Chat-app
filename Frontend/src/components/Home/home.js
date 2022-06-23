import React from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="Home">
      <div style={{ backgroundColor: "rgb(0 0 0)" }}>
        <Navbar>
          <Container>
            <button className="btn btn-primary" onClick={() => navigate("/")}>
              Logout<i className="bi bi-lock-fill"></i>
            </button>

            <button
              className="btn btn-primary"
              onClick={() => navigate("/profile")}
            >
              Profile <i className="bi bi-person-square"></i>
            </button>
          </Container>
        </Navbar>
        <hr />
      </div>
      <h1>
        <i className="bi bi-house-heart"></i>
      </h1>
      <h2>You are at Homepage.</h2>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <Container>
        <div
          className="row"
          style={{
            boxShadow:
              " box-shadow: 0 1px 2px rgb(0 0 0 / 10%), 0 8px 16px rgb(0 0 0 / 10%)",
            width: "700px",
            justifycontent: "center",
            height: "auto",
            background: "#000000",
            border: "40px solid #000000",
            boxshadow:
              "0 2px 4px rgb(0 0 0 / 10%), 0 8px 16px rgb(0 0 0 / 10%)",
            borderradius: " 8px",
            padding: " 1rem",
            alignitems: "center",
            textalign: "center",
            margin: "30px",
            marginleft: "30%",
          }}
        >
          <div className="col-sm-6">
            <div
              className="card"
              style={{ width: "15rem", backgroundColor: "GrayText" }}
            >
              <div className="card-body">
                <h5 className="card-title">Personal Chat</h5>
                <i
                  className="bi bi-person-fill"
                  style={{ fontSize: "100px" }}
                ></i>{" "}
                <br />
                <button
                  className="btn btn-primary"
                  onClick={() => navigate("/personalChat")}
                >
                  Personal Chat
                </button>
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div
              className="card"
              style={{ width: "15rem", backgroundColor: "GrayText" }}
            >
              <div className="card-body">
                <h5 className="card-title">Group Chat</h5>
                <i
                  className="bi bi-people-fill"
                  style={{ fontSize: "100px" }}
                ></i>{" "}
                <br />
                <button
                  className="btn btn-primary"
                  onClick={() => navigate("/groupChat")}
                >
                  Group Chat
                </button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Home;
