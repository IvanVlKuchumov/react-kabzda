import React from "react";
import {AccordionPropsType} from "./Accordion";


export const AccordionTitle = (props:AccordionPropsType) => {
    return (
        <h3>{props.title}</h3>
    )
}