import React from "react";
import {Star} from "./Star";

type RatingPropsType = {
    value: 1 | 2 | 3 | 4 | 5
}

export const Rating = (props:RatingPropsType) => {
    return (
        <div>
            <Star selected={props.value > 0}/>
            <Star selected={props.value > 1}/>
            <Star selected={props.value > 2}/>
            <Star selected={props.value > 3}/>
            <Star selected={props.value === 5}/>
        </div>
    )
}