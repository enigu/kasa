import '../rating/rating.css'
import star from '../../assets/star.svg'

function Rating(props) {
    const ratingValue = props.ratingValue
    const range = [1, 2, 3, 4, 5]
    return (
        <div>
            {range.map((rangeElem) =>
                ratingValue >= rangeElem ? <span key={rangeElem.toString()}><img src={star} alt="star" className="star"/></span> : null
            )}
        </div>
    )
}

export default Rating