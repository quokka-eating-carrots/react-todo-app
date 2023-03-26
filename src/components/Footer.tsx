import React from "react";
import styled from "styled-components";

type Props = {};

const Footer = (props: Props) => {
  return (
    <a
      href="https://github.com/quokka-eating-carrots/react-todo-app"
      style={{ textDecoration: "none" }}
    >
      안녕하세요! 저의 GitHub로 놀러 오세요!
    </a>
  );
};

export default Footer;
