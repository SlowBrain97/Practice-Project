import { motion } from "motion/react";
import { Content } from "./Content";
import { useState } from "react";

const largeMenu = ["NEWS", "ACTIVITIES", "ACHIEVEMENTS"];
const Section2 = () => {
  const [isHover, setIsHover] = useState(false);
  const [current, setCurrent] = useState("NEWS");
  return (
    <div className=" mx-auto mt-[110vh]  rounded-3xl w-[95%] h-[80vh] flex flex-col gap-y-10">
      <div className="grid place-content-center">
        <div
          className="text-black font-bold text-center relative w-fit"
          onMouseLeave={() => setIsHover(false)}
        >
          <motion.button
            className="px-4 py-6 bg-transparent border-[4px] border-black rounded-xl hover:scale-105 text-6xl"
            whileHover={() => setIsHover(true)}
          >
            {current}
          </motion.button>
          {isHover && (
            <motion.div
              className="p-4 bg-transparent text-white border-black rounded-xl w-[400px]  absolute -bottom-[100px] left-1/2 -translate-x-1/2 flex z-50 justify-around items-center"
              initial={{ opacity: 0, y: -100, x: "-50%" }}
              animate={{
                y: 0,
                opacity: 1,
                transition: {
                  type: "spring",
                  stiffness: 80,
                  damping: 20,
                  duration: 0.3,
                },
              }}
              exit={{ y: "-100%", opacity: 0, transition: { duration: 0.5 } }}
            >
              {largeMenu.map((menu, index) => {
                if (menu !== current)
                  return (
                    <button
                      key={index}
                      className=" hover:scale-105 px-3 py-5 border text-xl rounded-2xl border-white bg-black"
                      onClick={() => setCurrent(menu)}
                    >
                      {menu}
                    </button>
                  );
              })}
            </motion.div>
          )}
        </div>
      </div>

      <Content current={current} />
    </div>
  );
};

export default Section2;
