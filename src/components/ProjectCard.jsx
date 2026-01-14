import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export default function ProjectCard({ title, description, techs, image, github, site }) {
    return (
        <div>
            <img
                src={image}
                alt={title} 
                className='rounded-lg mb-4'
            />
            <h3 className='text-indigo-700 text-3xl font-semibold mb-2 dark:text-[#CFCBFF]'>{title}</h3>
            <p className='text-gray-600 text-sm mb-4 dark:text-white'>
                {description}
            </p>

            <div className='flex gap-3 text-sm flex-wrap'>
                {techs.map((tech) => (
                    <span
                        key={tech}
                        className='text-indigo-800 border px-2 py-1 rounded dark:bg-[#383838] dark:text-[#8F88FF]'
                    >
                        {tech}
                    </span>
                ))}
            </div>

            <div className='flex justify-between items-center mt-4 text-sm'>
                <a
                    href={github}
                    className='text-indigo-800 hover:underline flex items-center gap-2 dark:text-[#E1E1FF]'
                >
                    <FontAwesomeIcon icon={faGithub} />
                    Github
                </a>

                <a
                    href={site}
                    className='text-indigo-800 hover:underline dark:text-[#E1E1FF]'
                >
                    View Site
                </a>
            </div>
        </div>
    );
}