import React from 'react'
import AccordionItem from '../AccordionItem'
import './style.css';

const Questions = () => {
  return (
    <div className='accordion'>
        <AccordionItem title="How does the spice pairing feature work?" content="Our spice pairing feature analyzes flavor profiles, aromas, and traditional pairings to recommend complementary spices for your dishes." />
        <AccordionItem title="Can I customize or input my own spices?" content="Currently, our app doesn't support custom spices. However, we're exploring this feature for future updates." />
        <AccordionItem title="What are the criteria for determining good, bad, or neutral spice pairings?" content="Pairings are based on flavor affinities, regional traditions, and culinary expertise, ensuring a balanced and delicious combination." />
        <AccordionItem title="Is the spice pairing based on specific cuisines or dishes?" content="Yes, our spice pairing considers the characteristics of various cuisines and provides tailored recommendations for specific dishes." />
        <AccordionItem title="Is the app available in multiple languages?" content="Yes, our app supports multiple languages. You can easily switch between languages in the settings." />
        <AccordionItem title="Do you have nutritional information for the spices?" content="Currently, our app focuses on flavor pairing. Nutritional information may be considered for future updates." />
    </div>
  )
}

export default Questions