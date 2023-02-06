import React, {useMemo, useState} from "react";

export default {
    title: 'useMemo'
}


export const Example1 = () => {
    const [a, setA] = useState(0)
    const [b, setB] = useState(0)

    let resultA
    let resultB = 1

    resultA = useMemo(() => {
        let tempResultA = 1
        for (let i = 1; i <= a; i++) {
            tempResultA *= i
        }
        return tempResultA
    }, [a])


    for (let i = 1; i <= b; i++) {
        resultB *= i
    }

    return <>
        <input value={a} onChange={(e) => setA(+e.currentTarget.value)}/>
        <input value={b} onChange={(e) => setB(+e.currentTarget.value)}/>
        <hr/>
        <div>
            Result for a: {resultA}
        </div>
        <div>
            Result for b: {resultB}
        </div>
    </>
}

export const LikeUseCallback = () => {
    const [counter, setCounter] = useState(0)
    const [books, setBooks] = useState(['JS and TS', 'React', 'HTML and CSS'])

    const newArray = useMemo(() => {
        const newArray = books.filter(b => b.toLowerCase().indexOf('a') > -1)
        return newArray
    }, [books])



    const addBook = () => {
        const newBook = [...books, 'Angular' + new Date().getTime()]
        setBooks(newBook)
    }
}

const BooksS = (props: { books: Array<string> }) => {
    console.log('BookS')
    return <div>
        {props.books.map((book, i) => <div key={i}>{book}</div>)}
    </div>
}

const Book = React.memo(BooksS)