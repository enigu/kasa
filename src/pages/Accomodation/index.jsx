import accomodation from '../../data/logements';
import Tag from '../../components/tag/index';
import { useParams } from 'react-router-dom';
import { useState } from 'react'
import Rating from '../../components/rating/index'
import Dropdown from '../../components/dropdown/index'



function Accomodation(props) { 
    const { id } = useParams()
    const [content, updateContent] = useState([])
    
    return (
        <div> 
            {accomodation.accomodation.filter(house => house.id === id).map((filteredHouse, index) => (
                <div key={index} className="info">
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
                        <img src={filteredHouse.host.picture} alt="avatar-owner"/>
                        <p>{filteredHouse.host.name}</p>
                        <Rating ratingValue={filteredHouse.rating}/>
                    </div>

                    <div className="description-dropdown">
                    <Dropdown 
                        title="Description"
                        content={content} updateContent={updateContent}
                    />
                    <Dropdown 
                        title="Équipments"
                        content={filteredHouse.equipments}
                    />
                    </div>
                </div>    
            ))}
        </div>   
    )
}
export default Accomodation

