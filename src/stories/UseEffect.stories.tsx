import React, {useEffect, useState} from "react";

export default {
    title: 'useEffect demo'
}


// useEffect срабатывает каждый раз при перерисовке компоненты. Срабатывание происходит сразу после отрисовки контента
//Если не указывать ничего вторым параметром useEffect будет срабатывать при каждой перерисовке, если передать пустую зависимость[], то только при
// перовой загрузке (монтирование компоненты), если передать данные от которых он зависит, то срабатывание происходит при их изменении
export const SimpleExample = () => {
    let [counter, setCounter] = useState(0) // useState не запоминает функцию, расчет будет выполнен только один раз, при первом вызове useState
    let [fake, setFake] = useState(0) // useState не запоминает функцию, расчет будет выполнен только один раз, при первом вызове useState
    console.log('Simple component render')

    useEffect(()=> {
        console.log('useEffect every render')
        document.title = counter.toString()
    })

    useEffect(()=> {
        console.log('useEffect only first render ~ componentDidMount')
        document.title = counter.toString()
    }, [])


    useEffect(()=> {
        console.log('useEffect every change counter render')
        document.title = counter.toString()
    }, [counter])



    return <>
        <button onClick={()=>setCounter(++counter)}>+</button>
        Counter: {counter}
        <button onClick={()=>setFake(++fake)}>+</button>
        Fake: {fake}
    </>
}