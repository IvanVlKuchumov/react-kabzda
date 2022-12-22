import React from 'react';
import './App.css';
import {Rating} from "./components/Rating/Rating";
import {Accordion} from "./components/Accordion/Accordion";

function App() {
    return (
        <div className='content'>
            This is APP component
            <Rating value={1}/>
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>
            <Rating value={5}/>
            <Accordion title='menu' collapsed={false}/>
            <Accordion title='title' collapsed={false}/>
        </div>
    );
}

export default App;
