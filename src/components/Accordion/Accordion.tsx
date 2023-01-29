export type AccordionPropsType = {
    title: string,
    accordionCollapsed: boolean
    setAccordionCollapsed:(c:boolean)=>void
    onChange?: () => void
    items: ItemsType[]
    onClick: (value:any)=>void

}

type ItemsType = {
    title: string,
    value: any
}

export const Accordion = (props: AccordionPropsType) => {

    return (
        <div>
            <AccordionTitle  title={props.title} accordionCollapsed={props.accordionCollapsed} setAccordionCollapsed={props.setAccordionCollapsed} />
            {props.accordionCollapsed && <AccordionBody items={props.items} onClick={props.onClick}/>}
        </div>
    )
}

 type AccordionTitlePropsType = {
     title: string,
     accordionCollapsed: boolean
     setAccordionCollapsed:(c:boolean)=>void
 }

const AccordionTitle = (props: AccordionTitlePropsType) => {
    const onclickHandler = () => {
      props.setAccordionCollapsed(!props.accordionCollapsed)
    }
    return (
        <h3 onClick={onclickHandler}>{props.title}</h3>
    )
}

type AccordionBodyType = {
    items?: ItemsType[]
    onClick: (value:number) => void

}

const AccordionBody = (props:AccordionBodyType) => {
    return (
        <ul>
            {props.items?.map((i, index) => <li key={index} onClick={()=>props.onClick(i.value)}>{i.title}</li>)}
        </ul>
    )
}
