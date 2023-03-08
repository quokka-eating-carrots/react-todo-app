import React from "react";
import styled from "styled-components";

type Props = {};

const Footer = (props: Props) => {
  return (
    <FooterWrapper>
      <a
        href="https://github.com/quokka-eating-carrots/react-todo-app"
        style={{ textDecoration: "none" }}
      >
        안녕하세요! 저의 GitHub로 놀러 오세요!
      </a>
    </FooterWrapper>
  );
};

const FooterWrapper = styled.div`
  bottom: 20px;
`;

export default Footer;
