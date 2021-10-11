import React from "react";
import "./SidebarOption.css";
import { Add } from "@material-ui/icons";
export default function SidebarOption() {
  return (
    <div className="sidebarOptions">
      <div className="sidebarOption">
        <p> 해외 축구 </p>
      </div>

      <div className="sidebarOption">
        <p> 낚시 </p>
      </div>

      <div className="sidebarOption">
        <p> 코딩 </p>
      </div>

      <div className="sidebarOption">
        <p> 컴퓨터 </p>
      </div>

      <div className="sidebarOption">
        <p> e-sports </p>
      </div>

      <div className="sidebarOption">
        <p> 농구 </p>
      </div>

      <div className="sidebarOption">
        <Add />
        <p className="text">더보기</p>
      </div>
    </div>
  );
}
