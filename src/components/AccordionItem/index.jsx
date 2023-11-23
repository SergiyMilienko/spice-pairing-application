import React from 'react';
import './style.css'

const AccordionItem = ({ title, content, isOpen, onToggle }) => {

  return (
    <div className={`accordion-item ${isOpen ? 'open' : ''}`}>
      <div className="accordion-header" onClick={onToggle}>
        <h2>{title}</h2>
        <span className='icon'>▼</span>
      </div>
      {isOpen && <div className="accordion-content">{content}</div>}
    </div>
  );
};

export default AccordionItem;