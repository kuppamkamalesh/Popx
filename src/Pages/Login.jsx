import React, { useState } from "react";
import "../Styles/Login.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  // handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // validate inputs
  const validate = () => {
    let newErrors = {};

    if (!formData.email.trim()) {
      newErrors.email = "Email address is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    if (!formData.password.trim()) {
      newErrors.password = "Password is required";
    }

    return newErrors;
  };

  const handleLogin = () => {
    const validationErrors = validate();
    setErrors(validationErrors);

    // if no errors → navigate with data
    if (Object.keys(validationErrors).length === 0) {
      navigate("/account-settings", {
        state: {
          name: "PopX User", // default or from API
          email: formData.email,
        },
      });
    }
  };

  return (
    <div className="app-frame">
      <div className="app-containerr">
        <div className="login-container">
          <div className="login-content">
            <h1 className="login-title">Sign in to your PopX account</h1>
            <p className="login-subtitle">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            </p>

            {/* Email */}
            <div className="loginform">
              <label>Email Address</label>
              <input
                type="email"
                name="email"
                placeholder="Enter email address"
                value={formData.email}
                onChange={handleChange}
                className={errors.email ? "input-error" : ""}
              />
              {errors.email && <p className="error-message">{errors.email}</p>}
            </div>

            {/* Password */}
            <div className="loginform">
              <label>Password</label>
              <input
                type="password"
                name="password"
                placeholder="Enter password"
                value={formData.password}
                onChange={handleChange}
                className={errors.password ? "input-error" : ""}
              />
              {errors.password && (
                <p className="error-message">{errors.password}</p>
              )}
            </div>

            <button className="btn-login" onClick={handleLogin}>
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
