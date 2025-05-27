const Category = ({category}) => {
  const {  logo, category_name, availability } = category;
  /**
      {
        "id":1,
        "logo":"https://i.ibb.co/NyW6vSW/accounts-1.png",
        "category_name":"Account & Finance",
        "availability":"300 Jobs Available"

    },
     */
  return (
    <div className="bg-gradient-to-r hover:-translate-y-3 cursor-pointer duration-500 hover:from-liner-to/7 hover:to-liner-from/7   from-liner-from/5 to-liner-to/5 rounded-lg p-10">
      <div className="p-3 rounded-lg bg-gradient-to-r max-w-max mb-8 from-liner-from/10 to-liner-to/10">
        <img src={logo} alt="" className="w-10 h-10 " />
      </div>
      <h3 className="text-dark-2 font-extrabold font-manrope text-xl mb-2">
        {category_name}
      </h3>
      <p className="text-base font-medium font-manrope text-dark-4">
        {availability}
      </p>
    </div>
  );
}
export default Category