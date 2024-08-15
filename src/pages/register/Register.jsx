import { useRef } from "react";
import "./register.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const username = useRef();
  const email = useRef();
  const password = useRef();
  const passwordAgain = useRef();
  const navigate = useNavigate();
  const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (passwordAgain.current.value !== password.current.value) {
      passwordAgain.current.setCustomValidity("Your passwords do not match!");
    } else {
      const user = {
        username: username.current.value,
        email: email.current.value,
        password: password.current.value,
        passwordAgain: passwordAgain.current.value,
      };
      try {
        await axios.post(`${API_BASE_URL}/auth/register`, user);
        navigate("/login");
      } catch (err) {
        console.error(
          "Registration failed:",
          err.response ? err.response.data : err.message
        );
      }
    }
  };

  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Diyolinker</h3>
          <span className="loginDesc">
            Connect with the world around you on Diyolinker
          </span>
        </div>
        <div className="loginRight">
          <form className="registerBox" onSubmit={handleSubmit}>
            <input
              placeholder="Username"
              required
              ref={username}
              className="loginInput"
            />
            <input
              placeholder="Email"
              required
              ref={email}
              className="loginInput"
              type="email"
            />
            <input
              placeholder="Password"
              required
              ref={password}
              className="loginInput"
              type="password"
              minLength="6"
            />
            <input
              placeholder="Password Again"
              required
              ref={passwordAgain}
              className="loginInput"
              type="password"
            />
            <button className="loginButton" type="submit">
              Sign Up
            </button>
            <button className="loginRegisterButton">
              Log into your Account
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
