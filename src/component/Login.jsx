// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import ParticleBg from "./ParticleBg";

// import ilustrasi from "../assets/image/ilustrasi.png";

import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <ParticleBg />

        {/* Login Container */}
        <motion.div
          initial={{ y: "-100vh" }}
          animate={{ y: 0 }}
          transition={{ type: "spring", stiffness: 50 }}
          className="relative bg-white p-8 rounded-2xl shadow-lg z-10 w-[320px] md:w-[420px] lg:w-[500px] h-[620px]"
        >
          <h1 className="flex items-center gap-2 text-2xl font-bold text-[#204842] mb-2">
            <Link to="/">Sakoo</Link>
          </h1>
          <h2 className="text-xl font-bold text-black mb-1">
            Yuk Cek Finansial kamu!
          </h2>
          <p className="text-sm text-gray-600 mb-5">
            Baru di sini?{" "}
            <Link to="/register" className="text-[#0E4B40] font-medium">
              Buat akun
            </Link>
          </p>

          <form onSubmit={(e) => console.log(e)}>
            {/* Label Email */}
            <div className="mb-3 text-left">
              <label
                htmlFor="email"
                className="block mb-1 text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="Email"
                required
                className="w-full p-3 border border-gray-300 rounded-[10px] focus:outline-none focus:ring-2 focus:ring-[#0E4B40]"
              />
            </div>

            {/* Label Password */}
            <div className="mb-1 text-left">
              <label
                htmlFor="password"
                className="block mb-1 text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                id="password"
                type="password"
                placeholder="Password"
                required
                className="w-full p-3 border border-gray-300 rounded-[10px] focus:outline-none focus:ring-2 focus:ring-[#0E4B40]"
              />
            </div>

            {/* Lupa Password */}
            <div className="text-right mb-5">
              <a href="#" className="text-sm text-[#0E4B40] font-medium">
                Lupa password?
              </a>
            </div>

            {/* Tombol Masuk */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              initial={{ x: "-100vw" }}
              animate={{ x: 0 }}
              transition={{ type: "spring", stiffness: 50 }}
              type="submit"
              className="w-full bg-[#BBF49D] text-[#204842] p-3 rounded-full font-semibold cursor-pointer"
            >
              Masuk
            </motion.button>
          </form>
        </motion.div>
      </div>
    </>
  );
};

export default Login;
