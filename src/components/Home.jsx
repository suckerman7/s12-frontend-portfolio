import NavBar from './NavBar';
import Hero from './Hero';
import Skills from './Skills';
import Profile from './Profile';
import Projects from './Projects';
import ContactSection from './ContactSection';
import DividerLine from './DividerLine';

export default function Home() {
    return (
        <>
                <NavBar />
                <Hero />
                <Skills />

                <DividerLine />

                <Profile />

                <DividerLine />

                <Projects />

            <ContactSection />
        </>
    )
}