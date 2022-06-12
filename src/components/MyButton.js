const MyButton = ({ text, type, onClick }) => {
  const btnType = ['positive', 'negative'].includes(type) ? type : 'default'; // positive도 negative도 아닌 type이 전달됐을 때 default로 취급하기 위해서

  return (
    <button
      onClick={onClick}
      className={['MyButton', `MyButton_${btnType}`].join(' ')}
    >
      {text}
    </button>
  );
};

MyButton.defaultProps = {
  type: 'default',
}; // type props를 전달하지 않으면 'default'로 취급

export default MyButton;
