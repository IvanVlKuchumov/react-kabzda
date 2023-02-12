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
export const ControlledInput = () => {

    const [inputValue, setInputValue] = useState('')

    const onChangeHandler = (e:ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.currentTarget.value)
    }

    return (
        <><input onChange={onChangeHandler} value={inputValue}/> The value is taken from the data: value = {inputValue}</>
    )
}

export const ControlledCheckbox = () => {

    const [checkboxValue, setCheckboxValue] = useState(false)

    const onChangeHandler = (e:ChangeEvent<HTMLInputElement>) => {
        setCheckboxValue(e.currentTarget.checked)
    }

    return (
        <><input type={"checkbox"} onChange={onChangeHandler} checked={checkboxValue}/> The value is taken from the data</>
    )
}

export const ControlledSelect = () => {

    const [selectValue, setSelectValue] = useState<string>('4')

    const onChangeHandler = (e:ChangeEvent<HTMLSelectElement>) => {
        setSelectValue(e.currentTarget.value)
    }

    return <><select name={'select'} value={selectValue} onChange={onChangeHandler}>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
        <option value="4">Four</option>
    </select>  {selectValue} value from select</>
}
