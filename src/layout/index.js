import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Content from "./Content";
import Sider from "./Sider";

const Index = () => {
  return (
    <div className="container my-3">
      <div className="row justify-content-around">
        <Header />
        <div className="row p-0">
          {/* <div className="col-3 border">
            <Sider />
          </div> */}
          <div className="col border px-0">
            <Content />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};
export default Index;
