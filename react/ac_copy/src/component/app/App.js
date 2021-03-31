import React, { useState, useEffect, useRef } from 'react'



const App = () => {
    const myRef = useRef();


    const onPlay = () => {
        myRef.current.play()
    }
    const onStop = () => {

        myRef.current.pause()
    }
    return (
        <div style={{ width: "500px" }}>
            <video ref={myRef} width="500" height="240" >
                <source src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" />
            </video>
            <div style={{ textAlign: 'center' }}>
                <button onClick={onPlay}>Play</button>
                <button onClick={onStop}>Stop</button>
            </div>
        </div>

    )

}
export default App;

