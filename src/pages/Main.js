import React from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import PostList from "../components/PostList";


function Main() {
    return (
      <div className="App">
        <Header />
        <Navbar />
        <PostList />
      </div>
    );
  }
  
  export default Main;