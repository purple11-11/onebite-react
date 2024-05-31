const Button = ({ text, color }) => {
  const onClickHandler = (e) => {
    console.log(e);
    console.log(text);
  };
  return (
    <button style={{ color: color }} onClick={onClickHandler}>
      {text} - {color.toUpperCase()}
    </button>
  );
};

Button.defaultProps = {
  color: "black",
};

export default Button;
