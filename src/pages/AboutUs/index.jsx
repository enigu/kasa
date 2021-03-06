import Banner from '../../components/banner'
import Dropdown from '../../components/dropdown/index'
import '../AboutUs/aboutus.css'
import aboutUs from '../../data/aboutus'

function AboutUs() {
    return (
        <div className="aboutus-container">
            <Banner />
            <section className="dropdowns-aboutus">
                <Dropdown 
                    title="Fiabilit√©"
                    content={aboutUs.fiability}    
                />
                <Dropdown 
                    title="Respect"
                    content={aboutUs.respect}    
                />
                <Dropdown 
                    title="Service" 
                    content={aboutUs.service}
                />
                <Dropdown 
                    title="Responsabilit√©"
                    content={aboutUs.responsability}
                />
            </section>
        </div>
        
          
    )
}
export default AboutUs