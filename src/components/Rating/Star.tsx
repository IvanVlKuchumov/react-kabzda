import React from "react";
type StarPropsType = {
    light: boolean,
}

export const Star = (props:StarPropsType) => {
    if (props.light) {return (
        <div><b>Star</b></div>
    )}
    else {return (
        <div>Star</div>
    )}
}
