import { CloseOutlined } from "@ant-design/icons";
import { motion } from "motion/react";
import { appearAnimation } from "../../utils/motionType";
import { useLogin } from "../../utils/useLogin";
const Login = ({ onClose }) => {
  const { isLoading, error, response, login } = useLogin();

  const handleSubmit = async (element) => {
    element.preventDefault();
    const formData = new FormData(element.currentTarget);
    const username = formData.get("username");
    const password = formData.get("password");
    await login(username, password);
  };

  return (
    <motion.div
      initial={appearAnimation.hidden}
      animate={appearAnimation.show}
      exit={appearAnimation.exit}
      className="fixed inset-0  transition-all bg-black bg-opacity-50 ease-in-out"
    >
      <div className="absolute w-[35%] z-60 text-black h-[60%] bg-[#f5f5f7] inset-0 m-auto  border-2 rounded-xl border-gray-500">
        <div className="p-3">
          <div className="flex justify-between items-center text-2xl font-bold mb-8">
            <h2 className="">Login</h2>
            <CloseOutlined onClick={() => onClose(false)} />
          </div>

          <div className="w-[70%] m-auto h-[2px] bg-black"></div>
          <form
            className="flex flex-col mt-8 p-5 mb-10"
            onSubmit={handleSubmit}
            method="POST"
          >
            <div className="flex items-center space-x-2 text-xl">
              <label htmlFor="username" className="w-[30%] mr-[-15px]">
                Username
              </label>
              <input
                className="flex-1 p-1 border border-gray-300 rounded-lg"
                type="text"
                name="username"
                placeholder="Gmail or number card"
              />
            </div>
            <div className="flex items-center space-x-2 text-xl mt-5">
              <label htmlFor="password" className="w-[30%] mr-[-15px]">
                Password
              </label>
              <input
                className="flex-1 p-1 border border-gray-300 rounded-lg"
                type="password"
                name="password"
                placeholder="Password"
              />
            </div>
            <div className="flex justify-between mt-10 gap-3">
              <button
                type="button"
                onClick={() => onClose(false)}
                className="border border-gray-300 text-black p-3  mx-auto  w-[40%] rounded-2xl hover:bg-black hover:text-white"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={isLoading}
                className="bg-black text-white p-3  mx-auto w-[40%] rounded-2xl hover:bg-slate-50 hover:border hover:border-gray-300 hover:text-black"
              >
                {isLoading ? "Login...." : "Login"}
              </button>
            </div>
            <div className="text-xl mt-9">
              <div className="space-x-2 mb-1 ">
                <input
                  type="checkbox"
                  id="rememberLogin"
                  value="rememberLogin"
                  className="w-4 h-4 text-white bg-white border-gray-300 rounded focus:ring-black focus:ring-2 hover:border-black hover:bg-gray-100 checked:bg-black checked:border-black"
                />
                <label htmlFor="remenberLogin">Save login information</label>
              </div>
              <div>
                <p>
                  If you forget the password{" "}
                  <a href="/" className="font-bold">
                    please click here
                  </a>
                </p>
              </div>
              <p className="text-red-500">
                {error ? "Login request is failed" : ""}{" "}
              </p>
              <p className="text-red-500">
                {response ? `${response.message}` : ""}{" "}
              </p>
            </div>
          </form>
        </div>
      </div>
    </motion.div>
  );
};
export default Login;
