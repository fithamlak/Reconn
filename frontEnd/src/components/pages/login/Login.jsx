import { useRef, useState, useEffect } from "react";

import useAuth from "../../../hooks/useAuth";
import "./login.css";
import "../../../styles/content.css";

import axios from "axios";
import { NavLink } from "react-router-dom";

const Login = () => {
  const { setAuth } = useAuth();
  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [user, pwd]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:8000/auth",
        JSON.stringify({ user, pwd }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );

      //console.log(JSON.stringify(response?.data));
      //console.log(JSON.stringify(response));

      const accessToken = response?.data?.accessToken;
      const roles = response?.data?.roles;
      try {
        setAuth({ user, pwd, roles, accessToken });
      } catch (err) {
        console.log(err);
      }
      setUser("");
      setPwd("");
      setSuccess(true);
    } catch (err) {
      if (!err?.response) {
        setErrMsg("No Server Response");
      } else if (err.response?.status === 400) {
        setErrMsg("Missing Username or Password");
      } else if (err.response?.status === 401) {
        setErrMsg("Wrong User name or  Password");
      } else {
        setErrMsg("Login Failed");
      }
      errRef.current.focus();
    }
  };

  return (
    <div className="content">
      {success ? (
        <section className="section">
          <br />
          <p>
            <NavLink to="/manage" style={{ fontSize: "25px" }}>
              manage datas
            </NavLink>
          </p>
          <p>
            <NavLink to="/users" style={{ fontSize: "25px" }}>
              manage users
            </NavLink>
          </p>
          <p>
            <NavLink to="/contribute" style={{ fontSize: "25px" }}>
              contribute somethong
            </NavLink>
          </p>
        </section>
      ) : (
        <section className="section">
          <p
            ref={errRef}
            className={errMsg ? "errmsg" : "offscreen"}
            aria-live="assertive"
          >
            {errMsg}
          </p>
          <h1>Sign In</h1>
          <form onSubmit={handleSubmit}>
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              ref={userRef}
              autoComplete="off"
              onChange={(e) => setUser(e.target.value)}
              value={user}
              required
            />

            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              onChange={(e) => setPwd(e.target.value)}
              value={pwd}
              required
            />
            <button>Sign In</button>
          </form>
          <p>
            Need an Account?
            <br />
            <span className="line">
              {/*put router link here*/}
              <a href="/Register">Sign Up</a>
            </span>
          </p>
        </section>
      )}
    </div>
  );
};

export default Login;
