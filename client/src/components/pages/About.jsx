import Navbar from '../layout/Navbar';
import AboutHero from "../layout/AboutHero";
import AboutServices from '../layout/AboutServices';
import AboutInfo from '../layout/AboutInfo';
import EnergyEfficiencySection from '../layout/EnergyEfficiencySection';
import BeforeAfterSection from '../layout/BeforeAfterSection';
import Footer from '../layout/Footer';




const About = () => {
    return (
        <>
            <Navbar />
            <AboutHero />
            <AboutServices />
            <AboutInfo />
            <EnergyEfficiencySection />
            <BeforeAfterSection />
            <Footer />

        </>
    )
}

export default About