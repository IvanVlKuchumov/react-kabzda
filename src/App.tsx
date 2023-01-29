import React, {useState} from 'react';
import './App.css';
import {Rating, RatingValueType} from "./components/Rating/Rating";
import {AccordionUnControlled} from "./components/Accordion/AccordionUnControlled";
import {OnOffUncontrolled} from "./components/OnOff/OnOffUncontrolled";
import {Accordion} from "./components/Accordion/Accordion";
import {UncontrolledRating} from "./components/Rating/UncontrolledRating";
import {OnOff} from "./components/OnOff/OnOff";

function App() {

    const [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    const [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
    const [on, setOn] = useState(false)

    return (
        <div className='content'>
            This is APP component
            <Rating value={ratingValue} onClick={setRatingValue}/>
            <UncontrolledRating/>
            <Accordion title='menu'
                       accordionCollapsed={accordionCollapsed}
                       setAccordionCollapsed={setAccordionCollapsed}
                       items={[{title: 'biba', value:1}, {title:'boba', value:2}, {title:'buba', value:3}]}
                       onClick={()=>{}}
            />
            <AccordionUnControlled title={'Acc1'}/>
            <OnOffUncontrolled />
            <OnOff on={on} setOn={setOn} />
        </div>
    );
}

export default App;
