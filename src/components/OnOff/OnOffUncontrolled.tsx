import React, {useState} from "react";


export const OnOffUncontrolled = () => {
    let [on, setOn] = useState(false)


    const onStyle = {
        width: '40px',
        height:'30px',
        border: '1px solid black',
        marginLeft: '2px',
        display: 'inline-block',
        backgroundColor: on  ? 'green' : 'white',
        padding: '2px'
    }
    const offStyle = {
        width: '40px',
        height:'30px',
        border: '1px solid black',
        marginLeft: '2px',
        display: 'inline-block',
        backgroundColor: !on  ? 'red' : 'white',
        padding: '2px'
    }
    const indicatorStyle = {
        width: '14px',
        height:'16px',
        border: '1px solid black',
        borderRadius: '7px',
        marginLeft: '5px',
        display: 'inline-block',
        backgroundColor: on  ? 'green' : 'red'
    }

    return (
        <div>
            <div style={onStyle} onClick={()=>{setOn(true)}}>On</div>
            <div style={offStyle} onClick={()=>{setOn(false)}}>Off</div>
            <div style={indicatorStyle}></div>
        </div>
    )
}