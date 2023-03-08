import React from "react";
import { title, songLength } from "../utils/songs";
import styled from "styled-components";

type Props = {};

const Header = (props: Props) => {
  const randomNum = Math.floor(Math.random() * title.length);
  return (
    <HeaderSection>
      <img
        src="./images/bunny-todo.png"
        alt="로고"
        style={{ width: "50px", marginRight: "10px" }}
      />
      <div>
        <h1 style={{ fontWeight: 700, fontSize: "20px" }}>TO DO APP</h1>
        <MusicBox>
          <span>NewJeans - {title[randomNum]}</span>
          <span>1:15 ━━●─── {songLength[randomNum]}</span>
          <span>⇆ ◁ ❚❚ ▷ ↻</span>
        </MusicBox>
      </div>
      <AddButton>+</AddButton>
    </HeaderSection>
  );
};

const HeaderSection = styled.header`
  box-sizing: border-box;
  padding: 10px;
  display: flex;
  align-items: center;
  width: 100%;
  position: relative;
`;

const MusicBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const AddButton = styled.button`
  position: absolute;
  border: 2px solid var(--main-dark-color);
  font-size: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  right: 10px;
  width: 70px;
  height: 30px;
  border-radius: 35px;
  cursor: pointer;
  background: rgb(142, 194, 255);
  background: linear-gradient(
    0deg,
    rgba(142, 194, 255, 1) 0%,
    rgba(255, 255, 255, 1) 100%
  );
`;

export default Header;
