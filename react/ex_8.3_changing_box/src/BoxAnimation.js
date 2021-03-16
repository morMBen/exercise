import React from 'react';

class BoxAnimation extends React.Component {
    state = { addClass: "brr", remove: "brr" };

    componentDidMount() {
        setTimeout(() => {
            const box = document.querySelector('.box');
            box.classList.add('add');
            box.style.left = '0';
        }, 1000)
        setTimeout(() => {
            const box = document.querySelector('.box');

            box.classList.remove(box.classList[box.classList.length - 1]);
            box.classList.add('remove');
            box.style.borderRadius = '100%';

        }, 3000)
    }



    render() {
        return (
            <div className="box"></div>
        )
    }
}

export default BoxAnimation;