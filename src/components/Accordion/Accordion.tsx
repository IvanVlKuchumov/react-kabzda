import React, {useState} from "react";

type AccordionPropsType = {
    title: string,
    accordionCollapsed: boolean
    setAccordionCollapsed:(c:boolean)=>void
}

export const Accordion = (props: AccordionPropsType) => {

    return (
        <div>
            <AccordionTitle title={props.title} accordionCollapsed={props.accordionCollapsed} setAccordionCollapsed={props.setAccordionCollapsed}/>
            {props.accordionCollapsed && <AccordionBody/>}
        </div>
    )
}

const AccordionTitle = (props: AccordionPropsType) => {
    const onclickHandler = () => {
      props.setAccordionCollapsed(!props.accordionCollapsed)
    }
    return (
        <h3 onClick={onclickHandler}>{props.title}</h3>
    )
}

const AccordionBody = () => {
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
        </ul>
    )
}
