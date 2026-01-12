const skillTable = [
    {title: "Javascript", description: "I first learned about this programming language at the start of the program. It's how I mostly made this portfolio in basics."},
    {title: "React.js", description: "I learned about this programming language after Javascript, HTML and CSS. It's a more advanced version of Javascript where frontend became more dynamic."},
    {title: "Redux", description: "I learned about this topic after React. It allows the React programs to be more immutable and states to be much more managable."},
]

export default function Skills() {
    return (
        <section id='skillTable' className='px-8 py-20'>
            <h2 className='text-5xl font-bold mb-10'>Skills</h2>

            <div className='grid md:grid-cols-3 gap-8'>
                {skillTable.map((skill) => (
                    <div key={skill.title}>
                        <h3 className='text-3xl font-semibold text-indigo-600 mb-2'>
                            {skill.title}
                        </h3>
                        <p className='text-gray-600 text-sm'>
                            {skill.description}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    )
}