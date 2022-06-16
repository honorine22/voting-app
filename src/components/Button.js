import React from 'react';

function Button({ text, className }) {
    return (
        <div>
            <button className={`rounded-2 fw-bolder btn ${className}`}>{text}</button>
        </div>
    );
}

export default Button;