import Footer from '../layout/Footer'
import Navbar from '../layout/Navbar';

import ExternalHero from '../layout/Externalhero';
import ExternalCard from '../layout/Externalcards';
import ExternalButtons from '../layout/Externalbutton';
import ExternalLast from '../layout/Externallast';

function EWI() {
    return (
        <>
            <Navbar />
            <ExternalHero />
            <ExternalCard />
            <ExternalButtons />
            <ExternalLast />

            <Footer />
        </>
    )
}

export default EWI