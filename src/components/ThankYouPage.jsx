import { useNavigate } from "react-router-dom";
import useTranslation from '../hooks/useTranslation';

export default function ThankYouPage() {
    const navigate = useNavigate();
    const translation = useTranslation();

    return (
        <section className='min-h-screen flex flex-col items-center justify-center px-8 text-center'>
            <h1 data-testid="thank-you-title" className='text-4xl md:text-5xl font-bold mb-4 text-indigo-700 dark:text-[#B7AAFF]'>
                {translation.thankyou.title}
            </h1>

            <p className='text-indigo-500 dark:text-[#8F88FF] mb-8'>
                {translation.thankyou.subtitle}
            </p>

            <button
                onClick={() => navigate('/')}
                className='bg-indigo-800 text-white px-6 py-3 rounded hover:bg-indigo-700 dark:bg-[#E1E1FF] dark:text-black'
            >
                {translation.thankyou.button}
            </button>
        </section>
    );
}