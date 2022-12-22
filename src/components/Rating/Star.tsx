import React from "react";
import {AccordionTitle} from "../Accordion/AccordionTitle";
import {AccordionBody} from "../Accordion/AccordionBody";
type StarPropsType = {
    selected: boolean
}

export const Star = (props:StarPropsType) => {
    if (props.selected) {return (
        <b>Star</b>
    )}
    else {return (
        <>Star</>
    )}
}