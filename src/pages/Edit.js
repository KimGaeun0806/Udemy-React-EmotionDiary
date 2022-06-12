import { useNavigate, useSearchParams } from 'react-router-dom';

const Edit = () => {
  const navigate = useNavigate(); // useNavigate는 페이지를 이동시킬 수 있는 함수를 반환함. 그 함수를 navigate라는 이름으로 받는 것.

  const [searchParams, setSearchParams] = useSearchParams();
  // Query String 사용. 웹 페이지에 데이터를 전달하는 방법.
  // setSearchParams로 query string을 변경할 수 있음

  const id = searchParams.get('id');
  const mode = searchParams.get('mode');

  return (
    <div>
      <h1>Edit</h1>
      <p>이곳은 일기 수정 페이지입니다</p>
      <button onClick={() => setSearchParams({ who: 'zico' })}>
        qs 바꾸기
      </button>
      <button
        onClick={() => {
          navigate('/home'); // navigate의 인자로 경로를 작성
        }}
      >
        홈으로 가기
      </button>
    </div>
  );
};

export default Edit;
