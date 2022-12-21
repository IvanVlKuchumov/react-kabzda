import React from 'react';
import './App.css';
import {Rating} from "./components/Rating/Rating";
import {Accordion} from "./components/Accordion/Accordion";

function App() {
    return (
        <div className='content'>
            This is APP component
            <Rating/>
            <Accordion title='menu' collapsed={true}/>
            <Accordion title='title' collapsed={false}/>
        </div>
    );
}

export default App;
