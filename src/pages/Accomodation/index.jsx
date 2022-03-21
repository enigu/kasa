import accomodation from '../../data/logements';
import Tag from '../../components/tag/index';
import { useParams, Navigate } from 'react-router-dom';



function Accomodation(props) { 
    const { id } = useParams()
    

    return (
        <div> 
            {accomodation.accomodation.filter(house => house.id === id).map((filteredHouse, index) => (
                <div key={index} >
                    <div className="info-left">
                        <h1>{filteredHouse.title}</h1>
                        <p>{filteredHouse.location}</p>
                        <div className="tag-list">
                            {filteredHouse.tags.map((tag) => (
                                <Tag key={tag} tagList={tag}/>
                            ))}
                        </div>
                    </div>

                    <div className="info-right">
                        <img ></img>

                    </div>
                </div>
                
            ))}
        </div> 
                

       
    )
    

}
export default Accomodation

