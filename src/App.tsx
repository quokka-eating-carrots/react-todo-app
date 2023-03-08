import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { getTodo } from "./api/request";
import Footer from "./components/Footer";
import Header from "./components/Header";
import StateBar from "./components/StateBar/StateBar";
import TodoList from "./components/TodoList";
import { TodoType } from "./utils/Types";

type Props = {};

const App = (props: Props) => {
  const [todo, setTodo] = useState<TodoType[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      const { ok, data } = await getTodo();
      if (ok) {
        setTodo(data);
      }
    };
    fetchData();
  }, []);

  console.log(todo);
  return (
    <Wrapper>
      <Header />
      <StateBar />
      <TodoDiv>
        {todo
          ? todo.map((item) => <TodoList todo={item} key={item.id} />)
          : null}
      </TodoDiv>
      <Footer />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 345px;
  margin: 0 auto;
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
