import React, {useState} from "react";
import {action} from "@storybook/addon-actions";
import {Accordion, AccordionPropsType} from "./Accordion";
import {Story} from "@storybook/react";



export default {
    title: 'Accordion',
    component: Accordion
}

const Template: Story<AccordionPropsType> = (args) => {
    const [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)

    return (
        <Accordion {...args} accordionCollapsed={accordionCollapsed} setAccordionCollapsed={setAccordionCollapsed} />
    )
}


const callback = action('accordion mode change event fired')
const onClickCallback = action('some item was clicked')


export const ModeChanging = Template.bind({})

ModeChanging.args = {
    title: 'Menu',
    accordionCollapsed:false,
    setAccordionCollapsed:() => {
        console.log('jopa')
    } ,
    onChange: callback,
    items:[{title:'biba', value:1}, {title:'boba', value:2}, {title:'buba', value:3}],
    onClick: onClickCallback,
}
