import React, { useContext } from "react";
import ChatLogMadal from "../components/ChatLogMadal";
import { DataContext } from "../context";

const _Footer = () => {
  const { state, dispatch } = useContext(DataContext);

  const handleChgName = () => {
    let preName = document.getElementById("userId").innerText;
    let newName = prompt("輸入新的姓名") || state.user;
    if (preName != newName) {
      localStorage.setItem("user", newName);
      dispatch({ type: "connect", payload: { user: newName } });
      state.ws.emit("someOneSay", [
        newName,
        `-${preName}- 更名成為 -${newName}- 了`,
        new Date().toTimeString(),
      ]);
    }
  };

  return (
    <footer className="bg-light p-2">
      <div className="text-start">
        <button onClick={handleChgName} className="btn-sm mx-1">
          更名
        </button>
        <button
          className="btn-sm mx-1"
          data-bs-toggle="modal"
          data-bs-target="#staticBackdrop"
        >
          歷史紀錄
        </button>
      </div>
      <ChatLogMadal />
    </footer>
  );
};

export default _Footer;
