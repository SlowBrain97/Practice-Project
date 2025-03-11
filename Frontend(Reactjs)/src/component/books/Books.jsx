import { useState } from "react";
import book1 from "../../assets/books/1.jpg";
import book2 from "../../assets/books/2.jpg";
import book3 from "../../assets/books/3.jpg";
import arrowLeft from "../../assets/icon/arrow-left.svg";
import arrowRight from "../../assets/icon/arrow-right.svg";
import { randomCarousel } from "../../utils/BookCarousel";
import { motion, useAnimation } from "motion/react";
const Books = () => {
  const [isAnimation, setIsAnimation] = useState(true);
  const [setOffX, setSetOffX] = useState(0);
  const carouselAnimation = useAnimation();
  const handleClickCarouelLeft = () => {
    setIsAnimation(false);
    const newX = setOffX - 10;
    setSetOffX(newX);
    carouselAnimation.start({ x: { newX }, transition: { duration: 2 } });
    setTimeout(() => setIsAnimation(true), 2000);
  };
  const handleClickCarouelRight = () => {
    const newX = setOffX + 10;
    setSetOffX(newX);
    carouselAnimation.start({ x: { newX }, transition: { duration: 2 } });
    setTimeout(() => setIsAnimation(true), 2000);
  };
  return (
    <div className="w-[95%] m-auto text-white rounded-2xl mt-[15%]">
      <div className="flex justify-start items-start mb-5">
        <h1 className="text-[52px] text-black font-semibold">
          Read an engaging book
        </h1>
        <div className=" text-black ml-5">
          <a
            href="#"
            className="group flex justify-start text-2xl items-center border-none p-5 "
          >
            <h1 className="group-hover:bg-white group-hover:text-black h-10 w-10 p-1 text-center  bg-gray-600 rounded-[50%] mr-3">
              &#x2794;
            </h1>
            <h2>Explore more</h2>
          </a>
        </div>
      </div>
      <div className="w-full bg-black rounded-xl">
        <div className="flex justify-evenly h-[60%] p-7">
          <img
            src={book1}
            alt=""
            className="w-[30%] h-[] rounded-xl object-cover hover:scale-105 hover:duration-500 cursor-pointer"
          />
          <img
            src={book2}
            alt=""
            className="w-[30%] h-auto rounded-xl object-cover hover:scale-105 hover:duration-500 cursor-pointer"
          />
          <img
            src={book3}
            alt=""
            className="w-[30%] h-auto rounded-xl object-cover hover:scale-105 hover:duration-500 cursor-pointer"
          />
        </div>
        <div className="m-7 overflow-clip relative">
          <motion.div
            className={`flex w-full gap-x-4 ${
              isAnimation ? "animate-carousel-move" : ""
            } pb-7`}
            animate={carouselAnimation}
          >
            {randomCarousel.map((book, index) => (
              <div key={index} className="w-[15%] rounded-xl gap-x-1 shrink-0">
                <img
                  src={book}
                  alt=""
                  className="object-cover w-full h-full rounded-xl cursor-pointer hover:scale-105 overflow-hidden "
                />
              </div>
            ))}
          </motion.div>
          <img
            src={arrowLeft}
            alt=""
            className="absolute top-[40%] left-[5%]  w-12 h-12 z-50 invert cursor-pointer  hover:scale-150"
            onClick={handleClickCarouelLeft}
          />
          <img
            src={arrowRight}
            alt=""
            className="absolute top-[40%] right-[5%]  w-12 h-12 z-50 invert cursor-pointer  hover:scale-150"
            onClick={handleClickCarouelRight}
          />
        </div>
      </div>
    </div>
  );
};

export default Books;
