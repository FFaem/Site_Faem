import React from "react";
import { BsSunFill } from "react-icons/bs";
import { FaMoon } from "react-icons/fa";

interface LogoProps {
  darkMode: boolean;
}

const Logo: React.FC<LogoProps> = ({ darkMode }) => {
  const logoSrc = darkMode ? '/logos/logo branca.png' : '/logos/logo preto.png';

  return (
    <div className="relative w-16 h-8 flex items-center bg-grey-500 cursor-pointer rounded-full p-1">
      <img alt="Logo" className="h-12" src={logoSrc} />
      <div
        className="absolute bg-white dark:bg-medium w-6 h-6 rounded-full shadow-md transform transition-transform duration-300"
        style={darkMode ? { left: "2px" } : { right: "2px" }}
      ></div>
      <FaMoon className="ml-auto text-yellow-400" size={18} />
      <BsSunFill className="ml-auto text-yellow-400" size={18} />
    </div>
  );
};

export default Logo;
