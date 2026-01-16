import useTranslation from '../hooks/useTranslation';

export default function Skills() {

    const { skills } = useTranslation();

    return (
        <section id='skillTable' className='px-8 py-20'>
            <h2 className='text-5xl font-bold mb-10 dark:text-[#AEBCCF]'>{skills.title}</h2>

            <div className='grid md:grid-cols-3 gap-8'>
                {skills.items.map((skill) => (
                    <div key={skill.title}>
                        <h3 className='text-3xl font-semibold text-indigo-700 mb-2 dark:text-[#B7AAFF]'>
                            {skill.title}
                        </h3>
                        <p className='text-gray-600 text-xs dark:text-white'>
                            {skill.description}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    )
}