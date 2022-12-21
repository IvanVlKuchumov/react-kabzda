import React from "react";
import {AccordionTitle} from "../Accordion/AccordionTitle";
import {AccordionBody} from "../Accordion/AccordionBody";
type StarPropsType = {
    light: boolean,
}

export const Star = (props:StarPropsType) => {
    if (props.light) {return (
        <div><b>Star</b></div>
    )}
    else {return (
        <div>Star</div>
    )}
}