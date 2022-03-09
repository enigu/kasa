import '../tag/tag.css';


function Tag ({tagName}) {

    return (
        <div className="tag">
            <p className="tag_name">{tagName}</p>

        </div>
    )   
}

export default Tag