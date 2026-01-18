import useTranslation from "../hooks/useTranslation";
import { delayedRedirect } from '../utils/delayedRedirect';

export default function ContactLinks() {

    const { contact, toast } = useTranslation();

    return (
        <div className='flex gap-6 text-sm font-medium items-start md:items-center'>
            <a
                href='#'
                className='text-[#0A0A14] dark:text-[#E1E1FF] hover:text-indigo-900'
            >
                {contact.links.blog}
            </a>

            <button
                onClick={() =>
                    delayedRedirect(
                        "https://github.com/suckerman7",
                        toast.githubprofile
                    )
                }
                className='text-[#00AB6B] dark:text-[#17D18B] hover:text-indigo-900'
            >
                GitHub
            </button>

            <button
                onClick={() =>
                    delayedRedirect(
                        "https://www.linkedin.com/in/mert-y%C3%BCksel-904396311/",
                        toast.linkedinprofile
                    )
                }
                className='text-[#0077B5] dark:text-[#0BA6F6] hover:text-indigo-900'
            >
                LinkedIn
            </button>
        </div>
    );
}