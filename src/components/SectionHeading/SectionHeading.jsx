const SectionHeading = ({title, subTitle}) => {
  return (
    <div>
        <h1 className="mb-4 font-manrope text-center text-5xl font-extrabold">{title}</h1>
        <p className="text-base text-center font-medium text-dark-3">{subTitle}</p>
    </div>
  )
}
export default SectionHeading