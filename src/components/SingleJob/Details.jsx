const Details = ({ title, value , newLine}) => {
  return (
    <div>
      <p className="text-base font-manrope leading-loose mb-6">
        <span className={`text-dark-1 font-extrabold ${newLine && "mb-6 block"}`}>{title} :</span>{" "}
        {/* {newLine && <br />} */}
        <span className="text-dark-2 font-medium">{value}</span>
      </p>
    </div>
  );
};
export default Details;
