import React from 'react';

const Card = (props) => {
    return (
        <div className="card">
            <img className="pic" alt="pic" src={props.pic} />
            <h2 className="title" >{props.title}</h2>
            <h3 className="desc" >{props.desc}</h3>
            <a href="# " className="link">SHARE</a>
            <a href="# " className="link">EXPLORE</a>
        </div>
    )
}
export default Card;
