import React, { useContext, useEffect } from "react";
import { DataContext } from "../../context";

const ChatList = () => {
  const { state } = useContext(DataContext);
  const chatTable = document.getElementById("chatTable");

  // let { msgList } = state;
  // useEffect(() => {
  //   msgList = state.msgList;
  // }, [state.msgList]);

  useEffect(() => {
    chatTable && (chatTable.scrollTop = chatTable.scrollHeight);
  }, [state.msgList]);
  return (
    <div id="chatTable" className="overflow-auto">
      <table className="table table-striped ">
        <tbody>
          {state.msgList ? (
            <tr>
              <td colSpan={3}>成功加入聊天室</td>
            </tr>
          ) : (
            <tr>
              <td colSpan={3}>連結發生錯誤</td>
            </tr>
          )}
          {state.msgList &&
            state.msgList.map((e, index) => {
              return (
                <tr key={index}>
                  <th className="col-2 text-end py-0 ">{e[0]}</th>
                  <td className="chat-content col text-start py-0 ps-0">
                    {e[1]}
                    <p className="fs-6 fw-light text-end m-0">{e[2]}</p>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default ChatList;
