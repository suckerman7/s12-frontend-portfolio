import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "Workintech",
    description:
      "A simple, customizable cookie plugin that allows users to select which cookies to accept.",
    techs: ["react", "redux", "axios"],
  },
  {
    title: "Random Jokes",
    description:
      "An app that fetches random jokes from an API and displays them dynamically.",
    techs: ["react", "axios"],
  },
  {
    title: "Journey",
    description:
      "A landing page project focused on clean UI and minimal design.",
    techs: ["react", "tailwind"],
  },
];

export default function Projects() {
    return (
        <section id='projects' className='px-8 py-20'>
            <h2 className='text-5xl font-semibold mb-10'>Projects</h2>

            <div className='grid md:grid-cols-3 gap-10'>
                {projects.map((project) => (
                    <ProjectCard
                        key={project.title} 
                        title={project.title}
                        description={project.description}
                        techs={project.techs}
                    />
                ))}
            </div>
        </section>
    );
}