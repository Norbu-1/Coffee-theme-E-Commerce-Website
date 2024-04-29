import image1 from "../assets/istock2.jpg";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="md:flex justify-between items-center py-8 h-full md:pt-[100px] ">
      <div className="w-full h-full md:w-1/2">
        <img
          className="md:px-8 mx-auto md:pl-16 object-cover w-[90%] h-[300px] md:h-[400px] md:rounded-r-full rounded-b-full md:rounded-bl-none"
          src={image1}
          alt="Yellow Cup"
        />
      </div>
      <div className="w-full md:w-1/2  px-8 md:px-16 mt-4 flex flex-col justify-center py-6">
        <h1 className=" pb-4 font-extrabold lg:text-6xl text-4xl text-black">
          Welcome <br />
          To CaffeineHub
        </h1>
        <div className="text-xl lg:text-2xl   pb-4 font-bold font-serif text-red-900 ">
          <span className="text-2xl lg:text-4xl ">COFFEE-</span>
          <span>YOUR DAILY DOSE!</span>
        </div>
        <p className="font-semibold text-lg md:text-xl  py-2  h-auto text-slate-900 font-sans ">
          Discover more to enhance your coffee experience, you may want to
          explore and learn more about your favorite coffee. This reminder can
          help you get started on that journey.
          {/* {quotes} */}
        </p>
        <div className="gap-4 flex mt-4">
          <Link  className="bg-yellow-300 px-3 rounded-lg font-semibold py-3" to="/Blog">
            Discover More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
