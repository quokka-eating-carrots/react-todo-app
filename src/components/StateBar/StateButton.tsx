import React from "react";
import styled from "styled-components";

type Props = {
  title: string;
  setFilterState: React.Dispatch<React.SetStateAction<string>>;
};

const StateButton = ({ title, setFilterState }: Props) => {
  const clickHandler = (title: string) => {
    setFilterState(title);
  };
  return (
    <StateBtn>
      <input type="radio" id={title} name="filter" />
      <label htmlFor={title} onClick={() => clickHandler(title)}>
        {title}
      </label>
    </StateBtn>
  );
};

const StateBtn = styled.div`
  input[type="radio"] {
    display: none;
  }
  input[type="radio"] + label {
    display: flex;
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
  }
  input[type="radio"]:checked + label {
    background-image: url("./images/check.png");
    width: 50px;
    height: 50px;
    background-size: cover;
  }
`;

export default StateButton;
