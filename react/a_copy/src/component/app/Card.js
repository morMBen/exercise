const Card = (props) => {
    return (
        <div className='ui card '>
            <div className="content">
                <p className="header">I'm {props.names}</p>
                <p className="meta">Birthday Date: {props.birthday}</p>
                <p className="description">Favorite fishs: {props.favoriteFoods.fish.join(' ')}</p>
                <p className="description">Favorite meats: {props.favoriteFoods.meats.join(' ')}</p>
            </div>
        </div>
    )
}

export default Card;