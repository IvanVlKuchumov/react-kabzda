import React, {useState} from "react";

type AccordionPropsType = {
    title: string,
}

export const AccordionUnControlled = (props: AccordionPropsType) => {

    let [toggle, setToggle] = useState(true)
        return (
            <div>
                <AccordionTitle title={props.title} onClick={()=>{setToggle(!toggle)}}/>
                {!toggle && <AccordionBody/>}
            </div>
        )
}

type AccordionTitleType = {
    title: string
    onClick: ()=>void
}

const AccordionTitle = (props:AccordionTitleType) => {
    return (
        <h3 onClick={()=>props.onClick()}>{props.title}</h3>
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
