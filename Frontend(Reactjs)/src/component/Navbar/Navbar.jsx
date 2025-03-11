import logoBlack from "../../assets/logo-removebg.png";
import { MenuOutlined, UserOutlined, DownOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useAnimation } from "motion/react";
import Login from "../../pages/Login/Login";
import Menu from "../Menu";
import useLoginContent from "../../utils/useLoginContent";
import CustomPopover from "@/components/custom/CustomPopover";

const Navbar = () => {
  const navigate = useNavigate();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [prevScrollbar, setPrevScrollbar] = useState(0);
  const [visible, setVisible] = useState(true);
  const [isInitialLoad, setisInitialLoad] = useState(true);
  const controlsY = useAnimation();
  const controlsX = useAnimation();
  useEffect(() => {
    if (isInitialLoad) {
      controlsX.start({
        x: ["100%", "0"],
        opacity: [0, 1],
        transition: {
          duration: 0.4,
          ease: "easeOut",
        },
      });
      controlsY.start({
        y: ["-100%", "0"],
        opacity: [0, 1],
        transition: {
          duration: 0.4,
          ease: "easeOut",
        },
      });
      setisInitialLoad(false);
    }

    const handleScroll = () => {
      const currentScrollbar = window.scrollY;
      const ScrollDown = prevScrollbar < currentScrollbar;
      const ScrollUp = prevScrollbar > currentScrollbar;
      if (ScrollDown && visible && currentScrollbar > 50) {
        setVisible(false);
        controlsY.start({
          opacity: 0,
          y: "-100%",
          duration: 2,
          ease: "easeIn",
        });
        controlsX.start({
          x: "100%",
          duration: 1,
          opacity: 0,
          ease: "easeIn",
        });
      } else if (ScrollUp && !visible) {
        setVisible(true);
        controlsY.start({
          y: "0",
          duration: 2,
          opacity: 1,
          ease: "easeIn",
        });
        controlsX.start({
          x: "0",
          duration: 1,
          opacity: 1,
          ease: "easeIn",
        });
      }
      setPrevScrollbar(currentScrollbar);
    };
    window.addEventListener("scroll", handleScroll);

    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else document.body.style.overflow = "unset";
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (isMenuOpen) {
        document.body.style.overflow = "unset";
      }
    };
  }, [isMenuOpen, visible, controlsX, controlsY, prevScrollbar]);
  const { currentUser, isLogin, logout } = useLoginContent();
  const handleLogout = () => {
    setIsLoginOpen(false);
    logout();
  };
  const popoverContent = [
    {
      title: "User Information",
      path: "/user-information",
    },
    {
      title: "Logout",
      eventProps: handleLogout,
    },
    {
      title: "User Information",
      path: "/user-information",
    },
  ];

  return (
    <div className="relative z-50">
      <motion.div
        className={`w-full flex justify-between items-center h-[82px] ${
          prevScrollbar !== 0 ? "bg-white/50" : "bg-transparent"
        }`}
        animate={controlsY}
      >
        <AnimatePresence>
          <motion.div
            key="logo"
            className="flex justify-center items-center cursor-pointer "
            onClick={() => navigate("/")}
            animate={controlsY}
          >
            <img
              src={logoBlack}
              className="w-10 sm:w-16 md:w-28  mix-blend-multiply hover:mix-blend-multiply bg-transparent will-change-transform filter-none"
            />
            <div className="font-merriweather">
              <h1 className="text-4xl font-bold">LUC NGAN</h1>
              <h2 className="text-2xl font-bold text-center">COLLEGE</h2>
            </div>
          </motion.div>
          <motion.div
            key="menu"
            className=" max-w-[40%] text-xl absolute right-0 bg-black rounded-bl-2xl flex items-center justify-center gap-x-10 py-7 px-7
            after:contents-[''] after:w-[70%] after:h-[1px] after:bg-slate-200 after:absolute after:top-0 after:left-[15%] text-white"
            animate={controlsX}
          >
            <motion.div className="text-center cursor-pointer  flex items-center h-[40px] -mr-8 ">
              <div className="flex hover:motion-preset-confetti place-items-center">
                <UserOutlined className=" mr-1 text-[25px]" />
                {isLogin ? (
                  <CustomPopover
                    icon={
                      <DownOutlined className="text-[15px] text-gray-400" />
                    }
                    menu={popoverContent}
                  />
                ) : (
                  <a onClick={() => setIsLoginOpen(true)}>Login</a>
                )}
              </div>
            </motion.div>
            <div className="w-[1px] h-[35px] bg-gray-50 justify-self-center ml-5" />
            <div
              className="text-center cursor-pointer pr-4 hover:motion-preset-confetti"
              onClick={() => setIsMenuOpen(true)}
            >
              <MenuOutlined className="text-white mr-3" />
              <p className="inline-block text-white ">Menu</p>
            </div>
          </motion.div>
        </AnimatePresence>
      </motion.div>
      <AnimatePresence>
        {!isLogin && isLoginOpen && <Login onClose={setIsLoginOpen} />}
      </AnimatePresence>

      <AnimatePresence>
        {isMenuOpen && <Menu onClose={setIsMenuOpen} />}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
