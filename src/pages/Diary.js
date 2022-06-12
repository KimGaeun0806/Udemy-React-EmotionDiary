import { useParams } from 'react-router-dom';

const Diary = () => {
  const { id } = useParams(); // useParams를 이용하면, 전달받은 Path variable들을 모아서 객체로 반환받을 수 있음

  return (
    <div>
      <h1>Diary</h1>
      <p>이곳은 일기 상세 페이지입니다</p>
    </div>
  );
};

export default Diary;
