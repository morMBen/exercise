import React, { useState } from 'react';

const Text = ({ text, maxLength }) => {
    const [showText, setShowText] = useState(false);

    const getText = () => {
        if (showText) {
            return text;
        } else {
            return text.split('').splice(0, maxLength).join('');
        }
    }

    return (
        <div>
            {getText()}
            <button
                onClick={() => setShowText(!showText)}
            >read more</button>
        </div>
    )
}

export default Text;