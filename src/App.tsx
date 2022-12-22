import React from 'react';
import './App.css';
import {RatingUn} from "./components/Rating/RatingUn";
import {AccordionUnControlled} from "./components/Accordion/AccordionUnControlled";
import {OnOff} from "./components/OnOff/OnOff";
import {AccordionSelfControlled} from "./components/Accordion/AccordionSelfControlled";
import {RatingButton} from "./components/Rating/RatingButton";

function App() {
    return (
        <div className='content'>
            This is APP component
            <RatingUn value={1}/>
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
