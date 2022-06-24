import React from 'react';

function Button({ text, className, onClick }) {
    return (
        <div>
            <button type='submit' onClick={onClick} className={`rounded-2 fw-bolder btn ${className}`}>{text}</button>
        </div>
    );
}

export default Button;