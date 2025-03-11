import Navbar from "../Navbar/Navbar";
import { TypeAnimation } from "react-type-animation";

const Header = () => {
  return (
    <>
      <header className="w-full z-50 bg-black text-center text-white whitespace-nowrap overflow-hidden min-h-[35px] grid place-items-center rounded-bl-2xl">
        <TypeAnimation
          sequence={["Welcome to Luc Ngan College!", 3000, "", 3000]}
          wrapper="h3"
          speed={50}
          repeat={Infinity}
          cursor={false}
          className=" text-xl inline-block"
        />
      </header>

      <div className="sticky w-full top-0 z-50">
        <Navbar />
      </div>
    </>
  );
};

export default Header;
