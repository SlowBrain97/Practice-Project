import { motion, useScroll, useTransform, useSpring } from "motion/react";
import logo from "../../assets/logo-removebg.png";
import { CloseOutlined } from "@ant-design/icons";
import news from "../../assets/news.jpg";
import activities from "../../assets/activity.jpg";
import achievements from "../../assets/achievements.webp";
import useContextStatus from "../../utils/ContextDetailStatus";
import news1 from "../../assets/news/1.jpg";
import news2 from "../../assets/news/2.jpg";
import news3 from "../../assets/news/3.jpg";
import achie from "../../assets/achievement/2.jpg";
import { useEffect, useRef } from "react";
import FadeIn from "./FadeIn";
const NewsDetail = () => {
  return (
    <>
      <FadeIn>
        <div className="grid grid-flow-col mb-8 gap-x-7 cursor-pointer">
          <img
            src={news1}
            alt=""
            className="grid-cols-1 rounded-lg object-cover h-[60%] w-full"
          />
          <div className="grid-cols-1">
            <h2>
              Whether you want to make small improvements to your lifestyle or
              treat yourself to some useful knowledge, the Harvard community can
              help you
            </h2>
            <p className="text-gray-500">
              new analysis of nearly 200,000 adults shows that those with a
              clean result on their first colonoscopy may not need another for
              longer —
            </p>
          </div>
        </div>
      </FadeIn>
      <FadeIn>
        <div className="grid grid-flow-col mb-8 gap-x-7 cursor-pointer">
          <img
            src={achie}
            alt=""
            className="grid-cols-1 rounded-lg object-cover h-[60%] w-full"
          />
          <div className="grid-cols-1">
            <h2>
              Whether you want to make small improvements to your lifestyle or
              treat yourself to some useful knowledge, the Harvard community can
              help you
            </h2>
            <p className="text-gray-500">
              new analysis of nearly 200,000 adults shows that those with a
              clean result on their first colonoscopy may not need another for
              longer —
            </p>
          </div>
        </div>
      </FadeIn>
      <FadeIn>
        <div className="grid grid-flow-col mb-8 gap-x-7 cursor-pointer">
          <img
            src={news3}
            alt=""
            className="grid-cols-1 rounded-lg object-cover h-[60%] w-full"
          />
          <div className="grid-cols-1">
            <h2>
              Whether you want to make small improvements to your lifestyle or
              treat yourself to some useful knowledge, the Harvard community can
              help you
            </h2>
            <p className="text-gray-500">
              new analysis of nearly 200,000 adults shows that those with a
              clean result on their first colonoscopy may not need another for
              longer —
            </p>
          </div>
        </div>
      </FadeIn>
      <FadeIn>
        <div className="grid grid-flow-col mb-8 gap-x-7 cursor-pointer">
          <img
            src={news}
            alt=""
            className="grid-cols-1 rounded-lg object-cover h-[60%] w-full"
          />
          <div className="grid-cols-1">
            <h2>
              Whether you want to make small improvements to your lifestyle or
              treat yourself to some useful knowledge, the Harvard community can
              help you
            </h2>
            <p className="text-gray-500">
              new analysis of nearly 200,000 adults shows that those with a
              clean result on their first colonoscopy may not need another for
              longer
            </p>
          </div>
        </div>
      </FadeIn>
    </>
  );
};
const AchievementDetail = () => {
  return (
    <>
      <FadeIn>
        <div className="grid grid-flow-col mb-8 gap-x-7">
          <img
            src={news1}
            alt=""
            className="grid-cols-1 rounded-lg object-cover h-[60%] w-full"
          />
          <div className="grid-cols-1">
            <h2>
              Whether you want to make small improvements to your lifestyle or
              treat yourself to some useful knowledge, the Harvard community can
              help you
            </h2>
            <p className="text-gray-500">
              new analysis of nearly 200,000 adults shows that those with a
              clean result on their first colonoscopy may not need another for
              longer —
            </p>
          </div>
        </div>
      </FadeIn>
      <FadeIn>
        <div className="grid grid-flow-col mb-8 gap-x-7">
          <img
            src={achie}
            alt=""
            className="grid-cols-1 rounded-lg object-cover h-[60%] w-full"
          />
          <div className="grid-cols-1">
            <h2>
              Whether you want to make small improvements to your lifestyle or
              treat yourself to some useful knowledge, the Harvard community can
              help you
            </h2>
            <p className="text-gray-500">
              new analysis of nearly 200,000 adults shows that those with a
              clean result on their first colonoscopy may not need another for
              longer —
            </p>
          </div>
        </div>
      </FadeIn>
      <FadeIn>
        <div className="grid grid-flow-col mb-8 gap-x-7">
          <img
            src={news3}
            alt=""
            className="grid-cols-1 rounded-lg object-cover h-[60%] w-full"
          />
          <div className="grid-cols-1">
            <h2>
              Whether you want to make small improvements to your lifestyle or
              treat yourself to some useful knowledge, the Harvard community can
              help you
            </h2>
            <p className="text-gray-500">
              new analysis of nearly 200,000 adults shows that those with a
              clean result on their first colonoscopy may not need another for
              longer —
            </p>
          </div>
        </div>
      </FadeIn>
      <FadeIn>
        <div className="grid grid-flow-col mb-8 gap-x-7">
          <img
            src={news}
            alt=""
            className="grid-cols-1 rounded-lg object-cover h-[60%] w-full"
          />
          <div className="grid-cols-1">
            <h2>
              Whether you want to make small improvements to your lifestyle or
              treat yourself to some useful knowledge, the Harvard community can
              help you
            </h2>
            <p className="text-gray-500">
              new analysis of nearly 200,000 adults shows that those with a
              clean result on their first colonoscopy may not need another for
              longer —
            </p>
          </div>
        </div>
      </FadeIn>
    </>
  );
};
const ActivitiesDetail = () => {
  return (
    <>
      <FadeIn>
        <div className="grid grid-flow-col mb-8 gap-x-7">
          <img
            src={news1}
            alt=""
            className="grid-cols-1 rounded-lg object-cover h-[60%] w-full"
          />
          <div className="grid-cols-1">
            <h2>
              Whether you want to make small improvements to your lifestyle or
              treat yourself to some useful knowledge, the Harvard community can
              help you
            </h2>
            <p className="text-gray-500">
              new analysis of nearly 200,000 adults shows that those with a
              clean result on their first colonoscopy may not need another for
              longer —
            </p>
          </div>
        </div>
      </FadeIn>
      <FadeIn>
        <div className="grid grid-flow-col mb-8 gap-x-7">
          <img
            src={achie}
            alt=""
            className="grid-cols-1 rounded-lg object-cover h-[60%] w-full"
          />
          <div className="grid-cols-1">
            <h2>
              Whether you want to make small improvements to your lifestyle or
              treat yourself to some useful knowledge, the Harvard community can
              help you
            </h2>
            <p className="text-gray-500">
              new analysis of nearly 200,000 adults shows that those with a
              clean result on their first colonoscopy may not need another for
              longer —
            </p>
          </div>
        </div>
      </FadeIn>
      <FadeIn>
        <div className="grid grid-flow-col mb-8 gap-x-7">
          <img
            src={news3}
            alt=""
            className="grid-cols-1 rounded-lg object-cover h-[60%] w-full"
          />
          <div className="grid-cols-1">
            <h2>
              Whether you want to make small improvements to your lifestyle or
              treat yourself to some useful knowledge, the Harvard community can
              help you
            </h2>
            <p className="text-gray-500">
              new analysis of nearly 200,000 adults shows that those with a
              clean result on their first colonoscopy may not need another for
              longer —
            </p>
          </div>
        </div>
      </FadeIn>
      <FadeIn>
        <div className="grid grid-flow-col mb-8 gap-x-7">
          <img
            src={news}
            alt=""
            className="grid-cols-1 rounded-lg object-cover h-[60%] w-full"
          />
          <div className="grid-cols-1">
            <h2>
              Whether you want to make small improvements to your lifestyle or
              treat yourself to some useful knowledge, the Harvard community can
              help you
            </h2>
            <p className="text-gray-500">
              new analysis of nearly 200,000 adults shows that those with a
              clean result on their first colonoscopy may not need another for
              longer —
            </p>
          </div>
        </div>
      </FadeIn>
    </>
  );
};

const DetailContent = ({ current }) => {
  const { status, setStatusOnOff } = useContextStatus();
  const modalRef = useRef(null);
  const videoContainerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: videoContainerRef,
    offset: ["start start", "end end"],
  });
  const opacity = useTransform(scrollYProgress, [0, 0.7, 1], [1, 0.7, 0.3]);
  const smoothOpacity = useSpring(opacity, { stiffness: 100, damping: 20 });
  const render = () => {
    switch (current) {
      case "NEWS":
        return <NewsDetail />;
      case "ACHIEVEMENTS":
        return <AchievementDetail />;
      case "ACTIVITIES":
        return <ActivitiesDetail />;
    }
  };

  useEffect(() => {
    if (status) {
      // Khi modal mở: khóa scroll trang chính
      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";
      document.body.style.width = "100%";

      // Reset scroll position của modal về đầu
      if (modalRef.current) {
        modalRef.current.scrollTo(0, 0);
      }
    } else {
      // Khi modal đóng: mở lại scroll trang chính
      document.body.style.overflow = "auto";
      document.body.style.position = "static";
    }

    return () => {
      // Cleanup: đảm bảo scroll trang chính được mở lại
      document.body.style.overflow = "auto";
      document.body.style.position = "static";
    };
  }, [status]);

  var image = null;
  if (current === "NEWS") image = news;
  else if (current === "ACHIEVEMENTS") image = achievements;
  else if (current === "ACTIVITIES") image = activities;

  return (
    <motion.div
      className="fixed inset-0 h-screen bg-black text-white z-[80] w-screen overflow-y-auto"
      initial={{ left: "-100%", opacity: 0 }}
      animate={{
        left: 0,
        opacity: 1,
        transition: {
          type: "spring",
          stiffness: 80,
          damping: 20,
          duration: 0.3,
        },
      }}
      exit={{
        left: "-100%",
        opacity: 0,
        transition: {
          type: "spring",
          stiffness: 80,
          damping: 20,
          duration: 0.3,
        },
      }}
      ref={modalRef}
    >
      {/* Header Section */}
      <div className="fixed top-0 w-full bg-black/30 z-[120]">
        <div className="flex justify-between px-8 items-center">
          <img src={logo} alt="" className="w-10 sm:w-16 md:w-28 invert" />
          <div
            className="text-2xl flex justify-center items-center space-x-4 mt-[-20px] mr-3 cursor-pointer"
            onClick={setStatusOnOff}
          >
            <p>CLOSE</p>
            <CloseOutlined />
          </div>
        </div>
      </div>

      {/* Content Container */}
      <div className="relative min-h-screen">
        {/* Background Image Section */}
        <motion.div
          ref={videoContainerRef}
          style={{ opacity: smoothOpacity }}
          className="fixed top-0 left-0 w-full h-screen z-[100]"
        >
          <img src={image} alt="" className="h-screen object-cover w-full" />
        </motion.div>

        {/* Hero Section */}
        <div className="relative z-[100] h-screen pb-7">
          <motion.div
            className="flex h-full flex-col items-center justify-center px-8"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1 },
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.98 }}
          >
            <h1 className="mb-10 text-4xl font-bold md:text-5xl">
              Time for a rethink of <br />
              colonoscopy guidelines?
            </h1>
            <p className="font-semibold">Especially with the lowered age.</p>
          </motion.div>
        </div>

        {/* Main Content Section */}
        <div className="relative z-[110]">
          <div className="w-[80%] mx-auto">{render()}</div>
        </div>
      </div>
    </motion.div>
  );
};

export default DetailContent;
