import React from "react";
import styled from "styled-components";
import StateButton from "./StateButton";

type Props = {};

const StateBar = (props: Props) => {
  return (
    <StateBarDiv>
      <StateButton title={"ALL"} />
      <StateButton title={"To Do"} />
      <StateButton title={"DONE"} />
    </StateBarDiv>
  );
};

const StateBarDiv = styled.div`
  display: flex;
  justify-content: space-aroud;
  width: 100%;
  height: 70px;
  padding: 10px;
  box-sizing: border-box;
`;
export default StateBar;
