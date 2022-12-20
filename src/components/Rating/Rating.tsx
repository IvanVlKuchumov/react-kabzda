import React from "react";
import {Star} from "./Star";

export const Rating = () => {
    return (
        <>
            <Star light={true}/>
            <Star light={false}/>
            <Star light={true}/>
            <Star light={false}/>
            <Star light={true}/>
        </>
    )
}