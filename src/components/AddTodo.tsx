import React, { useState } from "react";
import styled from "styled-components";
import { createTodo } from "../api/request";

type Props = {
  setAddToggle: React.Dispatch<React.SetStateAction<boolean>>;
};

const AddTodo = ({ setAddToggle }: Props) => {
  const [newTodo, setNewTodo] = useState<string>("");
  const onSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (newTodo) {
      await createTodo(newTodo);
    }
    setAddToggle((prev) => !prev);
  };

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value },
    } = event;
    setNewTodo(value);
  };
  return (
    <TodoToggle>
      <ToggleBox>
        <span style={{ fontSize: "18px", margin: "10px" }}>
          What do you have to do today?
        </span>
        <form onSubmit={onSubmit}>
          <input
            type="text"
            value={newTodo}
            onChange={onChange}
            style={{
              backgroundColor: "transparent",
              border: "none",
              borderBottom: "2px solid #e2e2e2",
              outline: "none",
            }}
          />
          <button
            type="submit"
            style={{
              backgroundColor: "transparent",
              border: "none",
              marginLeft: "20px",
              cursor: "pointer",
              fontSize: "16px",
            }}
          >
            Add
          </button>
        </form>
        <button
          style={{
            position: "absolute",
            top: "10px",
            right: "10px",
            cursor: "pointer",
            backgroundColor: "transparent",
            border: "none",
          }}
          onClick={() => setAddToggle((prev) => !prev)}
        >
          X
        </button>
      </ToggleBox>
    </TodoToggle>
  );
};

const TodoToggle = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.5);
  z-index: 9999;
`;

const ToggleBox = styled.div`
  background-color: #fff;
  border-radius: 20px;
  border: 2px solid var(--main-dark-color);
  display: flex;
  flex-direction: column;
  width: 350px;
  height: 150px;
  justify-content: center;
  align-items: center;
  padding: 20px;
  box-sizing: border-box;
  gap: 10px;
  position: fixed;
  margin: auto;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
`;
export default AddTodo;
