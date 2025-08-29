import Navbar from '../layout/Navbar'
import AirSource from '../layout/AirSource';
import AirBenefits from '../layout/AirBenefits';
import Airheatingbutton from '../layout/Airheatingbutton';
import Footer from '../layout/Footer'


function AirSourceHeatPump() {
    return (
        <>
            <Navbar />
            <AirSource></AirSource>
            <AirBenefits></AirBenefits>
            <Airheatingbutton></Airheatingbutton>
            <Footer></Footer>
        </>
    )
}

export default AirSourceHeatPump