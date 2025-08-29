import BoilerHead from '../layout/BoilerHead';
import BoilerServices from '../layout/BoilerServices';
import BoilerBenefits from '../layout/BoilerBenefits';
import BoilerElegibility from '../layout/BoilerEligibility';
import Footer from '../layout/Footer'
import Navbar from '../layout/Navbar'


function BoilerUpgrade() {
    return (
        <>
            <Navbar></Navbar>
            <BoilerHead></BoilerHead>
            <BoilerServices></BoilerServices>
            <BoilerBenefits></BoilerBenefits>
            <BoilerElegibility></BoilerElegibility>
            <Footer></Footer>
        </>
    )
}

export default BoilerUpgrade