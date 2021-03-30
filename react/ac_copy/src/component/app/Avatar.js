const Avatar = (props) => {
    return (
        <div className='ui card column'>
            <div className="content">
                <p className="header">{props.title} {props.first} {props.last}</p>
                <img src={props.img} alt={props.id} />
            </div>
        </div>
    )
}

export default Avatar;