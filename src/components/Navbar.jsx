import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { useSelector, useDispatch } from "react-redux";
import { toggleTheme, setLanguage } from "../store/uiSlice";

import {useNavigate} from 'react-router-dom';
import { toast } from "react-toastify";

import useTranslation from '../hooks/useTranslation';

export default function NavBar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { language, theme } = useSelector((state) => state.ui);

  const translation = useTranslation();

  const handleHire = () => {
    toast.success(translation.toast.hire);
    navigate("/contact");
  }

  return (
    <header>
      <div className="flex justify-end items-center px-8 py-2 gap-4 text-sm">
        <button
          onClick={() => dispatch(toggleTheme())}
          className="w-9 h-9 flex items-center justify-center rounded-full border dark:border-gray-600"
        >
          <FontAwesomeIcon icon={theme === "dark" ? faSun : faMoon} className="text-gray-700 dark:text-yellow-300" />
        </button>

        <button
          onClick={() =>
            dispatch(setLanguage(language === "en" ? "tr" : "en"))
          }
          className="font-medium text-gray-600 hover:text-indigo-700"
        >
          {translation.navbar.switchLanguages}
        </button>
      </div>

      <nav className="flex items-center justify-between px-8 py-6">
        <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#EEEBFF] dark:bg-[#4731D3]">
          <span className="text-[#7B61FF] font-bold text-lg rotate-15 dark:text-[#8F88FF]">
            MY
          </span>
        </div>

        <div className="flex items-center gap-6">
          <a href="#skillTable" className="text-gray-600 hover:text-black dark:text-[#6B7280]">
            {translation.navbar.skills}
          </a>
          <a href="#projects" className="text-gray-600 hover:text-black dark:text-[#6B7280]">
            {translation.navbar.projects}
          </a>
          <button onClick={handleHire} className="border px-4 py-2 rounded-md text-indigo-800 transition-all duration-200 hover:bg-indigo-800 hover:text-white dark:bg-white dark:text-[#3730A3] dark:hover:bg-[#E1E1FF]">
            {translation.navbar.hire}
          </button>
        </div>
      </nav>
    </header>
  );
}