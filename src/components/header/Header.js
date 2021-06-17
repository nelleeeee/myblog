import React from "react";
import styled from "styled-components";

function Header() {
  return (
    <Container>
      <Left>KKH's blog</Left>
      <Right>
        <Menus>
          <Home>Home</Home>
          <About>About</About>
          <Blog>Blog</Blog>
          <Product>Product</Product>
        </Menus>
      </Right>
    </Container>
  );
}

export default Header;

const Container = styled.div`
  background-color: #212121;
  color: gainsboro;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  font-size: x-large;
  font-weight: 700;
`;

const Left = styled.div``;

const Right = styled.div``;
const Menus = styled.div`
  display: flex;
  font-size: large;
  margin-right: 5px;
`;
const Home = styled.div`
  padding-right: 10px;
`;
const About = styled.div`
  padding-right: 10px;
`;
const Blog = styled.div`
  padding-right: 10px;
`;
const Product = styled.div`
  padding-right: 10px;
`;
