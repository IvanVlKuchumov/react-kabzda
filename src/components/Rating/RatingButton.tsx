import React, {useState} from "react";



export const RatingButton = () => {

    let [bold, setBold] = useState(false)


    return (
        <div>
            <Star bold={bold}/><button onClick={()=>setBold(!bold)}>*</button>
            <Star bold={bold}/><button onClick={()=>setBold(!bold)}>*</button>
            <Star bold={bold}/><button onClick={()=>setBold(!bold)}>*</button>
            <Star bold={bold}/><button onClick={()=>setBold(!bold)}>*</button>
            <Star bold={bold}/><button onClick={()=>setBold(!bold)}>*</button>
        </div>
    )
}
type StarPropsType = {
    bold: boolean
}
const Star = (props:StarPropsType) => {
    if (props.bold) {
        return (
            <b>Star</b>
        )
    } else {
        return (
            <>Star</>
        )
    }
}