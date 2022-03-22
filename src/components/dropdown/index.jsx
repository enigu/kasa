import arrowdown from '../../assets/arrowdown.svg'
import arrowup from '../../assets/arrowup.svg'
import '../dropdown/dropdown.css'
import { useState } from 'react'



function Dropdown({title, content, updateContent}) {
    const [isFlipped, setIsFlipped] = useState(true)

    return isFlipped ? (
        <div className="dropdown">
        <div className="dropdown-title">
            <h3>{title}</h3>
            <img src={arrowup} onClick={() => setIsFlipped(false)}/>
        </div>
        <div className="dropdown-content">
            {Array.isArray(content)? 
                (<ul>
                    {content.map((equipment, index) => (
                        <li key={`${equipment}-${index}`}>{equipment}</li>)
                    )}
                </ul>) 
                : 
                (<p>{content}</p>)
            }
        </div>
        
    </div>

    ) : (
        <div className="dropdown">
            <div className="dropdown-title">
                <h3>{title}</h3>
                <img src={arrowdown} onClick={() => setIsFlipped(true)}/>
            </div>
            <div className="dropdown-content">
                {Array.isArray(content)? 
                    (<ul>
                        {content.map((equipment, index) => (
                            <li key={`${equipment}-${index}`}>{equipment}</li>)
                        )}
                    </ul>) 
                    : 
                    (<p>{content}</p>)
                }
            </div>
            
        </div>
    )

}
export default Dropdown