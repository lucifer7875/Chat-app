import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./register.css"
import axios from "axios";

const Register = () => {

    const navigate = useNavigate()

    const [user, setUser] = useState({
        userName: "",
        firstName: "",
        lastName: "",
        mobileNumber: "",
        image: "",
        password: "",
        confirmPassword: "",
    })

    const handlechange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const Register = () => {
        const { userName, firstName, lastName, mobileNumber, password, confirmPassword } = user
        if (userName && firstName && lastName && mobileNumber && password && (password === confirmPassword)) {
            axios.post("http://localhost:9002/register", user)
                .then(res => {
                    alert(res.data.message)
                    navigate("/")
                })
        } else {
            alert("incorrect input")
        }
    }


    return (
        <div className="Register">
            <h1>Register</h1>
            <hr />

            <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">User Name</span>
                <input
                    type="text"
                    name="userName"
                    className="form-control"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                    value={user.userName}
                    // placeholder="Enter User Name"
                    onChange={handlechange}>
                </input>
            </div>

            <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">First Name</span>
                <input
                    type="text"
                    name="firstName"
                    className="form-control"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                    value={user.firstName}
                    // placeholder="Enter First Name"
                    onChange={handlechange}>
                </input>
            </div>
            <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">Last Name</span>
                <input
                    type="text"
                    name="lastName"
                    className="form-control"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                    value={user.lastName}
                    // placeholder="Enter Last Name"
                    onChange={handlechange}>
                </input>
            </div>


            <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">Mobile Number</span>
                <input
                    type="big-int"
                    name="mobileNumber"
                    className="form-control"
                    // placeholder="Enter Mobile Number"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                    value={user.mobileNumber}
                    onChange={handlechange}>
                </input>
            </div>
            {/* <div class="input-group mb-3">
                <input
                    type="file"
                    name="image"
                    className="form-control"
                    id="inputGroupFile02"
                    value={user.image}>
                </input>
                <label class="input-group-text" for="inputGroupFile02">Upload</label>
            </div> */}
            <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">Password</span>
                <input
                    type="password"
                    name="password"
                    className="form-control"
                    // placeholder="Enter  Password"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                    value={user.password}
                    onChange={handlechange}

                />
            </div>
            <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">Confirm Password</span>
                <input
                    type="password"
                    name="confirmPassword"
                    className="form-control"
                    // placeholder="Enter confirm  Password"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                    value={user.confirmPassword}
                    onChange={handlechange}

                />
            </div>
            <button className="btn btn-primary " onClick={Register} >Register</button> &nbsp; &nbsp;
            <button className="btn btn-primary " onClick={() => navigate("/")}>Login</button>
        </div>
    )
}

export default Register