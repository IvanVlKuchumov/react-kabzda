import React from "react";
type AccordionTitlePropsType = {
    title:string,
}


export const AccordionTitle = (props:AccordionTitlePropsType) => {
    return (
        <h3>{props.title}</h3>
    )
}