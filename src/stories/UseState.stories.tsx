import React, {useState} from "react";

export default {
    title: 'useState demo'
}

function generateData () {
    let a = 1 //тяжелое вычисление
    console.log('generate')
    return a
}

export const Example1 = () => {
    let [counter, setCounter] = useState(generateData) // useState не запоминает функцию, расчет будет выполнен только один раз, при первом вызове useState
    console.log('render')

    const changer = (state:number) => {
        console.log('changer work')
        return ++state
    }
    const onClickHandler = () => {
        setCounter(changer) // в фнукцию из useState можно передавать другую фукнцию, тажке можно сделать с анонимной коллбык функцией setCounter(state)=>{return ++state})

    }

    return <>
        <button onClick={onClickHandler}>+</button>
        {counter}
    </>
}