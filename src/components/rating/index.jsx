import '../rating/rating.css'
import star from '../../assets/star.svg'
import greystar from '../../assets/greystar.svg'

function Rating(props) {
    const ratingValue = props.ratingValue
    const range = [1, 2, 3, 4, 5]
    return (
        <div className="rating">
            {range.map((rangeElem) =>
                ratingValue >= rangeElem ? <span key={rangeElem.toString()}><img src={star} alt="star" className="star"/></span> : <span key={rangeElem.toString()}><img src={greystar} alt="greystar" className="greystar"/></span>
            )}
        </div>
    )
}

export default Rating