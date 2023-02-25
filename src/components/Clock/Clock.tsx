import React, {useEffect, useState} from "react";
import s from './Clock.module.css'

export const Clock = () => {
    const deg = 6;

    let [hh, setHh] = useState(new Date().getHours() * 30)
    let [mm, setMm] = useState(new Date().getMinutes() * deg)
    let [ss, setSs] = useState(new Date().getSeconds() * deg)


    useEffect(() => {
        const intervalId = setInterval(
            () => {
                setHh(new Date().getHours() * 30)
                setMm(new Date().getMinutes() * deg)
                setSs(new Date().getSeconds() * deg)
            }
            ,
            1000
        )
        return () => {
            clearInterval(intervalId)
        }
    }, [])



    return <div className={s.clock}>
        <div className={s.hour}>
            <div className={s.hr} id={s.hr} style={{transform: `rotateZ(${hh +(mm/12)}deg)`}}></div>
        </div>
        <div className={s.min}>
            <div className={s.mn} id={s.mn} style={{transform: `rotateZ(${mm}deg)`}}></div>
        </div>
        <div className={s.sec}>
            <div className={s.sc} id={s.sc} style={{transform: `rotateZ(${ss}deg)`}}></div>
        </div>
    </div>
}