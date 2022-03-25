import {useState} from 'react'
import '../carrousel/carrousel.css'
import arrowright from '../../assets/arrowright.svg'
import arrowleft from '../../assets/arrowleft.svg'

function Carrousel({pictures}) {
    const [current, setCurrent] = useState(0)
    const length = pictures.length

    function nextPicture() {
        setCurrent(current === length - 1 ? 0 : current + 1)
    }
    console.log(current)

    function prevPicture() {
        setCurrent(current === 0 ? length - 1 : current - 1)
    }

    return (
        <section className="carrousel-container">
            <img src={arrowleft} className="arrow-left" onClick={prevPicture} />
            <img src={arrowright} className="arrow-right" onClick={nextPicture} />
            {pictures.map((picture, index) => {
                return (    
                    <div key={index} className={index === current ? 'picture active' : 'picture' } >
                        {index === current && (<img src={picture} alt="carrousel-picture" className="carrousel-img"/>)} 
                    </div>
                )

            })}

        </section>
    )

}
export default Carrousel