import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export default function ProjectCard({ title, description, techs }) {
    return (
        <div>
            <img
                src='https://via.placeholder.com/350x200'
                alt={title} 
                className='rounded-lg mb-4'
            />
            <h3 className='text-indigo-700 text-3xl font-semibold mb-2'>{title}</h3>
            <p className='text-gray-600 text-sm mb-4'>
                {description}
            </p>

            <div className='flex gap-3 text-sm flex-wrap'>
                {techs.map((tech) => (
                    <span
                        key={tech}
                        className='text-indigo-800 border px-2 py-1 rounded'
                    >
                        {tech}
                    </span>
                ))}
            </div>

            <div className='flex justify-between items-center mt-4 text-sm'>
                <a
                    href='#'
                    className='text-indigo-800 hover:underline flex items-center gap-2'
                >
                    <FontAwesomeIcon icon={faGithub} />
                    Github
                </a>

                <a
                    href='#'
                    className='text-indigo-800 hover:underline'
                >
                    View Site
                </a>
            </div>
        </div>
    );
}