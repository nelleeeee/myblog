import React from "react";
import styled from "styled-components";
import EditorComponent from "../hooks/EditorComponent";

function Writer() {
  return (
    <Container>
      <EditorComponent />
    </Container>
  );
}

export default Writer;

const Container = styled.div``;
