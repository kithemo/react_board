import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

const PostList = (props) => {
  //   리덕스에 있는 데이터를 가져와요!
  const post_list = useSelector((state) => state.post.post_list);

  return (
    <React.Fragment>
      {post_list.map((p, index) => {
        return (
          <Card key={p.id}>
            <Card>
              {post_list.length - index}
            </Card>
            <Card>{p.author}
            </Card>
            <Card>{p.title}
            </Card>
          </Card>
        );
      })}
    </React.Fragment>
  );
};

// 제목 스타일을 잡아줄 거예요.
// const Title = styled.h1`
//   width: 90vw;
//   margin: 8px auto;
// `;

// 목록에 나올 단어들을 각각 카드 뷰로 만들거예요.
// Card는 카드 하나(와이어프레임의 단어, 설명, 예시를 담고 있는 흰색 네모칸 하나! 그게 카드입니다.)의 스타일을 담당해요!
const Card = styled.div`
  width: 100vw;
  height: 30px;
  display: flex;
  flex-direction: row;
  padding: 4px 16px;
  margin: 8px auto;
  box-sizing: border-box;
  background-color: #ffffff;
  border: 1px;
`;

// 텍스트 스타일을 잡아줄거예요.
// size라는 props가 있으면 size대로 폰트 크기를 넣어주고,
// underline이라는 props가 있으면 밑줄을 줄거예요.(text-decoration 속성을 사용합니다.)
// color라는 props가 있으면 color대로 텍스트 컬러를 바꿔줄거예요.
// const Text = styled.p`
//   font-size: ${(props) => (props.size ? `${props.size}` : "16px")};
//   ${(props) => (props.underline ? "text-decoration: underline;" : "")}
//   ${(props) => (props.color ? `color: ${props.color};` : "")}
//   margin: 4px 0px;
// `;

// 추가하기 버튼 스타일을 잡아줄거예요.
const AddButton = styled.button`
  width: 100px;
  height: 30px;
  border-radius: 3px;
  background-color: #999;
  color: #ffffff;
  font-size: 15px;
  align-items: center;
  justify-content: center;
`;

export default PostList;