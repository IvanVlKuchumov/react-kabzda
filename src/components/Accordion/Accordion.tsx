import React from "react";
import {AccordionTitle} from "./AccordionTitle";
import {AccordionBody} from "./AccordionBody";

type AccordionPropsType = {
    title: string,
    collapsed: boolean
}

export const Accordion = (props: AccordionPropsType) => {
    if (props.collapsed) {
        return (
            <div>
                <AccordionTitle title={props.title}/>
                <AccordionBody/>
            </div>
        )
    } else {
        return (
            <div>
                <AccordionTitle title={props.title}/>
            </div>
        )
    }
}