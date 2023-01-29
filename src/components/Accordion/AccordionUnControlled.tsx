import React, {useReducer} from "react";

type AccordionPropsType = {
    title: string,
}

type ActionType = {
    type: string
}

const reducer = (state: boolean, action: ActionType) => {
    if (action.type === 'TOGGLE-COLLAPSED') {
        return !state
    }
    return state
}

export const AccordionUnControlled = (props: AccordionPropsType) => {

    // let [toggle, setToggle] = useState(true)
    let [collapsed, dispatch] = useReducer(reducer, true)
    return (
        <div>
            <AccordionTitle title={props.title} onClick={() => {
               dispatch({type: 'TOGGLE-COLLAPSED'})
            }}/>
            {!collapsed && <AccordionBody/>}
        </div>
    )
}

type AccordionTitleType = {
    title: string
    onClick: () => void
}

const AccordionTitle = (props: AccordionTitleType) => {
    return (
        <h3 onClick={() => props.onClick()}>{props.title}</h3>
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
