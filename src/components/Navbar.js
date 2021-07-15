import React from 'react';
import { Route, Link } from "react-router-dom";
import styled from "styled-components";

function Navbar() {

  return(
    <Container>
      <Link to="/post"><Button>글쓰기</Button></Link>
    </Container>

    
  )
}

const Container = styled.div`
width: 100vw;
height: 10vh;
`;

const Button = styled.div`
width: 100px;
  height: 30px;
  border-radius: 3px;
  background-color: #999;
  color: #ffffff;
  font-size: 15px;
  padding: 10px 0 0 0;
  align-items: center;
  text-align: center;
  justify-content: center;
`;



export default Navbar;

