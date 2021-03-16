import React from 'react';

class MusicAlbum extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: props.title,
            albumName: props.albumName,
            numberOfSongs: props.numberOfSongs,
            albumLength: props.albumLength,
            link: props.link
        }
    }


    render() {
        return (
            <div>
                <h1 className="title">{this.state.title}</h1>
                <h2 className="album_name">{this.props.albumName}</h2>
                <h3 className="number_of_songs">NUmber of songs: {this.props.numberOfSongs}</h3>
                <h3 className="album_length">Length: {this.props.albumLength} minuts</h3>
                <a href={this.props.link}>Click here to listen</a>
            </div>
        )
    }
}

MusicAlbum.defaultProps = {
    title: 'Man with no name',
    albumName: "No album.",
    numberOfSongs: '6686',
    albumLength: '2008',
    link: 'https://javascript30.com/'
};

export default MusicAlbum;