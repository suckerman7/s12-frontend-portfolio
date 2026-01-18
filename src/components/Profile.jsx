import useTranslation from '../hooks/useTranslation';

export default function Profile() {

    const { profile } = useTranslation();

    return (
        <section className='px-8 py-20'>

            <h1 className='text-[#1F2937] text-5xl leading-none font-semibold mb-12 dark:text-[#AEBCCF]'>{profile.title}</h1>

            <div className='grid md:grid-cols-2 gap-16'>
                <div>
                    <h2 className='text-indigo-700 text-3xl font-bold mb-6 dark:text-[#B7AAFF]'>
                        {profile.subtitle}
                    </h2>

                    <ul className='space-y-3 text-sm'>
                        {profile.info.map((item) => (
                            <li key={item.label} className='dark:text-white flex'>
                                <b className="inline-block w-32 shrink-0">
                                    {item.label}
                                </b>

                                <div>
                                    <div>{item.value}</div>

                                    {item.subValue && (
                                        <div className='pt-2'>
                                            {item.subValue}
                                        </div>
                                    )}
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>

                <div>
                    <h2 className=' text-indigo-700 text-3xl font-bold mb-4 dark:text-[#B7AAFF]'>{profile.aboutTitle}</h2>

                    {profile.about.map((paragraph, index) => (
                        <p key={index} className='text-gray-600 mb-4 dark:text-white'>
                            {paragraph}
                        </p>
                    ))}
                </div>
            </div>
        </section>
    );
}