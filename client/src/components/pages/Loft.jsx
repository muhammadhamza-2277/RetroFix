import LoftHero from "../layout/LoftHero"
import LoftPricing from "../layout/LoftPricing"
import LoftBenefits from "../layout/LoftBenefits"
import LoftAbout from "../layout/LoftAbout"
import Footer from '../layout/Footer'
import Navbar from '../layout/Navbar'


function Loft() {
    return (
        <>
            <Navbar></Navbar>
            <LoftHero></LoftHero>
            <LoftPricing></LoftPricing>
            <LoftBenefits></LoftBenefits>
            <LoftAbout></LoftAbout>
            <Footer></Footer>
        </>
    )
}

export default Loft