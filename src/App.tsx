import React, { useState } from "react";
import styled from "styled-components";
import Footer from "./components/Footer";
import Header from "./components/Header";
import StateButton from "./components/StateButton";

type Props = {};

const App = (props: Props) => {
  return (
    <Wrapper>
      <Header />
      <StateButton />
      <Footer />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 345px;
  margin: 0 auto;
`;

export default App;
