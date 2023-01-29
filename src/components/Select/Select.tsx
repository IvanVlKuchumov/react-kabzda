import {FC, useState, KeyboardEvent, useEffect} from "react";
import s from './Select.module.css';


type ItemType = {
    value: any
    title: string
}
export type SelectPropsType = {
    value?: any
    items: ItemType[]
    onChange: (value: any) => void

}

export const Select: FC<SelectPropsType> = ({items, value, onChange}) => {
    const [isActive, setIsActive] = useState(false)
    const selectItem = items.find(i => i.value === value)

    const [hoveredElementValue, setHoveredElementValue] = useState(value)
    const hoveredItem = items.find(i => i.value === hoveredElementValue)

    const toggleItems = () => {
        setIsActive(!isActive)
    }

    useEffect(() => setHoveredElementValue(value), [value])

    const onKeyUpHandler = (e: KeyboardEvent<HTMLDivElement>) => {
        if (e.key === 'ArrowDown' || 'ArrowUp') {
            for (let i = 0; i < items.length; i++) {
                if (items[i].value === hoveredElementValue) {
                    const pretendElement = e.key === 'ArrowDown' ? items[i + 1] : items[i - 1]
                    if ( pretendElement) {
                        onChange( pretendElement.value)
                        return
                    }
                }

            }
        }
        if (e.key === 'Enter' || e.key === 'Escape') {
            setIsActive(false)
        }
    }

    return (
        <div className={s.select} onKeyUp={onKeyUpHandler} tabIndex={0}>
            <span className={s.main} onClick={toggleItems}>{selectItem && selectItem.title}</span>
            {isActive &&
                <div className={s.items}>
                    {items.map(i => <div
                        onMouseEnter={() => setHoveredElementValue(i.value)}
                        key={i.value}
                        onClick={() => onChange(i.value)}
                        className={s.item + ' ' + (hoveredItem === i ? s.selected : '')}>
                        {i.title}
                    </div>)}
                </div>}
        </div>
    )
}