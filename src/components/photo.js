import React from 'react';
import {Link} from 'react-router-dom';
function Photo(props) {
    const post = props.post;
    return <figure className="figure">
        <Link to={`/Single/${post.id}`}>
        <img className="photo" src={post.imageLink} alt={post.description}/>
        </Link>
        <figcaption><p>{post.description}</p></figcaption>
        <div className="btn-container">
            <button onClick={()=>{
                props.removePost(props.index)
                props.history.push('/');
            }} >Remove</button>
            
        <Link to={`/Single/${post.id}`} className="button">
            <div className="comment-count">
                <div className="speech-bubble"></div>
                {props.comments[post.id] ? props.comments[post.id].length: 0}
            </div>
        </Link>
        </div>
        </figure>

}

export default Photo