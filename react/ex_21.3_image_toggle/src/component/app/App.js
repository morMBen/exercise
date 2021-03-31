import React, { useState, useEffect, useRef } from 'react'
import P1 from '../p1.jpg'
import P11 from '../p11.jpg'
import P2 from '../p2.jpg'
import P22 from '../p22.jpg'


const App = () => {
    // const myRef = useRef();
    const [hover1, setHover1] = useState(null)
    const [hover2, setHover2] = useState(null)



    return (
        <div>
            <img
                onMouseEnter={() => setHover1(true)}
                onMouseLeave={() => setHover1(false)}
                src={hover1 ? P11 : P1}
                style={{ height: "300px" }}
                alt="p1"
            />
            <img
                onMouseEnter={() => setHover2(true)}
                onMouseLeave={() => setHover2(false)}
                src={hover2 ? P22 : P2}
                style={{ height: "300px" }}
                alt="p2"
            />
        </div>
    )
}
export default App;

