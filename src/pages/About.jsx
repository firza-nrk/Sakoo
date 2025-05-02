import { motion } from "framer-motion";

import HeroLandingPage from "../assets/image/hero-landingpage-image.png";

import Navbar from "../component/Navbar";

import ParticleBg from "../component/ParticleBg";

function About() {
  return (
    <>
      <Navbar />
      <div className="w-full overflow-x-hidden">
        {/* Hero Section */}
        <section className="text-white py-20 px-6 lg:px-20 lg:h-[100vh] text-center">
          <ParticleBg />
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl lg:text-5xl font-bold text-yellow-400 mb-4"
          >
            Tentang Sakoo
          </motion.h1>
          <p className="text-lg lg:text-xl mb-8">
            Solusi Aman Kelola dan Optimalkan Keuangan
          </p>
          <motion.img
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            src={HeroLandingPage}
            alt="Hero"
            className="mx-auto sm:w-[135px] md:w-[335px] lg:w-[535px]"
          />
        </section>

        {/* Section: Kenapa Sakoo Hadir */}
        <section className="bg-[#FFFF] py-12 px-6 text-center">
          <h2 className="text-2xl lg:text-4xl font-bold text-[#F7B205] mb-4">
            Kenapa Sakoo Hadir? ✨
          </h2>
          <p className="text-gray-800 max-w-3xl mx-auto">
            Mengatur keuangan itu penting, tapi sering terasa rumit. Sakoo hadir
            untuk menyederhanakan langkahmu menuju keuangan yang lebih sehat...
          </p>
        </section>

        {/* Section: Misi Sakoo */}
        <section className="text-white py-12 px-6 text-center">
          <h2 className="text-2xl lg:text-4xl font-bold text-[#F7B205] mb-4">
            Misi Sakoo
          </h2>
          <p className="max-w-3xl mx-auto">
            Membantu pengguna mengevaluasi kondisi keuangan mereka secara
            sederhana...
          </p>
        </section>

        {/* Section: Apa yang Sakoo Bantu */}
        <section className="bg-[#FFFF] py-12 px-6 text-center">
          <h2 className="text-2xl lg:text-4xl font-bold text-[#F7B205] mb-4">
            Apa yang Sakoo Bantu?
          </h2>
          <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto text-left">
            <ul className="list-disc ml-5">
              <li>✅ Mengecek kesehatan finansial secara instan.</li>
              <li>✅ Mengetahui kekuatan dan kelemahan keuanganmu.</li>
            </ul>
            <ul className="list-disc ml-5">
              <li>✅ Mendapatkan tips memperbaiki kondisi keuangan.</li>
              <li>✅ Menetapkan tujuan keuangan yang terukur.</li>
            </ul>
          </div>
        </section>

        {/* Section: Apa yang Bikin Sakoo Beda */}
        <section className="text-white py-12 px-6 text-center">
          <h2 className="text-2xl lg:text-4xl font-bold text-[#F7B205] mb-4">
            Apa yang Bikin Sakoo Beda?
          </h2>
          <p className="max-w-3xl mx-auto">
            Mudah dipahami, personalisasi, cepat, praktis, dan cocok untuk semua
            kalangan.
          </p>
        </section>

        {/* Section: Meet The Team */}
        <section className="bg-[#FFFF] py-12 px-6 text-center">
          <h2 className="text-2xl lg:text-4xl font-bold text-[#F7B205] mb-8">
            Meet The Team / Customer Support ✨
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="bg-[#1d5047] text-white p-4 rounded-xl">
              <p className="font-bold">M. Dzafadhlan F Muzzki</p>
              <p>MC222D5Y1132</p>
              <p>Machine Learning</p>
            </div>
            <div className="bg-[#1d5047] text-white p-4 rounded-xl">
              <p className="font-bold">Mazdalifah Hanuranda</p>
              <p>MC354D5X2056</p>
              <p>Machine Learning</p>
            </div>
            <div className="bg-[#1d5047] text-white p-4 rounded-xl">
              <p className="font-bold">Putri Rifa Mutia</p>
              <p>MC269D5X0767</p>
              <p>Front End & Back End</p>
            </div>
            <div className="bg-[#1d5047] text-white p-4 rounded-xl">
              <p className="font-bold">Ahmad Gozes Sanusi Sulsah</p>
              <p>FC222D5Y1666</p>
              <p>Front End & Back End</p>
            </div>
            <div className="bg-[#1d5047] text-white p-4 rounded-xl">
              <p className="font-bold">Hisyam Arief Zulfani</p>
              <p>FC222D5Y1666</p>
              <p>Front End & Back End</p>
            </div>
            <div className="bg-[#1d5047] text-white p-4 rounded-xl">
              <p className="font-bold">Fitri Rahmatullah Arza</p>
              <p>FC127D5X0078</p>
              <p>Front End & Back End</p>
            </div>
          </div>
        </section>

        {/* Section: Penutup */}
        <section className="bg-[#1d5047] text-white text-center py-10 px-6">
          <h2 className="text-2xl lg:text-3xl font-bold text-[#F7B205] mb-4">
            Sakoo — Teman Setia Finansialmu!
            <br />
            Cek, rencanakan, dan wujudkan masa depan
            <br />
            keuangan yang lebih cerah bersama Sakoo.
          </h2>
          <p className="max-w-2xl mx-auto"></p>
        </section>

        {/* Footer */}
        <footer className="text-center text-sm text-gray-200 bg-[#1d5047] py-4">
          © 2025 Sakoo. All rights reserved.
          <br />
          Sakoo — Membantu Kamu Mengelola Keuangan dengan Mudah
        </footer>
      </div>
    </>
  );
}

export default About;
