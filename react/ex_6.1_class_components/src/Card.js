import React from 'react';

class Card extends React.Component {
    render() {
        return (
            <div className="card">
                <img className="pic" alt="pic" src={this.props.pic} />
                <h2 className="title" >{this.props.title}</h2>
                <h3 className="desc" >{this.props.desc}</h3>
                <a href="# " className="link">SHARE</a>
                <a href="# " className="link">EXPLORE</a>
            </div>
        )
    }
}
export default Card;
