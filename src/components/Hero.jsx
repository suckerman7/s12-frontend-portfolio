import heroImg from '../images/mert_yuksel.png';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

import {useNavigate} from 'react-router-dom';
import { toast } from "react-toastify";

import useTranslation from '../hooks/useTranslation';
import { delayedRedirect } from '../utils/delayedRedirect';

export default function Hero() {

    const navigate = useNavigate();
    const translation = useTranslation();

    const handleHire = () => {
        toast.success(translation.toast.hire);
        navigate("/contact");
    }

    return (
        <section className='grid grid-cols-1 md:grid-cols-[1.2fr_0.8fr] gap-10 px-8 py-20 items-center'>
            <div>
                <div className="flex items-center gap-4 mb-2">
                    <span className="w-24 h-0.5 bg-indigo-800"></span>
                    <span className="text-indigo-700 font-medium leading-7 text-xl dark:text-[#B7AAFF]">Mert Yüksel</span>
                </div>

                <h1 className='text-7xl text-gray-800 font-bold leading-tight mb-6 dark:text-[#AEBCCF]'>
                    {translation.hero.title} <br /> {translation.hero.subtitle}
                </h1>

                <p className='text-lg font-normal text-gray-500 mb-8 dark:text-white'>
                    {translation.hero.description}
                </p>

                <div className='flex gap-4'>
                    <button onClick={handleHire} className='bg-indigo-800 text-white px-6 py-3 rounded-md transition-all duration-200 hover:bg-indigo-700 hover:scale-[1.02] dark:bg-[#E1E1FF] dark:text-black dark:hover:bg-[#C7C4FF]'>
                        {translation.hero.hire}
                    </button>
                    <button onClick={() => delayedRedirect("https://github.com/suckerman7", translation.toast.githubprofile)} className='border px-6 py-3 rounded-md text-indigo-800 leading-7 font-medium flex items-center gap-2 transition-all duration-200 hover:bg-indigo-50 hover:scale-[1.02] dark:text-[#BAB2E7] dark:bg-[#383838] dark:hover:bg-[#4A4A4A]'>
                        <FontAwesomeIcon className='text-indigo-800 text-2xl dark:text-[#BAB2E7] dark:bg-[#383838]' icon={faGithub} />
                        Github
                    </button>
                    <button onClick={() => delayedRedirect("https://www.linkedin.com/in/mert-y%C3%BCksel-904396311/", translation.toast.linkedinprofile)} className='border px-6 py-3 rounded-md text-indigo-800 leading-7 font-medium flex items-center gap-2 transition-all duration-200 hover:bg-indigo-50 hover:scale-[1.02] dark:text-[#BAB2E7] dark:bg-[#383838] dark:hover:bg-[#4A4A4A]'>
                        <FontAwesomeIcon className='text-indigo-800 text-2xl dark:text-[#BAB2E7] dark:bg-[#383838]' icon={faLinkedin} />
                        LinkedIn
                    </button>
                </div>
            </div>

            <div className='flex justify-center'>
                <div className="w-80 h-110 rounded-2xl overflow-hidden shadow-lg">
                    <img
                        src={heroImg} 
                        alt="mert yuksel"
                        className="w-full h-full object-cover object-top hover:scale-[1.03] transition-transform duration-300"
                    />
                </div>
            </div>
        </section>
    );
}