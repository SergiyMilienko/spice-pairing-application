import React, { useState, useEffect } from 'react';
import "./style.css";
import { useTranslation } from 'react-i18next';

const Result = ({ pairingResult, selectedSpiceIndexOne, selectedSpiceIndexTwo }) => {
    const [className, setClassName] = useState('');
    const { t } = useTranslation();

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
    
    if (pairingResult === null || pairingResult === undefined) {
        return null; // or return some default content
      }
      
    return (
        <div className={`result ${className}`}>
            <span style={{ color: WordColor() }}>{t(`${pairingResult.toLowerCase()}`)}</span> {t('pairing')}
        </div>
    );
};

export default Result;
