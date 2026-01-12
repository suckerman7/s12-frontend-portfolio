import heroImg from '../images/mert_yuksel.png';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function Hero() {
    return (
        <section className='grid grid-cols-1 md:grid-cols-2 gap-10 px-8 py-20 items-center'>
            <div>
                <div className="flex items-center gap-4 mb-2">
                    <span className="w-25 h-0.5 bg-indigo-800"></span>
                    <span className="text-indigo-700 font-medium leading-7 text-xl">Mert Yüksel</span>
                </div>

                <h1 className='text-7xl text-gray-800 font-bold leading-tight mb-6'>
                    An aspiring developer in rise <br /> is ready for everything!
                </h1>

                <p className='text-lg font-normal text-gray-500 mb-8'>
                    Hi, my name is Mert. I'm a full-stack developer. If you are looking for
                    a developer who can do great things both in frontend, backend or both;
                    you can count on me to do it.
                </p>

                <div className='flex gap-4'>
                    <button className='bg-indigo-800 text-white px-6 py-3 rounded-md '>
                        Hire me
                    </button>
                    <button className='border px-6 py-3 rounded-md text-indigo-800 leading-7 font-medium flex items-center gap-2'>
                        <FontAwesomeIcon className='text-indigo-800 text-2xl' icon={faGithub} />
                        Github
                    </button>
                    <button className='border px-6 py-3 rounded-md text-indigo-800 leading-7 font-medium flex items-center gap-2'>
                        <FontAwesomeIcon className='text-indigo-800 text-2xl' icon={faLinkedin} />
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