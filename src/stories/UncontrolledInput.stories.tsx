import React, {ChangeEvent, useRef, useState} from 'react';

export default {
    title: 'input'
}

export const UncontrolledInput = () => <input/>
export const TrackValueUncontrolledInput = () => {
    const [value, setValue] = useState('')
    const onChangeHandler = (event:ChangeEvent<HTMLInputElement>) => {
        setValue(event.currentTarget.value)
    }
    return (
        <><input onChange={onChangeHandler}/> - {value}</>
    )
}
export const GetValueOfUncontrolledByButtonPress = () => {
    const [value, setValue] = useState('')
    const inputRef = useRef<HTMLInputElement>(null)

    const onClickHandler = () => {
        const text = inputRef.current as HTMLInputElement
        setValue(text.value)
    }
    return (
        <><input ref={inputRef}/>
            <button onClick={onClickHandler}>save</button>
            actual value - {value}</>
    )
}


export const ControlledInputWithFixedValue = () => <input value={'Fsdviafdbsl;k'}/>
