import React from 'react';
import Boxes from './Boxs';
class BoxAnimation extends React.Component {
    state = { addClass: "brr", remove: "brr" };

    componentDidMount() {
        setTimeout(() => {
            const box = document.querySelectorAll('.boxes');
            box.forEach(e => {
                e.classList.add('add');
                e.style.left = '0';
            })
        }, 1000)
        setTimeout(() => {
            const box = document.querySelectorAll('.boxes');
            box.forEach(e => {
                e.classList.remove(e.classList[e.classList.length - 1]);
                e.classList.add('remove');
                e.style.left = '-500px';
            })
        }, 4000)
    }



    render() {
        return (
            <Boxes />
        )
    }
}

export default BoxAnimation;