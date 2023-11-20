import React, { useState, useEffect } from 'react';
import "./style.css";

const Result = ({ pairingResult, selectedSpiceIndexOne, selectedSpiceIndexTwo }) => {
    const [className, setClassName] = useState('');

    const WordColor = () => {
        switch (pairingResult) {
            case 'Good':
                return 'green';
            case 'Neutral':
                return 'orange';
            case 'Bad':
                return 'red';
            default:
                return 'white';
        }
  };

    useEffect(() => {
        setClassName('transform');
        const timeout = setTimeout(() => {
            setClassName('');
        }, 500);
        return () => clearTimeout(timeout);
    }, [selectedSpiceIndexOne, selectedSpiceIndexTwo]);

    return (
        <div className={`result ${className}`}>
            <span style={{ color: WordColor() }}>{pairingResult}</span> Pairing
        </div>
    );
};

export default Result;
