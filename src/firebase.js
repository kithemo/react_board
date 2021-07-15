//firebase.js
import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
        apiKey: "AIzaSyCGf9DutaBwsIg3cNI3V0RFf9JvVeP8IVQ",
    authDomain: "board-27c01.firebaseapp.com",
    projectId: "board-27c01",
    storageBucket: "board-27c01.appspot.com",
    messagingSenderId: "837036197623",
    appId: "1:837036197623:web:9cc246338a2f9010d175f2",
    measurementId: "G-GJTBRDC1TP"
     
};

// firebaseConfig 정보로 firebase 시작
firebase.initializeApp(firebaseConfig);

// firebase의 firestore 인스턴스를 변수에 저장
const firestore = firebase.firestore();

// 필요한 곳에서 사용할 수 있도록 내보내기
export { firestore };