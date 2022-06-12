import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import MyButton from './components/MyButton';
import MyHeader from './components/MyHeader';
import Diary from './pages/Diary';
import Edit from './pages/Edit';
import Home from './pages/Home';
import New from './pages/New';

// router 설치 -> npm install react-router-dom@6 (현재 기준 가장 최신 버전인 6버전)

// Router -> 데이터의 경로를 실시간으로 지정해주는 역할을 하는 무언가
// Routing -> 경로를 정해주는 행위 자체와 그런 과정들을 다 포함하여 일컫는 말
// Page Routing -> 웹 서버가 요청에 명시되어있는 경로에 따라 알맞은 페이지를 선택하고 그 페이지를 반환해서 사용자가 페이지에 접속하는 것 (브라우저를 통해서 웹 서버에 /home과 같은 경로 요청을 보내고, Home.html과 같은 웹 문서를 받는 과정)

// MPA(Multi Page Application) -> 요청이 들어오면 경로에 따라 적절한 페이지를 보내주는 방식. 페이지를 이동하면, 새로운 페이지를 웹 서버에 요청하고 응답받아 브라우저가 새로고침되듯이 깜빡임.
// SPA(Single Page Application) -> 리액트로 개발되면 SPA 방식. 페이지 이동할 때 깜빡이지 않음. 페이지를 이동할 때 서버에게 요청하는 게 아니라, 리액트 앱이 페이지를 업데이트함. 페이지 전환이 빠름.
// CSR (Client Side Renderint) -> 클라이언트 측에서 직접 페이지를 렌더링하는 방식

// 리액트는 SPA와 CSR 방식

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <MyHeader
          headText={'App'}
          leftChild={
            <MyButton text={'왼쪽 버튼'} onClick={() => alert('왼쪽 클릭')} />
          }
          rightChild={
            <MyButton
              text={'오른쪽 버튼'}
              onClick={() => alert('오른쪽 클릭')}
            />
          }
          // 컴포넌트 자체를 props로 전달 -> 전달되는 props의 개수를 줄일 수 있음
        />
        <h2>App.js</h2>
        {/* 모든 페이지에서 보여야 하는 요소는 <Routes> 바깥에 배치 */}

        {/* <img src={process.env.PUBLIC_URL + `/assets/emotion1.png`} />
        <img src={process.env.PUBLIC_URL + `/assets/emotion2.png`} />
        <img src={process.env.PUBLIC_URL + `/assets/emotion3.png`} />
        <img src={process.env.PUBLIC_URL + `/assets/emotion4.png`} />
        <img src={process.env.PUBLIC_URL + `/assets/emotion5.png`} /> */}
        {/* process.env.PUBLIC_URL은 지금 어느 폴더에 있든 public에 있는 것처럼 경로를 설정할 수 있게 해줌 */}

        <MyButton
          text={'버튼'}
          onClick={() => alert('버튼 클릭')}
          type={'positive'}
        />
        <MyButton
          text={'버튼'}
          onClick={() => alert('버튼 클릭')}
          type={'negative'}
        />
        <MyButton text={'버튼'} onClick={() => alert('버튼 클릭')} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/new" element={<New />} />
          <Route path="/edit" element={<Edit />} />
          <Route path="/diary/:id" element={<Diary />} />
          {/* Path Variable 사용 (useParams). 여기서 path variable을 id라고 부르기로 한 것 */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
