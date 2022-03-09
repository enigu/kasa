import accomodation from '../../data/logements.json';
import Tag from '../../components/tag/index';
import { useParams } from 'react-router-dom';


function Accomodation () {
    const {accomodationId} = useParams()
    const title = accomodation.title
    console.log(title)

    return (
        <div className="info_left">
        <h1>title {accomodationId}</h1>

       
            <Tag />


        </div>
    )
}

export default Accomodation

