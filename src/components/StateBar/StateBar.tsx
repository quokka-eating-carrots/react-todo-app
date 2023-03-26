import React from "react";
import styled from "styled-components";
import StateButton from "./StateButton";

type Props = {
  setFilterState: React.Dispatch<React.SetStateAction<string>>;
};

const StateBar = ({ setFilterState }: Props) => {
  return (
    <StateBarDiv>
      <StateButton title="ALL" setFilterState={setFilterState} />
      <StateButton title="To Do" setFilterState={setFilterState} />
      <StateButton title="DONE" setFilterState={setFilterState} />
    </StateBarDiv>
  );
};

const StateBarDiv = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 70px;
  padding: 10px 20px;
  box-sizing: border-box;
`;
export default StateBar;
