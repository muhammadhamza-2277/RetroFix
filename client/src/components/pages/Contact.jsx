import Navbar from '../layout/Navbar'
import ContactHead from '../layout/Contecthead';
import ContactForm from '../layout/ContactformLeftContent';
import LiveMap from '../layout/Livemap';
import Footer from '../layout/Footer'

function Contact() {
    return (
        <>
            <Navbar />
            <ContactHead />
            <ContactForm />
            <LiveMap />
            <Footer />
        </>
    )
}

export default Contact