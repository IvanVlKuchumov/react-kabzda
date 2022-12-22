import React from "react";

type AccordionPropsType = {
    title: string,
    collapsed: boolean
}

type AccordionPropsTitleType = {
    title: string,
}

export const AccordionSelfControlled = (props: AccordionPropsType) => {
        return (
            <div>
                <AccordionTitle title={props.title}/>
                {!props.collapsed && <AccordionBody/>}
            </div>
        )
}

const AccordionTitle = (props:AccordionPropsTitleType) => {
    return (
        <h3>{props.title}</h3>
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
