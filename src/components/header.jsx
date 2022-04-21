import React, { Component } from "react";
// import Typed from "";
export default class Header extends Component {
  render() {
    return (
      <div className="header-wraper">
        <div className="col-12 main-info flex-nowrap position-absolute top-50 start-50 translate-middle d-flex flex-column justify-content-center align-items-center">
          <h1 className="text-info fs-2">
            web development and websites promotions
          </h1>
          {/* <Typed
            className="typed-text"
            strings={[
              "web Design",
              "web Development",
              "Facebook Ads SMM",
              "Google Ads",
            ]}
            typeSpeed={40}
            backSpeed={60}
          /> */}
          <a className="btn btn-outline-danger" href="/">
            contact me
          </a>
        </div>
      </div>
    );
  }
}
