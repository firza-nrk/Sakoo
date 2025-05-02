import { motion } from "motion/react";
import ParticleBg from "../component/ParticleBg";

import ilustrasi from "../assets/image/ilustrasi.png";

import { Link } from "react-router-dom";

const Register = () => {
  return (
    <>
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <ParticleBg />

        {/* Register Container */}
        <motion.div
          initial={{ y: "-100vh" }}
          animate={{ y: 0 }}
          transition={{ type: "spring", stiffness: 50 }}
          className="relative bg-white p-8 rounded-2xl shadow-lg z-10 w-[320px] md:w-[420px] lg:w-[500px] h-[620px] "
        >
          <h1 className="text-2xl font-bold text-[#F7B205] mb-2">
            <Link to="/">Sakoo</Link>
          </h1>
          <h2 className="w-[80%] text-xl font-bold text-black mb-1">
            Daftar! Mulai cek kesehatan finansialmu
          </h2>
          <p className="text-sm text-gray-600 mb-10">
            Sudah punya akun?{" "}
            <Link to="/login" className="text-[#0E4B40] font-medium">
              Masuk
            </Link>
          </p>

          <form>
            <input
              type="text"
              placeholder="Nama"
              required
              className="w-full p-3 mb-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#0E4B40]"
            />
            <input
              type="email"
              placeholder="Email"
              required
              className="w-full p-3 mb-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#0E4B40]"
            />
            <input
              type="password"
              placeholder="Password"
              required
              className="w-full p-3 mb-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#0E4B40]"
            />
            <input
              type="password"
              placeholder="Konfirmasi Password"
              required
              className="w-full p-3 mb-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#0E4B40]"
            />

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              initial={{ x: "-100vw" }}
              animate={{ x: 0 }}
              transition={{ type: "spring", stiffness: 50 }}
              type="submit"
              className="w-full bg-[#0E8F68] hover:bg-[#0c7b5c] text-white p-3 mt-15 rounded-full font-semibold cursor-pointer"
            >
              Daftar
            </motion.button>
          </form>
        </motion.div>
      </div>

      {/* Element Container */}
      <motion.img
        src={ilustrasi}
        alt="Background"
        initial={{ x: "-100vw" }}
        animate={{ x: 0 }}
        transition={{ duration: 2 }}
        className="absolute top-0 left-0 w-full h-full z-0 scale-100 sm:scale-65 md:scale-85 lg:scale-75 xl:scale-85"
      />
    </>
  );
};

export default Register;
