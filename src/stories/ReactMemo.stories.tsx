import React, {useState} from "react";

export default {
    title: 'ReactMemo'
}

const NewMessagesCountS = (props: any) => {
    console.log('Message rendering')
    return <div>{props.count}</div>
}

const NewMessagesCount = React.memo(NewMessagesCountS)

const UsersSecret = (props: { users: Array<string> }) => {
    console.log('User rendering')
    return <div>{props.users.map(
        (u, i) => <div key={i}>{u}</div>
    )}</div>
}

const Users = React.memo(UsersSecret)

export const Example1 = () => {
    let [counter, setCounter] = useState(0)
    let [users, setUsers] = useState(['BIBA', 'BOBA', 'BUBA', 'STATUYA'])
    const onClickHandler = () => {
        setCounter(++counter)
    }

    const addUser = () => {
        const newUser = [...users, '' + new Date().getTime()]
        setUsers(newUser)
    }
    return <>
        <button onClick={onClickHandler}>+</button>
        <button onClick={addUser}>+</button>
        <NewMessagesCount count={counter}/>
        <Users users={users}/>
    </>
}