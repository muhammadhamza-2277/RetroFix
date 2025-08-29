import Navbar from '../layout/Navbar'
import Hero from '../layout/Hero'
import Services from '../layout/Services'
import WhyChooseUsSection from '../layout/WhyChooseUsSection'
import InstallationProcess from '../layout/InstallationProcessSection'
import CompanyInNumbers from '../layout/CompanyInNumbers'
import Testimonials from '../layout/Testimonials'
import Footer from '../layout/Footer'

function Home() {
    return (
        <>
            <Navbar />
            <Hero />
            <Services />
            <InstallationProcess />
            <WhyChooseUsSection />
            <CompanyInNumbers />
            <Testimonials />
            <Footer />
        </>
    )
}

export default Home