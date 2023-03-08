import React from "react";
import styled from "styled-components";
import { TodoType } from "../utils/Types";
import { FiEdit3, FiCheckSquare, FiTrash2 } from "react-icons/fi";

type Props = {
  todo: TodoType;
};

const TodoList = ({ todo }: Props) => {
  const randomNum = Math.floor(Math.random() * 5) + 1;
  return (
    <Todo>
      <img
        src={`./images/list-${randomNum}.png`}
        alt="버니즈"
        style={{ width: "50px", height: "50px" }}
      />
      <span style={{ flexGrow: 3, fontSize: "14px" }}>{todo.title}</span>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "3px",
          alignItems: "center",
          flexGrow: 1,
        }}
      >
        <EditBox>
          <FiEdit3 />
          <FiCheckSquare />
          <FiTrash2 />
        </EditBox>
        <span style={{ fontSize: "12px" }}>{todo.createdAt.slice(0, 10)}</span>
      </div>
    </Todo>
  );
};

const Todo = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 100px;
  background-color: #fff;
  border: 2px solid var(--main-dark-color);
  border-radius: 20px;
  display: flex;
  align-items: center;
  padding: 10px;
`;

const EditBox = styled.div`
  display: flex;
  gap: 3px;
`;
export default TodoList;
