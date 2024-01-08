import React, { useState } from "react";
import Navbar from "../components/Navbar";
import DynamicHero from "../components/DynamicHero";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", email, "Password:", password);
  };

  return (
    <div>
      <div className="container-xxl position-relative p-0">
        <Navbar />
        <DynamicHero page="login"/>
      </div>

      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-6 col-lg-4">
            <div className="card p-4">
              <h2 className="mb-4 text-center fw-bold text-uppercase">Login</h2>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label fw-bold">
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Enter email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="password" className="form-label fw-bold">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>

                <button type="submit" className="btn btn-primary mb-3 w-100" onClick={handleSubmit}>
                  Login
                </button>

                <p className="mb-0 text-center">
                  Don't have an account? <Link to="/register">Sign up</Link>
                </p>

                <p className="text-center">
                <Link to="/forgotpassword">Forgot password?</Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
