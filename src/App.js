import React from "react";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import PostList from "./components/PostList";
import { Route, Link, Switch } from "react-router-dom";
import { withRouter } from "react-router";
import {BrowserRouter} from "react-router-dom";
import Post from "./pages/Post"; 
import View from "./pages/View";
import Main from "./pages/Main"; 
import NotFound from "./components/NotFound";
import { connect } from "react-redux";
import { firestore } from "./firebase";


class App extends React.Component {

  constructor(props){
    super(props);

    this.state={
      list : [
      {id: 1, author: 'Frozen yoghurt', comment: 159, no: 1, title: '타이틀이다1'},
      {id: 2, author: 'Ice cream sandwich', comment: 237, no: 2, title: '타이틀이다2'},
      {id: 3, author: 'Eclair', comment: 262, no: 3, title: '타이틀이다3'},
      {id: 4, author: 'Cupcake', comment: 305, no: 4, title: '타이틀이다4'},
      {id: 5, author: 'Gingerbread', comment: 356, no: 5, title: '타이틀이다5'}
    ]};

    this.text = React.createRef();
  }

  addPostList = () => {
    let list = this.state.list;
    const new_item = this.text.current.value;

    // 리액트에서는 concat으로 배열항목을 합쳐주는 게 좋아요. 아래처럼요!
    // list = list.concat(new_item);
    // this.setState({list: list});

    //  이건 가장 편한 배열 합치기 방법입니다. 
    //  ...은 배열 안에 있는 항목을 전부 꺼내서 늘어놓는다는 뜻입니다. (스프레드 문법이라고 불러요.)
    this.setState({list: [...list, new_item]});
  }


render(){
    return (
    <div className="App">
      <React.Fragment>
       <BrowserRouter>
          <Route path="/" exact component={Main} />
          <Route path="/post" exact component={Post} />
          <Route path="/view" exact component={View} />
        </BrowserRouter>
        </React.Fragment>
    </div>
  );
  }
}

export default App;