import useTranslation from '../hooks/useTranslation';

export default function Profile() {

    const { profile } = useTranslation();

    return (
        <section className='px-8 py-20 grid md:grid-cols-2 gap-10'>

            <div>
                <h1 className='text-[#1F2937] text-5xl leading-none font-semibold mb-4 dark:text-[#AEBCCF]'>Profile</h1>

                <br />

                <h2 className='text-indigo-700 text-3xl font-bold mb-6 dark:text-[#B7AAFF]'>{profile.title}</h2>

                <ul className='space-y-3 text-sm'>
                    {profile.info.map((item) => (
                        <li key={item.label} className='dark:text-white'>
                            <b>{item.label}</b> {item.value}
                        </li>
                    ))}
                </ul>
            </div>

            <div>
                <h3 className=' text-indigo-700 text-3xl mb-4 dark:text-[#B7AAFF]'>{profile.aboutTitle}</h3>

                {profile.about.map((paragraph, index) => (
                    <p key={index} className='text-gray-600 mb-4 dark:text-white'>
                        {paragraph}
                    </p>
                ))}
            </div>
        </section>
    );
}