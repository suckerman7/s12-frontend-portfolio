import ContactText from './ContactText';
import ContactLinks from './ContactLinks';

export default function ContactSection() {
    return (
        <section className="bg-[#F9F9F9] py-24 dark:bg-[#141414]">
            <div className="px-8 flex flex-col md:flex-row justify-between gap-12">
                <ContactText />
                <ContactLinks />
            </div>
        </section>
    );
}