import React, {useState} from 'react'
import AccordionItem from '../AccordionItem'
import './style.css';

const Questions = () => {

    const accordionData = [
        { title: 'How does the spice pairing feature work?', content: "Our spice pairing feature analyzes flavor profiles, aromas, and traditional pairings to recommend complementary spices for your dishes." },
        { title: 'Can I customize or input my own spices?', content: "Currently, our app doesn't support custom spices. However, we're exploring this feature for future updates." },
        { title: 'What are the criteria for determining good, bad, or neutral spice pairings?', content: "Pairings are based on flavor affinities, regional traditions, and culinary expertise, ensuring a balanced and delicious combination." },
        { title: 'Is the spice pairing based on specific cuisines or dishes?', content: "Yes, our spice pairing considers the characteristics of various cuisines and provides tailored recommendations for specific dishes." },
        { title: 'Is the app available in multiple languages?', content: "Yes, our app supports multiple languages. You can easily switch between languages in the settings." },
        { title: 'Do you have nutritional information for the spices?', content: "Currently, our app focuses on flavor pairing. Nutritional information may be considered for future updates." },
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