import axios from 'axios';
import React, { useState, useEffect } from 'react'
import Api from './api';


const App = () => {
    const [toggle, setToggle] = useState(false);


    const onButtonClick = () => {
        // console.log(results)
        setToggle(!toggle)
    }

    return (
        <div>
            <button onClick={onButtonClick}>{toggle ? 'Hide Data' : 'Display Data'}</button>
            {toggle ? <Api /> : <></>}
        </div>
    )

}
export default App;

