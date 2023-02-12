import React, {useEffect, useState} from "react";
import s from './Clock.module.css'

export const Clock = () => {
    let [date, setDate] = useState(new Date())

    useEffect(() => {
        const intervalId = setInterval(
            () => setDate(new Date()),
            1000
        )
        return ()=> {
            clearInterval(intervalId)
        }
    },[])


    return <div className={s.clock}>
        <div className={s.hour}>
            <div className={s.hr} id={s.hr}></div>
        </div>
        <div className={s.min}>
            <div className={s.mn} id={s.mn}></div>
        </div>
        <div className={s.sec}>
            <div className={s.sc} id={s.sc}></div>
        </div>
    </div>
}