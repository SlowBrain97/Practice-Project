import { AnimatePresence } from "motion/react";
import img1 from "../../assets/activities/1.jpg";
import img2 from "../../assets/activities/2.jpg";
import img4 from "../../assets/activities/4.jpg";

import news1 from "../../assets/news/1.jpg";
import news2 from "../../assets/news/2.jpg";
import news3 from "../../assets/news/3.jpg";
import achieve1 from "../../assets/achievement/1.jpg";
import achieve2 from "../../assets/achievement/2.jpg";
import achieve3 from "../../assets/achievement/3.jpg";
import useContextStatus from "../../utils/ContextDetailStatus";
import DetailContent from "./DetailContent";
const News = () => {
  return (
    <>
      <div className="col-span-2 cursor-pointer hover:scale-105 hover:duration-500 overflow-hidden h-[70%]">
        <img src={news1} alt="" className="h-[60%] w-full mb-3 object-cover" />
        <h2 className="font-semibold">
          Scholars, students, artists, and doers converse about current affairs,
          scientific breakthroughs, cutting-edge research, art making, and
          storytelling.
        </h2>
      </div>
      <div className="col-span-1 [&>div]:h-[23%]">
        <div className="mb-5 relative hover:scale-105 hover:duration-300">
          <img
            src={news2}
            alt=""
            className="h-full w-full object-cover rounded-lg"
          />
          <h3 className="absolute left-2 bottom-2">
            Perfect exercise for people looking for mind and body benefits
          </h3>
        </div>
        <div className="relative hover:scale-105 hover:duration-300">
          <img
            src={news3}
            alt=""
            className="h-full w-full object-cover rounded-lg"
          />
          <h3 className="absolute left-2 bottom-2">
            Perfect exercise for people looking for mind and body benefits
          </h3>
        </div>
      </div>
      <div className="col-span-1">
        <div className="group cursor-pointer mb-4">
          <h2 className="custom-title group-hover:text-gray-500">
            Whether you want to make small improvements to your lifestyle or
            treat yourself to some useful knowledge, the Harvard community can
            help you
          </h2>
          <div className="bg-gray-500 w-full h-[2px] mt-4 group-hover:bg-white"></div>
        </div>
        <div className="group cursor-pointer mb-4">
          <h2 className="custom-title group-hover:text-gray-500">
            Gender-affirming care rare among U.S. youth, study says
          </h2>
          <div className="bg-gray-500 w-full h-[2px] mt-4 group-hover:bg-white"></div>
        </div>
        <div className="group cursor-pointer mb-4">
          <h2 className="custom-title group-hover:text-gray-500">
            Unfuzzy math: U.S. needs to do better
          </h2>
          <div className="bg-gray-500 w-full h-[2px] mt-4 group-hover:bg-white"></div>
        </div>
        <div className="group cursor-pointer mb-4">
          <h2 className="custom-title group-hover:text-gray-500">
            Gender-affirming care rare among U.S. youth, study says
          </h2>
          <div className="bg-gray-500 w-full h-[2px] mt-4 group-hover:bg-white"></div>
        </div>
        <div className="group cursor-pointer mb-4">
          <h2 className="custom-title group-hover:text-gray-500">
            Real reason ACL injury rate is higher for women athletes
          </h2>
          <div className="bg-gray-500 w-full h-[2px] mt-4 group-hover:bg-white"></div>
        </div>
      </div>
    </>
  );
};
const Activities = () => {
  return (
    <>
      <div className="col-span-2 cursor-pointer hover:scale-105 hover:duration-500 overflow-hidden h-[70%]">
        <img src={img1} alt="" className="h-[60%] w-full mb-3 object-cover" />
        <h2 className="font-semibold">
          Starting can be as simple as finding the right form of exercise
        </h2>
      </div>
      <div className="col-span-1 [&>div]:h-[23%]">
        <div className="mb-5 relative hover:scale-105 hover:duration-300">
          <img
            src={img2}
            alt=""
            className="h-full w-full object-cover rounded-lg"
          />
          <h3 className="absolute left-2 bottom-2">
            Perfect exercise for people looking for mind and body benefits
          </h3>
        </div>
        <div className="relative hover:scale-105 hover:duration-300">
          <img
            src={img4}
            alt=""
            className="h-full w-full object-cover rounded-lg"
          />
          <h3 className="absolute left-2 bottom-2">
            Perfect exercise for people looking for mind and body benefits
          </h3>
        </div>
      </div>
      <div className="col-span-1">
        <div className="group cursor-pointer mb-4">
          <h2 className="custom-title group-hover:text-gray-500">
            Whether you want to make small improvements to your lifestyle or
            treat yourself to some useful knowledge, the Harvard community can
            help you
          </h2>
          <div className="bg-gray-500 w-full h-[2px] mt-4 group-hover:bg-white"></div>
        </div>
        <div className="group cursor-pointer mb-4">
          <h2 className="custom-title group-hover:text-gray-500">
            Gender-affirming care rare among U.S. youth, study says
          </h2>
          <div className="bg-gray-500 w-full h-[2px] mt-4 group-hover:bg-white"></div>
        </div>
        <div className="group cursor-pointer mb-4">
          <h2 className="custom-title group-hover:text-gray-500">
            Unfuzzy math: U.S. needs to do better
          </h2>
          <div className="bg-gray-500 w-full h-[2px] mt-4 group-hover:bg-white"></div>
        </div>
        <div className="group cursor-pointer mb-4">
          <h2 className="custom-title group-hover:text-gray-500">
            Gender-affirming care rare among U.S. youth, study says
          </h2>
          <div className="bg-gray-500 w-full h-[2px] mt-4 group-hover:bg-white"></div>
        </div>
        <div className="group cursor-pointer mb-4">
          <h2 className="custom-title group-hover:text-gray-500">
            Real reason ACL injury rate is higher for women athletes
          </h2>
          <div className="bg-gray-500 w-full h-[2px] mt-4 group-hover:bg-white"></div>
        </div>
      </div>
    </>
  );
};
const Achievements = () => {
  return (
    <>
      <div className="col-span-2 cursor-pointer hover:scale-105 hover:duration-500 overflow-hidden h-[70%]">
        <img
          src={achieve1}
          alt=""
          className="h-[60%] w-full mb-3 object-cover"
        />
        <h2 className="font-semibold">
          If you have a motivation to change, a conscious motivation, you are
          more likely to take steps that are hard and require persistence.
        </h2>
      </div>
      <div className="col-span-1 [&>div]:h-[23%]">
        <div className="mb-5 relative hover:scale-105 hover:duration-300">
          <img
            src={achieve2}
            alt=""
            className="h-full w-full object-cover rounded-lg"
          />
          <h3 className="absolute left-2 bottom-2">
            Perfect exercise for people looking for mind and body benefits
          </h3>
        </div>
        <div className="relative hover:scale-105 hover:duration-300">
          <img
            src={achieve3}
            alt=""
            className="h-full w-full object-cover rounded-lg"
          />
          <h3 className="absolute left-2 bottom-2">
            Perfect exercise for people looking for mind and body benefits
          </h3>
        </div>
      </div>
      <div className="col-span-1">
        <div className="group cursor-pointer mb-4">
          <h2 className="custom-title group-hover:text-gray-500">
            Whether you want to make small improvements to your lifestyle or
            treat yourself to some useful knowledge, the Harvard community can
            help you
          </h2>
          <div className="bg-gray-500 w-full h-[2px] mt-4 group-hover:bg-white"></div>
        </div>
        <div className="group cursor-pointer mb-4">
          <h2 className="custom-title group-hover:text-gray-500">
            Gender-affirming care rare among U.S. youth, study says
          </h2>
          <div className="bg-gray-500 w-full h-[2px] mt-4 group-hover:bg-white"></div>
        </div>
        <div className="group cursor-pointer mb-4">
          <h2 className="custom-title group-hover:text-gray-500">
            Unfuzzy math: U.S. needs to do better
          </h2>
          <div className="bg-gray-500 w-full h-[2px] mt-4 group-hover:bg-white"></div>
        </div>
        <div className="group cursor-pointer mb-4">
          <h2 className="custom-title group-hover:text-gray-500">
            Gender-affirming care rare among U.S. youth, study says
          </h2>
          <div className="bg-gray-500 w-full h-[2px] mt-4 group-hover:bg-white"></div>
        </div>
        <div className="group cursor-pointer mb-4">
          <h2 className="custom-title group-hover:text-gray-500">
            Real reason ACL injury rate is higher for women athletes
          </h2>
          <div className="bg-gray-500 w-full h-[2px] mt-4 group-hover:bg-white"></div>
        </div>
      </div>
    </>
  );
};

export const Content = ({ current }) => {
  const { status, setStatusOnOff } = useContextStatus();
  const renderContent = () => {
    switch (current) {
      case "NEWS":
        return <News />;
      case "ACTIVITIES":
        return <Activities />;
      case "ACHIEVEMENTS":
        return <Achievements />;
    }
  };
  const handleClickBtn = () => {
    setStatusOnOff();
  };
  return (
    <>
      <div className=" h-full bg-black text-white rounded-2xl p-8 relative grid grid-cols-4 gap-4 [&>div>img]:rounded-xl">
        {renderContent()}
        <div className="absolute left-1/2 -translate-x-1/2 bottom-7">
          <button
            className="bg-transparent px-8 py-6 border border-white text-3xl rounded-full hover:bg-white/60 hover:scale-105
        "
            onClick={handleClickBtn}
          >
            View All
          </button>
        </div>
      </div>
      <AnimatePresence>
        {status && <DetailContent current={current} />}
      </AnimatePresence>
    </>
  );
};
