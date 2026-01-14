import heroImg from '../images/mert_yuksel.png';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

import useTranslation from '../hooks/useTranslation';

export default function Hero() {

    const translation = useTranslation();

    return (
        <section className='grid grid-cols-1 md:grid-cols-2 gap-10 px-8 py-20 items-center'>
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
                    <button className='bg-indigo-800 text-white px-6 py-3 rounded-md dark:bg-[#E1E1FF] dark:text-black'>
                        {translation.hero.hire}
                    </button>
                    <button className='border px-6 py-3 rounded-md text-indigo-800 leading-7 font-medium flex items-center gap-2 dark:text-[#BAB2E7] dark:bg-[#383838]'>
                        <FontAwesomeIcon className='text-indigo-800 text-2xl dark:text-[#BAB2E7] dark:bg-[#383838]' icon={faGithub} />
                        Github
                    </button>
                    <button className='border px-6 py-3 rounded-md text-indigo-800 leading-7 font-medium flex items-center gap-2 dark:text-[#BAB2E7] dark:bg-[#383838]'>
                        <FontAwesomeIcon className='text-indigo-800 text-2xl dark:text-[#BAB2E7] dark:bg-[#383838]' icon={faLinkedin} />
                        LinkedIn
                    </button>
                </div>
            </div>

            <div className='rounded-xl overflow-hidden shadow'>
                <img
                    src={heroImg}
                    alt='mert yuksel'
                    className='w-full h-full object-cover'
                />
            </div>
        </section>
    );
}