import React from "react";
import "./Thinge.css";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import Widget from "./Widget";

export default function Thinge() {
  return (
    <div className="thinge">
      <Navbar />
      <div className="thinge_content">
        <Sidebar />
        <Feed />
        <Widget />
      </div>
    </div>
  );
}
