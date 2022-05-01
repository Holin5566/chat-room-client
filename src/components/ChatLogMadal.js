import React, { Fragment, useContext } from "react";
import { DataContext } from "../context";

const ChatLogMadal = () => {
  const { state } = useContext(DataContext);

  return (
    <div
      className="modal fade"
      id="staticBackdrop"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabIndex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="staticBackdropLabel">
              歷史紀錄
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
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
                        <Fragment key={index}>
                          <tr>
                            <th className="text-end">{e[0]}</th>
                            <td>
                              <p className="fs-6 fw-light text-end m-0">
                                {e[2]}
                              </p>
                            </td>
                          </tr>
                          <tr>
                            <td
                              colSpan={3}
                              className="chat-content col text-start py-0 px-5"
                            >
                              {e[1]}
                            </td>
                          </tr>
                        </Fragment>
                      );
                    })}
                </tbody>
              </table>
            </div>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-primary"
              data-bs-dismiss="modal"
            >
              離開
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatLogMadal;
