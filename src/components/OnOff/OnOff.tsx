import React from "react";
type OnOffPropsType = {
    on: boolean
}

export const OnOff = (props:OnOffPropsType) => {
    const onStyle = {
        width: '30px',
        height:'20px',
        border: '1px solid black',
        margin: '10px',
        display: 'inline',
        backgroundColor: props.on  ? 'green' : 'white'
    }
    const offStyle = {
        width: '30px',
        height:'20px',
        border: '1px solid black',
        margin: '10px',
        display: 'inline',
        backgroundColor: !props.on  ? 'red' : 'white'
    }
    const indicatorStyle = {
        width: '12px',
        height:'12px',
        border: '1px solid black',
        borderRadius: '6px',
        margin: '10px',
        display: 'inline-block',
        backgroundColor: props.on  ? 'green' : 'red'
    }

    return (
        <>
            <div style={onStyle}>On</div>
            <div style={offStyle}>Off</div>
            <div style={indicatorStyle}></div>
        </>
    )
}