import React from "react";
import styled from "styled-components";
import { Route, Link } from "react-router-dom";
import Post from "../pages/Post"; 

function Header() {
    return (
      <Container>
          <h1>게시판</h1>
          <p>아무거나 글을 써봅시다</p>
      </Container>
        
    );
  }
  

const Container = styled.div`
 max-width: 100vw;
 max-height: 30vh;
 border-box: box;
 background-color: #eee6;
 content-align: center;

`;



export default Header;


 