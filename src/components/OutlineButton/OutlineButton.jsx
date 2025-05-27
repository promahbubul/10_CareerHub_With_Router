const OutlineButton = ({children}) => {
  return (
    <button className="bg-clip-border cursor-pointer bg-gradient-to-r  rounded-sm bg-white from-liner-from to-liner-to border border-transparent">
      <p className="bg-white py-2 px-5 rounded-sm">{children}</p>
    </button>
  );
}
export default OutlineButton