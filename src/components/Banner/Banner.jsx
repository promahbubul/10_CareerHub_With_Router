import user from '../../assets/images/user.png'
import Button from '../Button/Button';

const Banner = () => {
  return (
    <section
      //   style={{ backgroundImage: `url(${user})` }}
      className={`  gap-16 bg-gradient-to-r from-liner-from/5 to-liner-to/5`}
    >
      <div className="max-w-7xl mx-auto flex flex-row items-center  ">
        <div className="w-6/12 ">
          <h1 className="font-manrope max-w-xl leading-tight mb-6 text-dark-1 text-[80px]  font-extrabold">
            One Step Closer To Your{" "}
            <span className="bg-gradient-to-r text-transparent  bg-clip-text from-liner-from to-liner-to">
              Dream Job
            </span>
          </h1>
          <p className="mb-8 text-dark-3 text-lg  max-w-lg font-medium">
            Explore thousands of job opportunities with all the information you
            need. Its your future. Come find it. Manage all your job application
            from start to finish.
          </p>
          <Button>Get Started</Button>
        </div>
        <div className="w-6/12 h-full  ">
          <img src={user} className="text-right translate-x-20" />
        </div>
      </div>
    </section>
  );
}
export default Banner