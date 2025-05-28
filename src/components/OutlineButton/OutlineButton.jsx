const OutlineButton = ({children}) => {
  return (
    <button className="bg-clip-border cursor-pointer bg-gradient-to-r  rounded-sm bg-white from-liner-from to-liner-to border border-transparent">
      <p className="bg-white  py-2 px-5 rounded-sm">
        <div className="bg-gradient-to-r from-liner-from to-liner-to bg-clip-text text-transparent font-extrabold">{children}</div>
      </p>
    </button>
  );
}
export default OutlineButton