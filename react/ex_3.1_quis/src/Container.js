import React from 'react';
import QuizTitle from './QuizTitle';
import Q1 from './Q1';
import Q2 from './Q2';

const Container = () => {
    return (
        <div className="container">
            <QuizTitle />
            <Q1 />
            <Q2 />
        </div>
    )
}

export default Container;