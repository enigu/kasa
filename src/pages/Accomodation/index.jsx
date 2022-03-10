import accomodation from '../../data/logements';
import Tag from '../../components/tag/index';
import { useParams } from 'react-router-dom';
import GetAccomodations from '../../services/getAccomodations';

function Accomodation () {
    const {accomodationId} = useParams()
    const title = accomodation.title


    return (
        <div className="info_left">
        <h1>title </h1>

       
            <Tag />

        </div>
    )
}

export default Accomodation

