import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/nav-bar/navbar";
import Sidebar from "./components/sidebar/sidebar";
import HomePage from "./pages/home-page/home-page";

import { ReactComponent as ChatIcon } from "./assets/icons/chat-icon.svg";

function App() {
  return (
    <div className="main_wrapper">
      <Navbar />
      <div className="main_content">
        <Sidebar />
        <div className="main_content_wrapper">
          <div className="main_content_block">
            <Routes>
              <Route path="/" element={<Navigate to={"/home"} />} />
              <Route path="/home" element={<HomePage />} />
            </Routes>
          </div>
          <div className="chat_content">
            <div className="chat_button">
              <ChatIcon />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
