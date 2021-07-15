import React from "react";
import styled from "styled-components";
import { Route, Link } from "react-router-dom";

const View = (props) => {

    console.log(props.match);

    return (
        <React.Fragment>
          <Container>
            <h2>여러번</h2>
            <p>뒤집어</p>
            <Box>
                엎어따
            </Box>
            <Link to="/"><Button>돌아가기</Button></Link>
          </Container>
        </React.Fragment>
    )
}

export default View;

// const H2 = styled.h2`
// `;

const Box = styled.div`
 width: 450px;
 height: 200px;
 border-box: box;
 background-color: #eee6;
 padding: 20px 5px 10px 5px;
 content-align: center;
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

const Container = styled.div`
width: 50vw;
height: 80vh;
display: flex;
flex-direction: column;
padding: 40px 4px 4px 14px;
margin: 8px auto;
box-sizing: border-box;
background-color: #ffffff;
border: 1px;
`;