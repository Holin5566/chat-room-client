import "./App.css";
import "./styles/index.css";
import React, { useEffect, useReducer } from "react";
import webSocket from "socket.io-client";
import Index from "./layout/index";
import { DataContext } from "./context";

// const serverUrl = "https://mychatroom5566.herokuapp.com/";
const serverUrl = "http://localhost:3300";

const bcrypt = require("bcryptjs");
const initName = `我愛資策會#${bcrypt.genSaltSync(10).slice(-5)}`;

const initialState = {
  ws: null,
  msgList: [],
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  //連結伺服器
  if (!state.ws) {
    dispatch({ type: "connect", payload: { user: initName } });
  }

  useEffect(() => {
    //*******************************問題*******************************
    const timeout = setTimeout(() => setListener(), 300);
    return () => clearTimeout(timeout);

    async function setListener() {
      state.ws.emit("someOneCome", [
        state.user,
        "進入聊天室",
        new Date().toTimeString(),
      ]);
      state.ws.on("someOneSay", (message) => {
        dispatch({ type: "newMsg", payload: message });
        console.log(message);
      });
    }
    //*******************************問題*******************************
  }, []);

  //儲存資訊至本地
  useEffect(() => {
    localStorage.setItem("user", state.user);
  }, [state]);

  return (
    <div className="App">
      <DataContext.Provider value={{ state, dispatch }}>
        <Index />
      </DataContext.Provider>
    </div>
  );
}

export default App;

//reducer
function reducer(state, action) {
  let newState;
  switch (action.type) {
    case "connect":
      console.log("success connect!");
      newState = { ...state };
      newState.ws = webSocket(serverUrl);
      newState.user = localStorage.getItem("user") || action.payload.user;
      return newState;
    case "newMsg":
      console.log(`newMsg : ${action.payload}`);
      newState = { ...state };
      newState.msgList = [...state.msgList, action.payload];
      return newState;
    default:
      return state;
  }
}
