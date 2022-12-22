import React from 'react';
import './App.css';
import {Rating} from "./components/Rating/Rating";
import {AccordionUnControlled} from "./components/Accordion/AccordionUnControlled";
import {OnOff} from "./components/OnOff/OnOff";
import {AccordionSelfControlled} from "./components/Accordion/AccordionSelfControlled";

function App() {
    return (
        <div className='content'>
            This is APP component
            <Rating value={1}/>
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>
            <Rating value={5}/>
            <AccordionSelfControlled title='menu' collapsed={true}/>
            <AccordionSelfControlled title='title' collapsed={false}/>
            <AccordionUnControlled title={'Acc1'}/>
            <OnOff />
            <OnOff />
        </div>
    );
}

export default App;
