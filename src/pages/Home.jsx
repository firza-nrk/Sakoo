import { motion } from "motion/react";
import { Link } from "react-router-dom";
import ParticleBg from "../component/ParticleBg";
import heroImage from "../assets/image/hero-image.png";
import Navbar from "../component/Navbar";

function Home() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen flex flex-col lg:h-[100vh] md:flex-row items-center justify-center p-8 pt-16 overflow-hidden">
        <ParticleBg />
        {/* Gambar */}
        <motion.div
          initial={{ x: "-100vw" }}
          animate={{ x: 0 }}
          transition={{
            type: "spring",
            stiffness: 50,
            duration: 3,
            delay: 0.3,
          }}
          className="w-full md:w-1/2 flex mb-6 md:mb-0 lg:w-[668px] lg:h-[668px]"
        >
          <img
            src={heroImage}
            alt="Keuangan"
            className="w-full h-full object-cover "
          />
        </motion.div>

        {/* Konten */}
        <motion.div className="w-full md:w-1/2 text-white px-4 md:px-8">
          <motion.h1
            initial={{ y: "-100vh" }}
            animate={{ y: 0 }}
            transition={{ duration: 3, delay: 0.3 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6x font-bold text-[#F7B205] mb-4"
          >
            Selamat Datang di Sakoo! <br />
            <span className="text-yellow-400">
              Yuk mulai langkah baru untuk keuangan yang lebih sehat
            </span>
          </motion.h1>
          <motion.p
            initial={{ y: "200vh" }}
            animate={{ y: 0 }}
            transition={{ duration: 2, delay: 0.3 }}
            className="text-gray-300 mb-6 text-base sm:text-lg md:text-xl lg:text-2xl"
          >
            Atur keuangan jadi lebih mudah! Cukup beberapa langkah bareng Sakoo
            untuk tahu kondisi finansialmu dan solusi yang pas.
          </motion.p>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 5 }}
            initial={{ y: "200vh" }}
            animate={{ y: 0 }}
            transition={{ duration: 2, delay: 0.3 }}
            className="bg-[#F7B205] text-black font-semibold w-[200px] h-[40px] py-2 px-4 rounded shadow mx-auto block cursor-pointer"
          >
            <Link to="/login">Mulai Sekarang</Link>
          </motion.button>
        </motion.div>
      </div>
    </>
  );
}

export default Home;
