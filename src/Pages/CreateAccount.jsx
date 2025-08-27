import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Styles/CreateAccount.css";

const CreateAccount = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    password: "",
    company: "",
    agency: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    let newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = "Full name is required";
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    if (!formData.email.trim()) newErrors.email = "Email address is required";
    if (!formData.password.trim()) newErrors.password = "Password is required";
    if (!formData.agency) newErrors.agency = "Please select an option";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      // Pass user data to Account Settings
      navigate("/account-settings", {
        state: {
          name: formData.fullName,
          email: formData.email,
        },
      });
    }
  };

  return (
    <div className="app-frame">
      <div className="app-containers">
        <form className="form-content" onSubmit={handleSubmit}>
          <h1 className="form-title">Create your PopX account</h1>

          <div className="form-fields">
            <div className={`signupform ${errors.fullName ? "error" : ""}`}>
              <label>Full Name*</label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Enter your full name"
              />
              {errors.fullName && (
                <span className="error-msg">⚠ {errors.fullName}</span>
              )}
            </div>

            <div className={`signupform ${errors.phone ? "error" : ""}`}>
              <label>Phone Number*</label>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter your phone number"
              />
              {errors.phone && (
                <span className="error-msg">⚠ {errors.phone}</span>
              )}
            </div>

            <div className={`signupform ${errors.email ? "error" : ""}`}>
              <label>Email Address*</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
              />
              {errors.email && (
                <span className="error-msg">⚠ {errors.email}</span>
              )}
            </div>

            <div className={`signupform ${errors.password ? "error" : ""}`}>
              <label>Password*</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
              />
              {errors.password && (
                <span className="error-msg">⚠ {errors.password}</span>
              )}
            </div>

            <div className="signupform">
              <label>Company Name</label>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="Enter your company name"
              />
            </div>

            <div className={`signupform-radio ${errors.agency ? "error" : ""}`}>
              <label className="radio-label">Are you an Agency?*</label>
              <div className="radio-row">
                <label className="radio-item">
                  <input
                    type="radio"
                    name="agency"
                    value="yes"
                    checked={formData.agency === "yes"}
                    onChange={handleChange}
                  />
                  <span>Yes</span>
                </label>
                <label className="radio-item">
                  <input
                    type="radio"
                    name="agency"
                    value="no"
                    checked={formData.agency === "no"}
                    onChange={handleChange}
                  />
                  <span>No</span>
                </label>
              </div>
              {errors.agency && (
                <span className="error-msg">⚠ {errors.agency}</span>
              )}
            </div>
          </div>

          <button type="submit" className="btn-primary">
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateAccount;
