import InternalHero from '../layout/InternalHero'
import InternalBoxes from "../layout/InternalBoxes"
import InternalBenefits from "../layout/InternalBenefits"
import InternalButton from "../layout/InternalButton"
import InternalInsulation from "../layout/InternalInsulation"
import Footer from '../layout/Footer'
import Navbar from '../layout/Navbar'

function IWI() {
    return (
        <>
            <Navbar></Navbar>
            <InternalHero></InternalHero>
            <InternalBoxes></InternalBoxes>
            <InternalBenefits></InternalBenefits>
            <InternalButton></InternalButton>
            <InternalInsulation></InternalInsulation>
            <Footer></Footer>
        </>
    )
}

export default IWI