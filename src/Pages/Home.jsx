import React from "react";
import { Link } from "react-router-dom";
import "../Styles/Home.css";

const Home = () => {
  return (
    <div className="app-frame">
      <div className="app-containerr">
        <div className="home-container">
          <div className="image-placeholder" />
          <div className="home-content">
            <h1 className="home-title">Welcome to PopX</h1>
            <p className="home-subtitle">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            </p>
            <div className="home-buttons">
              <Link to="/createAccount">
                <button className="btn-primary">Create Account</button>
              </Link>
              <Link to="/login">
                <button className="btn-secondary">
                  Already Registered? Login
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
