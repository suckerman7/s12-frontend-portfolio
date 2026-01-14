import useTranslation from "../hooks/useTranslation";

export default function ContactLinks() {

    const { contact } = useTranslation();

    return (
        <div className='flex gap-6 text-sm font-medium items-start md:items-center'>
            <a
                href='#'
                className='text-[#0A0A14] dark:text-[#E1E1FF] hover:text-indigo-900'
            >
                {contact.links.blog}
            </a>

            <a
                href='https://github.com/suckerman7'
                target='_blank'
                className='text-[#00AB6B] dark:text-[#17D18B] hover:text-indigo-900'
            >
                GitHub
            </a>

            <a
                href='https://www.linkedin.com/in/mert-y%C3%BCksel-904396311/'
                target='_blank'
                className='text-[#0077B5] dark:text-[#0BA6F6] hover:text-indigo-900'
            >
                LinkedIn
            </a>
        </div>
    );
}