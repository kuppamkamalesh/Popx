import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../src/Pages/Home";
import Login from "../src/Pages/Login";
import CreateAccount from "../src/Pages/CreateAccount";
import AccountSetting from "../src/Pages/AccountSetting";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/createAccount" element={<CreateAccount />} />
        <Route path="/account-settings" element={<AccountSetting />} />
      </Routes>
    </Router>
  );
}

export default App;
