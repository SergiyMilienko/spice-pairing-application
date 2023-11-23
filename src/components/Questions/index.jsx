import React, {useState} from 'react'
import AccordionItem from '../AccordionItem'
import './style.css';
import { useTranslation } from 'react-i18next';

const Questions = () => {

    const { t } = useTranslation();
    const accordionData = [
        { title: t('questions.question-1'), content: t('answers.answer-1') },
        { title: t('questions.question-2'), content: t('answers.answer-2') },
        { title: t('questions.question-3'), content: t('answers.answer-3') },
        { title: t('questions.question-4'), content: t('answers.answer-4') },
        { title: t('questions.question-5'), content: t('answers.answer-5') },
        { title: t('questions.question-6'), content: t('answers.answer-6') },
      ];
    
  const [openItemIndex, setOpenItemIndex] = useState(null);

  const toggleAccordionItem = (index) => {
    setOpenItemIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className={`accordion ${openItemIndex !== null ? 'shift' : ''}`}>
      {accordionData.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          content={item.content}
          isOpen={index === openItemIndex}
          onToggle={() => toggleAccordionItem(index)}
        />
      ))}
    </div>
  );
};

export default Questions