import { Avatar } from "@material-ui/core";
import React from "react";
import styled from "styled-components";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import GitHubIcon from "@material-ui/icons/GitHub";
import HomeIcon from "@material-ui/icons/Home";
import InfoIcon from "@material-ui/icons/Info";
import AssignmentIcon from "@material-ui/icons/Assignment";
import CardTravelIcon from "@material-ui/icons/CardTravel";
function Sidebar() {
  return (
    <Container>
      <Pics style={{ width: "150px", height: "150px" }} />
      <Names>KKH</Names>
      <Infos>Aspiring developer's blog</Infos>
      <Links>
        <FacebookIcon fontSize={"large"} />
        <InstagramIcon fontSize={"large"} />
        <GitHubIcon style={{ fontSize: "28" }} />
      </Links>
      <hr />
      <Menus>
        <Home>
          <HomeIcon style={{ fontSize: "20" }} />
          &nbsp;Home
        </Home>
        <About>
          <InfoIcon style={{ fontSize: "20" }} />
          &nbsp;About
        </About>
        <Blog>
          <AssignmentIcon style={{ fontSize: "20" }} />
          &nbsp;Blog
        </Blog>
        <Product>
          <CardTravelIcon style={{ fontSize: "20" }} />
          &nbsp;Product
        </Product>
      </Menus>
      <Hashes>
        <Hash>{"#react"}</Hash>
        <Hash>{"#re"}</Hash>
        <Hash>{"#reasdat"}</Hash>
        <Hash>{"#reat"}</Hash>
        <Hash>{"#reasdat"}</Hash>
        <Hash>{"#re"}</Hash>
        <Hash>{"#reat"}</Hash>
        <Hash>{"#re"}</Hash>
        <Hash>{"#reasdat"}</Hash>
        <Hash>{"#reat"}</Hash>
        <Hash>{"#react"}</Hash>
        <Hash>{"#ct"}</Hash>
      </Hashes>
    </Container>
  );
}

export default Sidebar;

const Container = styled.div`
  width: 250px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 40px;
  background-color: #212121;
  hr {
    color: black;
    width: 50%;
    margin: auto;
    border: none;
    border-top: 1px solid grey;
  }
`;

const Pics = styled(Avatar)`
  margin-bottom: 20px;
`;
const Names = styled.div`
  font-size: x-large;
  font-weight: 600;
  margin-bottom: 20px;
  color: gainsboro;
`;
const Infos = styled.div`
  margin-bottom: 50px;
  color: #aaaaaa;
`;
const Links = styled.div`
  width: 50%;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  color: white;
`;

const Menus = styled.div`
  margin-top: 30px;
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
  font-size: large;
  font-weight: 600;
`;
const Home = styled.div`
  display: flex;
  align-items: center;
  margin: 5px;
  padding: 5px 30px 5px 30px;
  color: #a3a3a3;
  border-radius: 5px;
  :hover {
    color: #bebebe;
    cursor: pointer;
  }
`;
const About = styled.div`
  display: flex;
  align-items: center;
  margin: 5px;
  padding: 5px 30px 5px 30px;
  color: #a3a3a3;
  border-radius: 5px;
  :hover {
    color: #bebebe;
    cursor: pointer;
  }
`;
const Blog = styled.div`
  display: flex;
  align-items: center;
  margin: 5px;
  padding: 5px 30px 5px 30px;
  color: #a3a3a3;
  border-radius: 5px;
  :hover {
    color: #bebebe;
    cursor: pointer;
  }
`;
const Product = styled.div`
  display: flex;
  align-items: center;
  margin: 5px;
  padding: 5px 30px 5px 30px;
  color: #a3a3a3;
  border-radius: 5px;
  :hover {
    color: #bebebe;
    cursor: pointer;
  }
`;

const Hashes = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 20px;
`;

const Hash = styled.div`
  font-size: smaller;
  font-weight: 600;
  background-color: #c4c4c4;
  color: #212121;
  border-radius: 10px;
  padding: 3px 5px 3px 5px;
  margin: 3px;
  transition: all 0.3s ease;
  :hover {
    transform: scale(1.03);
    background-color: #585858;
    color: gainsboro;
    border-radius: 10px;
    padding: 3px 5px 3px 5px;
  }
`;
