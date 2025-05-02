import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Cek Keuangan", path: "/cek-keuangan" },
    { name: "About Us", path: "/about" },
  ];

  return (
    <nav className="bg-white w-full px-6 py-3 shadow-md fixed top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-extrabold text-[#F7B205] flex items-center"
        >
          Sakoo
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6 font-semibold">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="hover:text-[#313AB6] transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Profile Icon */}
        <div className="hidden md:block">
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAgxJREFUSEvFloFNAzEMRdNJgEmATWASYBLoJMAksAn0ifunX/fnLj0JNVJVKef429/fiXftQmt3Idy2Bfi6tXbXWuP/ewqc/49zkhgFBuShtfa04FzgLxZQ13wE+HkFsDongP1hk3ObgMnydaJVDqDz80Dz25QVNiyov51YkS0B3Pey72WMwy8LF8DHAQo5RzkoC6sL3gN+t0ypWaVNjgEiKBdW1QPgN5XzBAy9clxBE/34TIy4NigNjM2rAjvFOKNGvn5WVO019SDJGuCZmQrs2eLEKfQMYIIsWN5miSFp5SjrCowRkZ5Qc1Ct6p5qpoATS/GcA9MSGLGgRRmJXQWVxOZM1WRghO+smUU3cgNUqOuwAic2FFRiw3UzJ9QDTmpPNQao7tfWc+CZLQdwByljMldmSdyxXydDdUPM2GtcFS0gbLiZ+PeFqMgmvVBewggcKen0LcD89CJVPfixyKRT7Q2f2gJnAuRB8AWwHo8aa1R8FZFH53T3rsoKUh8FL9/iBeJ0Syz1pWK/Uus1d3AX45Fg19qGKDXqkF26PNivL5JEpoBOziXgpReoPhpL9dS34WdRGXB9asLoXaMV2GvKt25vL81cgFZwHGmYg04FRq9ehdHnZABQpGvD3sh0mVq9p4XZdg1YhiMBaLrUINi5e/62R4E9AF0k0oLa618G+sXot3w8N+MtGPHML602mh+PBzzCAAAAAElFTkSuQmCC" />
        </div>

        {/* Hamburger Button */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
          {isOpen ? (
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAPFJREFUSEvtlNENwjAMRK+bwCYwCTAJowCTwCZlFHpSLEUlcc6tRPmIP1vXrz77PGCjGDbiooN/pnyX+q+k3gG4AngAeDX+7ADgNuXuWx0oM35OQBZ8A7g4cOYwl8FcF66Az6kLK1iC51DmHVvqKGAW8uBhKAuq4Bqcz01eqVObfQRcgnPxLJry5gsXBc/hi6BRqQ0yn2lr24vOinY8h1rRMDwCLm0vZ8yD4VltVceeZRSff8GVjhWfhuEKeARgtvEsk8Pv6bxWT7YCJpRHwrvTBiD8lE5mFbrUTm5B9aXSsVorlNfBIbnWJHep16gX+vYDg2Y2HyWbDqIAAAAASUVORK5CYII=" />
          ) : (
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAHJJREFUSEvtlcENwDAIA4HJOlpH62RQKVI/Tfpzah7OAD7lYogb6TiJawL/Zl6qh+qIOJHOM3PKW6p290KCq2ri9AIjb/uVpVY/Zg6w7uud16tctHEyM45q8Psu4zROQwutXDQw7VtUq3cY0BzvsNprZd7OaSIf43X8KwAAAABJRU5ErkJggg==" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white px-6 py-4 shadow-inner"
          >
            <div className="flex flex-col gap-4 font-semibold">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="hover:text-[#313AB6]"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <img
                className="w-10 h-auto"
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAktJREFUSEvFVttx20AMPFwjkSux0olSieRKLFcSuZKoEiCzZ+AEgrgjlZmM+cMPglhgsXhQ+aaHvgm3/AvwoZRyrLUemPmugeN9eyaJvcCHWutJRM4T53ciujHzWynFAhqabwLXWi8bgNE5Avhg5suMgRnwgYjeQatzcCOiT2a+alagHQ+ofxWRk7O9i8jPUfYjYID+8YAi8msHhSjJ2QUwBE+Biei3ZUpEbwltLTMVGETlhRX1APCXSPsKuNb6bhEnoBn98HmLjHhtENGVmcFYfyKwpxjOUKOHMZHMVB1q6oNE1gDuzCyAfbbqpBuGDEA/BAa6e5sNGGpaiVkvgFVQiHRNzaPuq5q5gDOWTC+L/zzwUUVVlJaWkT0uqJXYAlOxfCdtS/hF6RqL3sgbQIWL6bPBBuhET2cK7rrxCY2AM7X3Caa1bEMkqX2cWB3Ya6ADeAfad6t5a1kPlJ32qwqrdcMoY1/jXosAAhssCj9GrY+xHLIN5UuIlmra8ZSmlAyyw2w+6loE2HAbjZiMwLYUVm2hATRAEXkNir8z86dl47+NFB8HSBdQGCCjURkJiUuhl286QNASbiuZWOKmAq2RWl/zDu7FGAW71TZXEWmnjqoz21T4FDeSiWz4X7YWZxtosTQiz76e7tu+tag/ABwz1i6MdIwmiu811W/j3p6suRW4jkQ75kBnCwwbqpTyIzl9VgdAn/0T4Kx2G+ZfnwdXy+LfzSvTqN953uK6tENwGuReYHPSr0ql2I76/3bQ76L4GaNnM37G99T2L14Yqy5IQHCTAAAAAElFTkSuQmCC"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
