import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Footer from "./components/Footer";
import Header from "./components/Header";
import StateBar from "./components/StateBar/StateBar";
import TodoList from "./components/TodoList";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "./redux/store";
import { getTodoItems } from "./redux/todoSlice";
import AllDeleteButton from "./components/AllDeleteButton";

const App = () => {
  const [filterState, setFilterState] = useState("");
  const dispatch = useDispatch();
  const todoList = useSelector((state: RootState) => state.todo);
  useEffect(() => {
    const fetchData = () => {
      dispatch(getTodoItems() as any);
    };
    fetchData();
  }, []);

  const filterTodo = () => {
    if (filterState === "To Do") {
      return todoList.filter((todo) => !todo.done);
    } else if (filterState === "DONE") {
      return todoList.filter((todo) => todo.done);
    } else return todoList;
  };

  return (
    <Wrapper>
      <Header />
      <StateBar setFilterState={setFilterState} />
      <TodoDiv>
        {todoList
          ? filterTodo().map((item) => <TodoList todo={item} key={item.id} />)
          : null}
      </TodoDiv>
      {filterState === "DONE" ? (
        <AllDeleteButton todoList={filterTodo()} />
      ) : null}
      <Footer />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 345px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TodoDiv = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin: 0 auto;
  padding: 10px 0;
`;

export default App;
