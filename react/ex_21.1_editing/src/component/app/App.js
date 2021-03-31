import Input from './Input';
import React, { useState, useEffect, useRef } from 'react'


const App = () => {

    const [isClicked, setIsClicked] = useState(false);
    const inputRef = useRef(null)

    useEffect(() => {
        if (isClicked) {
            inputRef.current.focus()
        }
    }, [isClicked])

    const displayWord = () => {
        setIsClicked(!isClicked);

    }

    return (
        <div>
            <button onClick={displayWord}>{isClicked ? "Save" : "Edit"}</button>
            {isClicked && <Input setRef={inputRef} />}
        </div>
    )

}
export default App;

