const Button = ({ text, handleClick }) => {
  return (
    <button
      onClick={handleClick}
      className="bg-[#3b4242] w-[150px] p-2  rounded"
    >
      {text}
    </button>
  );
};

export default Button;
