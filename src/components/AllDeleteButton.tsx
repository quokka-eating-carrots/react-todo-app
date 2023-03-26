import React from "react";
import styled from "styled-components";
import { deleteTodoItems } from "../redux/todoSlice";
import { useDispatch } from "react-redux";
import { TodoType } from "../utils/Types";

type Props = {
  todoList: TodoType[];
};

const AllDeleteButton = ({ todoList }: Props) => {
  const dispatch = useDispatch();
  const deleteHandler = () => {
    todoList.forEach((todo) => dispatch(deleteTodoItems(todo.id) as any));
  };
  return <ButtonStyle onClick={deleteHandler}>AllDeleteButton</ButtonStyle>;
};

const ButtonStyle = styled.button`
  width: 150px;
  height: 45px;
  border-radius: 100px;
  border: 1px solid #000;
  background: linear-gradient(
    0deg,
    rgba(255, 0, 48, 0.957),
    rgb(255, 255, 255)
  );
`;

export default AllDeleteButton;
