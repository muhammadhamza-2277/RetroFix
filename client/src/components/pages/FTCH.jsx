import FirstHeating from "../layout/FirstHeating"
import CentralHeating from "../layout/CentralHeating"
import FirstheatingEligibility from "../layout/FirstheatingEligibility"
import FirstheatingBenefits from "../layout/FirstheatingBenefits"
import Footer from '../layout/Footer'
import Navbar from '../layout/Navbar'

function FTCH() {
    return (
        <>
            <Navbar></Navbar>
            <FirstHeating></FirstHeating>
            <CentralHeating></CentralHeating>
            <FirstheatingEligibility></FirstheatingEligibility>
            <FirstheatingBenefits></FirstheatingBenefits>
            <Footer></Footer>

        </>
    )
}

export default FTCH