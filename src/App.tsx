import React, {useState} from 'react';
import './App.css';
import {Rating, RatingValueType} from "./components/Rating/Rating";
import {AccordionUnControlled} from "./components/Accordion/AccordionUnControlled";
import {OnOff} from "./components/OnOff/OnOff";
import {AccordionSelfControlled} from "./components/Accordion/AccordionSelfControlled";
import {UncontrolledRating} from "./components/Rating/UncontrolledRating";

function App() {

    const [ratingValue, setRatingValue] = useState<RatingValueType>(0)

    return (
        <div className='content'>
            This is APP component
            <Rating value={ratingValue} onClick={setRatingValue}/>
            <UncontrolledRating/>
            <AccordionSelfControlled title='menu' collapsed={true}/>
            <AccordionSelfControlled title='title' collapsed={false}/>
            <AccordionUnControlled title={'Acc1'}/>
            <OnOff />
            <OnOff />
        </div>
    );
}

export default App;
