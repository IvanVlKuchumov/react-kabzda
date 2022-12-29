import React from 'react';
import './App.css';
import {Rating} from "./components/Rating/Rating";
import {AccordionUnControlled} from "./components/Accordion/AccordionUnControlled";
import {OnOff} from "./components/OnOff/OnOff";
import {AccordionSelfControlled} from "./components/Accordion/AccordionSelfControlled";
import {RatingButton} from "./components/Rating/RatingButton";

function App() {
    return (
        <div className='content'>
            This is APP component
            <Rating value={4}/>
            <RatingButton/>
            <AccordionSelfControlled title='menu' collapsed={true}/>
            <AccordionSelfControlled title='title' collapsed={false}/>
            <AccordionUnControlled title={'Acc1'}/>
            <OnOff />
            <OnOff />
        </div>
    );
}

export default App;
