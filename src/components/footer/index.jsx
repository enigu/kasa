import '../footer/footer.css'
import logonoir from '../../assets/logonoir.svg'
import rights from '../../assets/rights.png'

function Footer() {
    return (
        <div className='footer'>
            <img src={logonoir} alt='logo Kasa footer' className='logo-footer'></img>
            <img src={rights} alt='droits réservés de Kasa' className='rights-kasa'></img>
        </div>
    )
}

export default Footer