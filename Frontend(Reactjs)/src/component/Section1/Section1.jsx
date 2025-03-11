import { useEffect, useState } from "react";
import { HeaderImgSource } from "../../utils/HeaderImgSource";
import { motion } from "motion/react";
const Section1 = () => {
  const [headerImg, setHeaderImg] = useState(HeaderImgSource[0]);
  const [isBlur, setIsBlur] = useState(false);
  useEffect(() => {
    const interval = setInterval(() => {
      setIsBlur(true);
      setTimeout(() => {
        setHeaderImg(
          HeaderImgSource[Math.floor(Math.random() * HeaderImgSource.length)]
        );
      }, 2000);
      setIsBlur(false);
    }, 4000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="w-full h-screen bg-cover absolute top-0 rounded-b-2xl">
      <motion.img
        src={headerImg}
        alt=""
        animate={{
          filter: isBlur ? "blur(30px)" : "blur(0px)",
          transition: { duration: 2 },
        }}
        className="h-screen w-full object-cover"
      ></motion.img>
      <div className="absolute top-[50%] z-20 left-[50%] translate-x-[-50%] translate-y-[-50%] text-center font-sora">
        <h1 className="text-[130px]" style={{ fontWeight: "500" }}>
          Resolutions
        </h1>
        <p className="text-[22px]">
          Whether you want to make small improvements to your lifestyle or treat{" "}
          <br /> yourself to some useful knowledge, the Harvard community can
          help you <br /> start something new this year.
        </p>
      </div>
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(to top, #f5f5f7 0.1%, rgba(245, 245, 247, 0.5) 100%)",
        }}
      ></div>
      <div className="h-[20%] w-[1px] absolute left-[calc(50%-1px)] bottom-[5%] bg-gray-600 z-30"></div>
      <div className="h-[20%] w-[1px] absolute left-[calc(50%-1px)] top-[5%]   z-30"></div>
      <div className="w-[70%] h-[4px] absolute bottom-[-15%] bg-black z-10 left-[15%]"></div>
    </div>
  );
};

export default Section1;
