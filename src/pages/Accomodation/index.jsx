import accomodation from '../../data/logements';
import Tag from '../../components/tag/index';
import { useParams, Navigate } from 'react-router-dom';



function Accomodation(props) { 
    const { id } = useParams()
    

    return (
        <div className="info_left">
            {accomodation.accomodation.filter(house => house.id === id).map((filteredHouse, index) => (
                <div key={index}>
                    <h1>{filteredHouse.title}</h1>
                    <p>{filteredHouse.location}</p>
                </div>
                
                

            ))}

                

        </div>
    )

}
export default Accomodation

