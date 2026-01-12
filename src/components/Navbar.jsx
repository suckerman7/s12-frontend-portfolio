import {useState, useEffect} from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

export default function NavBar() {

    const [darkMode, setDarkMode] = useState(false);
    const [lang, setLang] = useState("EN");

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [darkMode]);

    return (
        <header>
            <div className='flex justify-end items-center px-8 py-2 gap-4 text-sm'>
                <button
                    onClick={() => setDarkMode(!darkMode)}
                    className='w-9 h-9 flex items-center justify-center rounded-full border dark:border-gray-600'
                >
                    <FontAwesomeIcon icon={darkMode ? faSun : faMoon} />
                </button>

                <button
                    onClick={() => setLang(lang === "EN" ? "TR" : "EN")}
                    className='font-medium'
                >
                    {lang}
                </button>
            </div>

            <nav className='flex items-center justify-between px-8 py-6'>
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#EEEBFF]">
                    <span className="text-[#7B61FF] font-bold text-lg rotate-29">
                        A
                    </span>
                </div>

                <div className='flex items-center gap-6'>
                    <a href='#skillTable' className='text-gray-600 hover:text-black'>Skills</a>
                    <a href='#projects' className='text-gray-600 hover:text-black'>Projects</a>
                    <button className='border px-4 py-2 rounded-md text-indigo-800'>
                        Hire me
                    </button>
                </div>
            </nav>
    </header>
    );
}