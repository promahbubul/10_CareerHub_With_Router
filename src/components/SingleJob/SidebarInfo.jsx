const Sidebarinfo = ({title, value, className    }) => {
  return (
    <p className={`text-dark-2 font-manrope font-bold text-xl ${className && className}`}>
      {title} :
      <span className="font-medium text-lg font-manrope text-dark-3 ">
        {value}
      </span>
    </p>
  );
}
export default Sidebarinfo