import React from "react";
import styled from "./Button.module.css";

const Button = (props) => {
  return (
    <button type={props.type} className={styled.button} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
