import Solarhead from "../layout/solarhead"
import Solarbenefits from "../layout/solarbenefits"
import Solarlast from "../layout/Solarlast"
import Footer from '../layout/Footer'
import Navbar from '../layout/Navbar'

function SolarPanel() {
    return (
        <>
            <Navbar></Navbar>
            <Solarhead></Solarhead>
            <Solarbenefits></Solarbenefits>
            <Solarlast></Solarlast>
            <Footer></Footer>
        </>
    )
}

export default SolarPanel