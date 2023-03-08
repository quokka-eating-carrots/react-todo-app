import React, { useState } from "react";
import styled from "styled-components";
import { editTodo } from "../api/request";
import { TodoType } from "../utils/Types";
import { FiEdit3, FiTrash2 } from "react-icons/fi";

type Props = {
  todo: TodoType;
};

const TodoList = ({ todo }: Props) => {
  const [editing, setEditing] = useState<boolean>(false);
  const [todoTitle, setTodoTitle] = useState<string>(todo.title);
  const [checkTodo, setCheckTodo] = useState<boolean>(todo.done);

  const randomNum = Math.floor(Math.random() * 5) + 1;
  const toggleEditing = () => {
    setEditing((prev) => !prev);
  };

  const checkingTodo = () => {
    setCheckTodo((prev) => !prev);
  };

  const editSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    await editTodo(todo.id, todoTitle, checkTodo);
    toggleEditing();
  };

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value },
    } = event;
    setTodoTitle(value);
  };

  return (
    <Todo checkTodo={checkTodo}>
      <img
        src={`./images/list-${randomNum}.png`}
        alt="버니즈"
        style={{ width: "50px", height: "50px", cursor: "pointer" }}
        onClick={async () => {
          checkingTodo();
          await editTodo(todo.id, todoTitle, !checkTodo);
        }}
      />
      {editing ? (
        <form onSubmit={editSubmit}>
          <input type="text" value={todoTitle} onChange={onChange} autoFocus />
          <div>
            <button type="submit">수정</button>
            <button onClick={toggleEditing}>취소</button>
          </div>
        </form>
      ) : (
        <>
          <span style={{ flexGrow: 3, fontSize: "14px" }}>{todoTitle}</span>
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
              <FiEdit3 onClick={toggleEditing} />
              <FiTrash2 />
            </EditBox>
            <span style={{ fontSize: "12px" }}>
              {todo.createdAt.slice(0, 10)}
            </span>
          </div>
        </>
      )}
    </Todo>
  );
};

const Todo = styled.div.attrs((props: { checkTodo: boolean }) => props)`
  box-sizing: border-box;
  width: 100%;
  height: 100px;
  background: ${(props) =>
    props.checkTodo
      ? "linear-gradient(0deg, rgba(142,194,255,1) 0%, rgba(255,255,255,1) 100%)"
      : "#fff"};
  border: 2px solid var(--main-dark-color);
  border-radius: 20px;
  display: flex;
  align-items: center;
  padding: 10px;
`;

const EditBox = styled.div`
  display: flex;
  gap: 10px;
`;

export default TodoList;
