import React from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import SearchArea from "../components/SearchArea";
import StudentList from "../components/StudentList";

const Container = styled.div``;

const Home = () => {
  return (
    <Container>
      <Navbar />
      <SearchArea />
      <StudentList />
    </Container>
  );
};

export default Home;
