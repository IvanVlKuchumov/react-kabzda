import {Select, SelectPropsType} from "./Select";
import {Story} from "@storybook/react";
import {useState} from "react";


export default {
    title: 'Select',
    component: Select
}

const Template: Story<SelectPropsType> = (args) => {
    const [value, setValue] = useState(1)
    args={...args,
        value:value,
        onChange:(value:any)=>{
            setValue(value)
        }
    }
    return (
        <Select {...args}/>
    )
}
export const WithValue = Template.bind({})
WithValue.args = {
    items: [{value: 1, title: 'First element'}, {value: 2, title: 'Second element'}, {value: 3, title: 'Third element'}]
}



export const WithoutValue = Template.bind({})
WithoutValue.args = {
    items: [{value: 1, title: 'First element'}, {value: 2, title: 'Second element'}, {value: 3, title: 'Third element'}],
}
