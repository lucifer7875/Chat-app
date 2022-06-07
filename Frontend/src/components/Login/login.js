import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./login.css";


const Login = ({ setLoginUser }) => {

    const navigate = useNavigate()

    const [user, setUser] = useState({
        mobileNumber: "",
        password: "",
    })

    const handlechange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const Login = () => {
        axios.post("http://localhost:9002/login", user)
            .then(res => {
                alert(res.data.message)
                localStorage.setItem("user_values", JSON.stringify(res.data.user))
                setLoginUser(res.data.user)
                navigate("/home")
            })

    }

    return (
        <div className="Login">
            <h1>Login</h1>
            <hr />

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

            <br />

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
            <br />

            <button className="btn btn-primary " onClick={Login}>Login</button>
            &nbsp; &nbsp;
            <button className="btn btn-primary" onClick={() => navigate("/register")} >Register</button>
        </div>
    )
}

export default Login