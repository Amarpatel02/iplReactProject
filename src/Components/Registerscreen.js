import { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./Register.css"

const RegisterScreen = () => {
  const [username, setUsername] = useState();
  const [emailerr, setEmailerr] = useState();

  const [password, setPassword] = useState();
  const [passworderr, setPassworderr] = useState();

  const [confirmpass, setConfirmpass] = useState();
  const [confirmpassworderr, setConfirmpasserr] = useState();

  const [submit, setSubmit] = useState();

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!username || !password || !confirmpass) {
      setSubmit("Fill all form inputs");
    } else {
      const details = {
        username: username,
        password: password,
        confirmpassword: confirmpass,
      };
      navigate("/LoginScreen");
      alert("Register successful");

      localStorage.setItem("Details",JSON.stringify(details))
    }
  };

  const handleUsername = (event) => {
    setUsername(event.target.value);

    if (
      event.target.value.match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/,
      )
    ) {
      setEmailerr("");
    } else {
      setEmailerr("Email should be in the format example@gmail.com");
    }
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);

    if (
      event.target.value.match(/^[a-zA-Z0-9!@#$%^&*]/) &&
      event.target.value.match(/^[a-zA-Z0-9!@#$%^&*]{6,16}$/)
    ) {
      setPassworderr("");
    } else {
      setPassworderr("Password should contain at least six numbers");
    }
  };

  const handleConfirm = (event) => {
    setConfirmpass(event.target.value);

    if (event.target.value === password) {
      setConfirmpasserr("");
    } else {
      setConfirmpasserr("Passwords do not match");
    }
  };

  const handleRegister = () => {
    navigate("/LoginScreen");
  };

  return (
    <>
     
      <form onSubmit={handleSubmit} id="form">
      <h1>Register Page</h1><br/>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            value={username}
            onChange={handleUsername}
          />
        </div>
        <small style={{ color: "red" }}>{emailerr}</small> 

        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
            value={password}
            onChange={handlePassword}
          />
        </div>
        <small style={{ color: "red" }}>{passworderr}</small> 

        <div className="form-group">
          <label htmlFor="exampleInputConfirmPassword1">Confirm Password</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputConfirmPassword1"
            placeholder="Confirm Password"
            value={confirmpass}
            onChange={handleConfirm}
          />
        </div>
        <small style={{ color: "red" }}>{confirmpassworderr}</small> <br/>
        <small style={{ color: "red" }}>{submit}</small> 
<div>
        <button type="submit" className="btn btn-primary" id="po">
          Submit
        </button>
        <button className="btn btn-primary" id="po" onClick={handleRegister}>
          Login
        </button></div>
      </form>
    </>
  );
};

export default RegisterScreen;
