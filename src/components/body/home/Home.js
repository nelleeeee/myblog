import React from "react";
import styled from "styled-components";

function Home() {
  return (
    <Container>
      <Left>hi</Left>
      <Right>hi</Right>
    </Container>
  );
}

export default Home;

const Container = styled.div`
  display: flex;
  width: 1000px;
`;

const Left = styled.div`
  flex: 0.6;
  background-color: red;
`;
const Right = styled.div`
  flex: 0.4;
  background-color: green;
`;
