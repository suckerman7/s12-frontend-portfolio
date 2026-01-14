import useTranslation from '../hooks/useTranslation';
import ProjectCard from "./ProjectCard";

import projectImg from '../images/sprint4project.png';
import projectImg2 from '../images/sprint7project.png';
import projectImg3 from '../images/sprint8project.png';

const images = [projectImg, projectImg2, projectImg3];

export default function Projects() {

  const { projects } = useTranslation();

    return (
        <section id='projects' className='px-8 py-20'>
            <h2 className='text-5xl font-semibold mb-10 dark:text-[#AEBCCF]'>{projects.title}</h2>

            <div className='grid md:grid-cols-3 gap-10'>
                {projects.items.map((project, index) => (
                    <ProjectCard
                        key={project.title} 
                        {...project}
                        image={images[index]}
                    />
                ))}
            </div>
        </section>
    );
}