import React from 'react';
import './App.css';
import {Rating} from "./components/Rating/Rating";
import {Accordion} from "./components/Accordion/Accordion";

function App() {
    return (
        <div className='content'>
            This is APP component
            <Rating/>
            <Accordion/>
        </div>
    );
}

export default App;
