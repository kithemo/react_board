import { firestore } from "../../firebase";

const post_db = firestore.collection("post");

// Actions
const LOAD = "post/LOAD";
const CREATE = "post/CREATE";

// wordList에 있던 가짜 데이터를 initialState로 옮겨옵니다.
const initialState = {
    post_list: [
        {id: 1, author: 'Frozen yoghurt', comment: 159, no: 1, title: '타이틀이다1'},
        {id: 2, author: 'Ice cream sandwich', comment: 237, no: 2, title: '타이틀이다2'},
        {id: 3, author: 'Eclair', comment: 262, no: 3, title: '타이틀이다3'},
        {id: 4, author: 'Cupcake', comment: 305, no: 4, title: '타이틀이다4'},
        {id: 5, author: 'Gingerbread', comment: 356, no: 5, title: '타이틀이다5'}
   ],
 };
// Action Creators
export const loadPost = (post_list) => {
  return { type: LOAD, post_list };
};

export const createPost = (post) => {
  return { type: CREATE, post };
};

export const loadPostFB = () => {
  return function (dispatch){

    post_db.get().then((docs) => {
      let post_data = [];

      docs.forEach((doc) => {
        if(doc.exists){
          post_data = [...post_data, doc.data()];
        }
      });
      console.log(post_data);
      dispatch(loadPost(post_data));
    });
  }
}

export const createPostFB = (post) => {
  return function (dispatch) {
    console.log(post);
    // 생성할 데이터를 미리 만들게요!
    let post_data = { text: post, completed: false };

    // add()에 데이터를 넘겨줍시다!
    post_db
      .add(post_data)
      .then((docRef) => {
        // id를 추가한다!
        post_data = { ...post_data, id: docRef.id };

        console.log(post_data);

        // 성공했을 때는? 액션 디스패치!
        dispatch(createPost(post_data));
      })
      .catch((err) => {
        // 여긴 에러가 났을 때 들어오는 구간입니다!
        console.log(err);
        window.alert('오류가 났네요! 나중에 다시 시도해주세요!');
      });
  };
};

// Reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    // do reducer stuff
    case "post/LOAD": {
      if(action.post.length > 0) {
        return {list: action.post};
      }

      return state;
    }
      

    case "post/CREATE":
        // 받아온 데이터를 추가한 새 리스트 만들기
      const new_post_list = [...state.post_list, action.post];

    //   state를 갈아끼워요
      return {...state, post_list: new_post_list };

    default:
      return state;
  }
}