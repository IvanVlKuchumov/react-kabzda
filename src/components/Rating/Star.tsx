import React from "react";
type StarPropsType = {
    selected: boolean
}

export const Star = (props:StarPropsType) => {
    if (props.selected) {return (
        <b>Star</b>
    )}
    else {return (
        <>Star</>
    )}
}