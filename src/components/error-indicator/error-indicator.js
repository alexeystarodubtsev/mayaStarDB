import React, {Component} from 'react';
import './error-indicator.css';
import icon  from './bomb-1.1s-200px.png';

const ErrorIndicator = () => {
    return (
        <div className="error-indicator">
            <img className="icon" src={icon} alt="error icon"  />
            <span className="boom">BOOM!</span>
            <span> sometging wrong , </span>
            <span>we are trying to fix it</span>
        </div>
    );
};
export default ErrorIndicator;
