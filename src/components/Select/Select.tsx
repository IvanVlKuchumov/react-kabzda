import {FC, useState} from "react";
import s from './Select.module.css';


type ItemType = {
    value: any
    title: string
}
export type SelectPropsType = {
    value?: any
    items: ItemType[]
    onChange: (value:any)=>void

}

export const Select: FC<SelectPropsType> = ({items, value, onChange} ) => {
    const [isActive, setIsActive] = useState(false)
    const selectItem = items.find(i => i.value === value)

    const toggleItems = () => {
        setIsActive(!isActive)
    }


    return (
        <div className={s.select}>
            <span className={s.main} onClick={toggleItems}>{selectItem && selectItem.title}</span>
            {isActive &&
                <div className={s.items}>
                {items.map(i => <div key={i.value} onClick={()=>onChange(i.value)}>{i.title}</div>)}
            </div>}
        </div>
    )
}