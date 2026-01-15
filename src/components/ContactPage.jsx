import {useState} from 'react';
import {toast} from 'react-toastify';
import { useNavigate } from 'react-router-dom';

import useTranslation from '../hooks/useTranslation';

export default function ContactPage() {
    const [form, setForm] = useState({
        email: '',
        company: '',
        message: '',
    });

    const translation = useTranslation();
    const navigate = useNavigate();

    const validEmail = (email) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!form.email.trim()) {
            toast.error(translation.toast.nomail);
            return;
        }

        if(!validEmail(form.email)) {
            toast.error(translation.toast.wrongmail);
            return;
        }

        const mailBody = `
            From: ${form.email}
            Company: ${form.company}

            Message:
            ${form.message}
        `;

        const mailToLink =
            `mailto:mrty.yksl@gmail.com?subject=` +
            encodeURIComponent("New Contact Request") +
            `&body=${encodeURIComponent(mailBody)}`;

        window.location.href = mailToLink;

        toast.success(translation.toast.mail);

        setForm({
            email: "",
            company: "",
            message: "",
        });

        setTimeout(() => {
            navigate("/thank-you");
        }, 800);
    };

    return (
        <section className="relative px-8 py-20 max-w-xl mx-auto">

            <button
                onClick={() => navigate(-1)}
                className='absolute top-6 left-6 flex items-center gap-2 mb-6 text-sm font-medium text-gray-600 hover:text-indigo-700 dark:text-gray-300 dark:hover:text-[#B7AAFF]'
            >
                {translation.contactform.returnbutton}
            </button>
            <h1 className="text-4xl font-bold mb-6 text-indigo-700 dark:text-[#B7AAFF]">
                {translation.contactform.title}
            </h1>

            <form onSubmit={handleSubmit} className='space-y-4'>
                <input
                    type="text"
                    name="email"
                    placeholder={translation.contactform.emailph}
                    value={form.email}
                    onChange={handleChange}
                    className="w-full border p-3 rounded dark:bg-[#1f1f1f] focus:outline-none focus:ring-2 focus:ring-indigo-600"
                />

                <input
                    type="text"
                    name="company"
                    placeholder={translation.contactform.companyph} 
                    value={form.company}
                    onChange={handleChange}
                    className="w-full border p-3 rounded dark:bg-[#1f1f1f]"
                />

                <textarea
                    name="message"
                    placeholder={translation.contactform.messageph}
                    value={form.message}
                    onChange={handleChange}
                    className="w-full border p-3 rounded dark:bg-[#1f1f1f]"
                />

                <button 
                    type='submit'
                    className='bg-indigo-800 text-white px-6 py-3 rounded hover:bg-indigo-700 dark:bg-[#E1E1FF] dark:text-black'
                >
                    {translation.contactform.button} 
                </button>
            </form>
        </section>
    );
}