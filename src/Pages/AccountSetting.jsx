import React from "react";
import "../Styles/AccountSetting.css";
import profileImg from "../assets/image.png";
import { useLocation } from "react-router-dom";

const AccountSetting = () => {
  const location = useLocation();
  const { name, email } = location.state || {}; // safely read passed data

  return (
    <div className="app-frame">
      <div className="app-container">
        <h3 className="account-title">Account Settings</h3>

        <div className="profile-section">
          <div className="profile-pic-container">
            <img src={profileImg} alt="Profile" className="profile-pic" />
            <div className="camera-icon">📷</div>
          </div>
          <div className="profile-info">
            <h4 className="profile-name">{name || "Guest User"}</h4>
            <p className="profile-email">{email || "No Email Provided"}</p>
          </div>
        </div>

        <p className="profile-description">
          Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
          Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat,
          Sed Diam
        </p>
      </div>
    </div>
  );
};

export default AccountSetting;
