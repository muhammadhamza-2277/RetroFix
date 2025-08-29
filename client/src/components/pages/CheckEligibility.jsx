import Footer from '../layout/Footer'
import Navbar from '../layout/Navbar'

import EligibilityHead from '../layout/Eligibilityhead';
import EligibilityForm from '../layout/Eligibilityform';

function CheckEligibility() {
    return (
        <>
            <Navbar />

            <EligibilityHead />
            <EligibilityForm />

            <Footer />
        </>
    )
}

export default CheckEligibility