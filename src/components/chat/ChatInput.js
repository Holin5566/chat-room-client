import React, { useContext } from "react";
import { DataContext } from "../../context";

const ChatInput = () => {
  const { state } = useContext(DataContext);

  const handleSend = (e) => {
    const textArea = document.getElementById("msg");

    if (!e.keyCode || e.keyCode === 13) {
      if (textArea.value == `\n` || !textArea.value) {
        let err = "文字方塊為空";
        alert(err);
        textArea.value = "";
        return;
      }

      const user = document.getElementById("userId").innerText;
      state.ws.emit("someOneSay", [
        user,
        textArea.value,
        new Date().toTimeString(),
      ]);

      textArea.value = "";
    }
  };

  return (
    <div className="row p-3">
      <div id="userId" className="col text-end ">
        <h5 className="border-end border-3 px-3">{state.user}</h5>
      </div>
      <div className=" col-8 text-start">
        <textarea
          className="w-100"
          name="msg"
          id="msg"
          onKeyUp={handleSend}
          required
        ></textarea>
      </div>
      <div className="d-flex col text-start">
        <div>
          <button onClick={handleSend} className="btn-sm">
            送出
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatInput;
