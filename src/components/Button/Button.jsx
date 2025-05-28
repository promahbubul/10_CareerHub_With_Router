const Button = ({ children, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={`py-5 px-7 rounded-lg text-xl font-bold text-white bg-gradient-to-r from-liner-from to-liner-to active:from-liner-from active:to-liner-to cursor-pointer hover:scale-[98%] duration-300 hover:from-liner-to hover:to-liner-from active:scale-[103%] ${
        className && className
      }`}
    >
      {children}
    </button>
  );
};
export default Button;
