import React from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./components/body/home/Home";
import Sidebar from "./components/body/sidebar/Sidebar";
import Header from "./components/header/Header";

function App() {
  return (
    <Container>
      <Router>
        <Header />
        <AppBody>
          <Sidebar />
          <Body>
            <Route exact path="/" component={Home} />
          </Body>
        </AppBody>
      </Router>
    </Container>
  );
}

export default App;

const Container = styled.div``;
const AppBody = styled.div`
  display: flex;
`;
const Body = styled.div``;
