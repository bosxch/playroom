import React from "react";
import "../../app/globals.scss";
import {
  FaJs,
  FaLinkedinIn,
  FaDribbble,
  FaMediumM,
  FaGithub,
} from "react-icons/fa";

const ClientsComponent = () => {
  return (
    <div className="container h-100">
      <div className="row align-items-center h-100">
        <div className="container rounded">
          <h1 className="text-center">Featured in:</h1>
          <div className="slider">
            <div className="logos">
              <i className="icon">
                {" "}
                <FaJs size="4em" />
              </i>
              <i className="icon">
                {" "}
                <FaLinkedinIn size="4em" />
              </i>
              <i className="icon">
                {" "}
                <FaDribbble size="4em" />
              </i>
              <i className="icon">
                {" "}
                <FaMediumM size="4em" />
              </i>
              <i className="icon">
                {" "}
                <FaGithub size="4em" />
              </i>
            </div>
            <i className="icon">
              {" "}
              <FaJs size="4em" />
            </i>
            <i className="icon">
              {" "}
              <FaLinkedinIn size="4em" />
            </i>
            <i className="icon">
              {" "}
              <FaDribbble size="4em" />
            </i>
            <i className="icon">
              {" "}
              <FaMediumM size="4em" />
            </i>
            <i className="icon">
              {" "}
              <FaGithub size="4em" />
            </i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientsComponent;
