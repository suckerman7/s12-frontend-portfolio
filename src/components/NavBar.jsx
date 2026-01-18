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
      <div className="flex justify-end items-center px-8 py-2 gap-4 text-[15px]">
        <button
          onClick={() => dispatch(toggleTheme())}
          data-testid="theme-toggle"
          aria-label="Toggle theme"
          className={`
            relative inline-flex items-center
            w-12 h-6 rounded-full
            transition-colors
            ${theme === "dark" ? "bg-gray-700" : "bg-indigo-600"}
          `}
        >
          <span
            className={`
              absolute top-0.5 left-0.5
              w-5 h-5 rounded-full bg-white shadow
              flex items-center justify-center
              transition-transform
              ${theme === "dark" ? "translate-x-6" : ""}
            `}
          >
          <FontAwesomeIcon
            icon={theme === "dark" ? faMoon : faSun}
            className={theme === "dark" ? "text-gray-700" : "text-yellow-400"}
            size="xs"
          />
          </span>
        </button>

        <span className="font-semibold tracking-wide text-[#777777] dark:text-[#D9D9D9]">
            {theme === "dark" ? "LIGHT MODE" : "DARK MODE"}
        </span>

        <p className='text-[#777777] dark:text-[#D9D9D9]'> | </p>

        <button
          onClick={() =>
            dispatch(setLanguage(language === "en" ? "tr" : "en"))
          }
          data-testid="language-toggle"
          className="font-medium text-gray-600 hover:text-indigo-700"
          aria-label="Change the language"
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