import '../banner/banner.css'
import banner from '../../assets/banner.jpeg'

function Banner() {
    return (
        <div className='banner' style={{
            backgroundImage: `url(${banner})`,
            linearGradient: `rgba(0,0,0,0.4), rgba(0,0,0,0.4)`
            }}>
            <p>Chez vous, partout et ailleurs</p>
        </div>
    )
}

export default Banner