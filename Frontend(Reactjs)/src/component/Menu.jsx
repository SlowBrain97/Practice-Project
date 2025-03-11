import { CloseOutlined } from "@ant-design/icons";
import logo from "../assets/logo-removebg.png";
import { createContext, useContext, useMemo, useState } from "react";
import {
  DegreeProgram,
  LucNganSchool,
} from "./MenuChildComponent/ChildrenComponent";
import { motion } from "motion/react";

const contextMenu = createContext();
const menuData = {
  mainMenu: [
    { id: "academics", title: "Academics" },
    { id: "campus", title: "Campus" },
    { id: "visit", title: "Visit" },
    { id: "infocus", title: "In Focus" },
    { id: "news", title: "News" },
    { id: "about", title: "About" },
  ],
  subMenu: {
    academics: [
      {
        id: "academicsSub",
        title: "Academics",
        path: "/academics",
        describe: "Food nourishes us, inspires us, and brings us together.",
        img: "../assets/thpt3.jgp",
      },
      { id: "degreePrograms", title: "Degree programs" },
      {
        id: "lucNganSchool",
        title: "Luc Ngan School",
      },
      {
        id: "professional",
        title: "Professional and Lifelong Learning",
        path: "/academics/professional",
      },
      {
        id: "lucNganOnline",
        title: "Luc Ngan Online",
        path: "/academics/luc-ngan-online",
      },
    ],
    campus: [
      {
        id: "lucnganCampus",
        title: "Luc Ngan's Campus",
        path: "/campus",
        describe: "Food nourishes us, inspires us, and brings us together.",
      },
      { id: "libraries", title: "Libraries" },
      { id: "museums", title: "Museums" },
    ],
  },
  subMenuDetail: {
    degreePrograms: {
      element: <DegreeProgram />,
    },
    lucNganSchool: {
      element: <LucNganSchool />,
    },
    libraries: {
      element: "gfdgfdgfd",
    },
    museums: {
      element: "dsadsadsa",
    },
  },
};
const MainMenu = () => {
  const { openingMenu, setOpeningMenu } = useContext(contextMenu);

  return (
    <nav className="px-3 py-20 text-6xl space-y-5 flex flex-col align-middle font-eczar">
      {menuData.mainMenu.map(({ id, title }) => (
        <div key={id}>
          <h1
            onClick={() => {
              if (openingMenu == id) setOpeningMenu(null);
              else setOpeningMenu(id);
            }}
            className={`${
              !openingMenu
                ? "text-white"
                : id === openingMenu
                ? "text-white custom-underline"
                : "text-gray-500 hover:text-white"
            } cursor-pointer after-underline inline-block`}
          >
            {title}
          </h1>
        </div>
      ))}
    </nav>
  );
};
const SubMenu = () => {
  const { openingMenu, subMenuDetail, setSubMenuDetail } =
    useContext(contextMenu);

  const subMenuItem = menuData.subMenu[openingMenu] || [];
  const handleSubmenuDetail = (id) => {
    if (subMenuDetail == id) setSubMenuDetail(null);
    else setSubMenuDetail(id);
  };
  return (
    <nav className="px-3 py-20 text-[28px] flex flex-col font-eczar">
      {subMenuItem.map(({ id, title, path, describe }) => (
        <div key={id} onClick={() => handleSubmenuDetail(id)} className="mb-3 ">
          <div
            className={`${
              id === subMenuItem[0].id
                ? "text-white"
                : !subMenuDetail
                ? "text-white"
                : id === subMenuDetail
                ? "text-white custom-underline"
                : "text-gray-500 hover:text-white"
            }`}
          >
            {path ? (
              <a
                href={path}
                className={`${
                  id == subMenuDetail ? "after-underline custom-underline" : ""
                } group after-underline inline-block`}
              >
                {title}
                <span className="group-hover:inline-block hidden ml-1 text-center">
                  &#x2794;
                </span>
              </a>
            ) : (
              <h2
                className={`${
                  id == subMenuDetail ? "after-underline custom-underline" : ""
                }  group after-underline inline-block`}
                onClick={() => setSubMenuDetail(id)}
              >
                {title}
                <span className="hidden group-hover:inline-block ml-1 text-center font-bold">
                  &gt;
                </span>
              </h2>
            )}
          </div>
          {describe && <p className="text-[16px] text-gray-500">{describe}</p>}
        </div>
      ))}
    </nav>
  );
};

const SubMenuDetail = () => {
  const { subMenuDetail } = useContext(contextMenu);
  const Detail = menuData.subMenuDetail[subMenuDetail] || [];

  return <>{subMenuDetail ? Detail.element : ""}</>;
};
const Menu = ({ onClose }) => {
  const [openingMenu, setOpeningMenu] = useState(null);
  const [subMenuDetail, setSubMenuDetail] = useState(null);
  useMemo(() => {
    setSubMenuDetail(null);
  }, [openingMenu]);
  return (
    <contextMenu.Provider
      value={{ openingMenu, setOpeningMenu, subMenuDetail, setSubMenuDetail }}
    >
      <motion.div
        initial={{ y: "-100%", opacity: 0 }}
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
        className="fixed inset-0 
          bg-black
        text-white overflow-hidden z-40"
      >
        <div className="h-screen w-full px-6 flex flex-col">
          <div className=" h-[15%] flex justify-between items-center custom-shadow relative">
            <div
              className="flex justify-center items-center cursor-pointer"
              onClick={() => onClose(false)}
            >
              <img
                src={logo}
                className="w-10 sm:w-16 md:w-28 invert"
                style={{}}
              />
              <div className="font-merriweather">
                <h1 className="text-4xl font-bold">LUC NGAN</h1>
                <h2 className="text-2xl font-bold text-center">COLLEGE</h2>
              </div>
            </div>
            <div
              className="text-2xl flex justify-center items-center space-x-4 mt-[-20px] mr-3 cursor-pointer"
              onClick={() => onClose(false)}
            >
              <p>CLOSE</p>
              <CloseOutlined className="" />
            </div>
          </div>
          <div className="grid grid-cols-12 h-[75%]">
            <div className="col-span-3 overflow-y-auto scrollbar  scrollbar-thumb-[#46494e] scrollbar-track-[#282c2f] scrollbar-thin scrollbar-corner-black ">
              <MainMenu />
            </div>
            <div className="col-span-3 px-6 overflow-y-auto scrollbar scrollbar-thumb-[#46494e] scrollbar-track-[#282c2f] scrollbar-thin scrollbar-corner-black ">
              <SubMenu />
            </div>
            <div className="col-span-6 px-3 py-20 overflow-y-auto scrollbar scrollbar-thumb-[#46494e] scrollbar-track-[#282c2f] scrollbar-thin scrollbar-corner-black">
              <SubMenuDetail />
            </div>
          </div>
          <div className="w-full border-t-2 border-gray-500 h-[10%] text-white text-2xl">
            <div className="flex justify-start items-center space-x-6 text-center p-5">
              <h2 className="text-gray-500 text-center">Quick Link &gt;</h2>
              <a href="#">A to Z index</a>
              <a href="#">Find a person</a>
              <a href="#">Media Relations</a>
              <a href="#">Events</a>
              <a href="#">Alumni</a>
              <a href="#">Emergency</a>
            </div>
          </div>
        </div>
      </motion.div>
    </contextMenu.Provider>
  );
};

export default Menu;
