import accomodation from '../../data/logements';
import Tag from '../../components/tag/index';
import { useParams } from 'react-router-dom';
import { useState } from 'react'
import Rating from '../../components/rating/index'
import Dropdown from '../../components/dropdown/index'
import Carrousel from '../../components/carrousel/index'
import '../Accomodation/accomodation.css'



function Accomodation(props) { 
    const { id } = useParams()
    const [content, updateContent] = useState([])
    
    return (
        <div> 
            {accomodation.accomodation.filter(house => house.id === id).map((filteredHouse, index) => (
                <div key={index} className="accomodation-page">
                    <Carrousel pictures={filteredHouse.pictures}/>

                    <div className="info">
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
                            <div className="info-owner">
                                <p>{filteredHouse.host.name}</p>
                                <img src={filteredHouse.host.picture} alt="avatar-owner" className="owner"/>    
                            </div>
                            <Rating ratingValue={filteredHouse.rating}/>
                        </div>

                    </div>
                    
                    <section className="dropdowns">
                    <Dropdown 
                        title="Description"
                        content={filteredHouse.description}
                    />
                    <Dropdown 
                        title="Équipments"
                        content={filteredHouse.equipments}
                    />
                    </section>
                </div>    
            ))}
        </div>   
    )
}
export default Accomodation

