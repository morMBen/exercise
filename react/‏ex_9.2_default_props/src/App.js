import MusicAlbum from './MusicAlbum';

const App = () => {
    return (
        <div>
            <MusicAlbum title="Monica Sex"
                albumName="P’tzaim Ve’Neshikot"
                numberOfSongs="5"
                albumLength="58"
                link="https://youtu.be/DV55unut3oI"
            />
            <MusicAlbum title="Bob Marley and the Wailers"
                albumName="Catch A Fire "
                numberOfSongs="9"
                albumLength="37:51"
                link="https://www.youtube.com/watch?v=UCKf0i_moOg"
            />
            <MusicAlbum />
        </div>
    )
}

export default App;