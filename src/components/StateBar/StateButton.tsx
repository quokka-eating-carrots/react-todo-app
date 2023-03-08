import React from "react";
import styled from "styled-components";

type Props = {
  title: string;
};

const StateButton = ({ title }: Props) => {
  return (
    <StateBtn>
      <StateInput type="radio" />
      <label htmlFor="">{title}</label>
    </StateBtn>
  );
};

const StateBtn = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background-color: #fff;
  width: 50px;
  height: 50px;
  border-radius: 30px;
  border: 2px solid var(--main-dark-color);
  box-sizing: border-box;
  font-size: 12px;
  font-weight: 700;
`;

const StateInput = styled.input`
  appearance: none;
  &:checked {
    background-image: url('./images/check.png')
    width: 50px;
    height: 50px;
    background-size: cover;
`;

export default StateButton;
