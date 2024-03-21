import { useEffect, useState } from "react";
import { FaMoon } from "react-icons/fa";
import { BsSunFill } from "react-icons/bs";

const Theme: React.FC = () => {
  // Inicia o site com o tema claro
  const [darkMode, setDarkMode] = useState<boolean>(false);

  useEffect(() => {
    // Obtém o tema do localStorage
    const theme = localStorage.getItem("theme");
    // Aplica o tema escuro se for a preferência salva
    if (theme === "dark") {
      setDarkMode(true);
    } else {
      setDarkMode(false);
    }
  }, []);

  useEffect(() => {
    // Aplica a classe do tema escuro ao <html> e salva a preferência
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <div className="relative w-16 h-8 flex items-center bg-grey-500 dark:bg-white-900 cursor-pointer rounded-full p-1" onClick={() => setDarkMode(!darkMode)}>
      <FaMoon className="text-blue-500" size={18} />
      <div
        className="absolute bg-white dark:bg-medium w-6 h-6 rounded-full shadow-md transform transition-transform duration-300"
        style={darkMode ? { right: "2px" } : { left: "2px" }}
      ></div>
      <BsSunFill className="ml-auto text-yellow-400" size={18} />
    </div>
  );
};

export default Theme;
