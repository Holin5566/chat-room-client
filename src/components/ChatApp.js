import React, { Fragment } from "react";
import ChatList from "./chat/ChatList";
import ChatInput from "./chat/ChatInput";

const chatApp = () => {
  return (
    <Fragment>
      <ChatList />
      <ChatInput />
    </Fragment>
  );
};

export default chatApp;
