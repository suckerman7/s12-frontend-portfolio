import useTranslation from '../hooks/useTranslation';

export default function ContactText() {

    const translation = useTranslation();

    return (
        <div className='max-w-md'>
            <h2 className='text-3xl md:text-4xl font-bold mb-6 dark:text-[#AEBCCF]'>
                {translation.contact.title} <br /> {translation.contact.subtitle}
            </h2>

            <a 
                href='mailto:mrty.yksl@gmail.com'
                className='text-[#4d2a07] font-medium hover:underline inline-flex items-center gap-2 dark:text-[#BAB2E7]'
            >
                👉 mrty.yksl@gmail.com
            </a>
        </div>
    );
}