import React, {useCallback, useMemo, useState} from "react";

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
        return books.filter(b => b.toLowerCase().indexOf('a') > -1)
    }, [books])



    const addBook = () => {
        const newBook = [...books, 'Angular' + new Date().getTime()]
        setBooks(newBook)
    }

    const memoizedBook = useCallback( addBook, [books])
    console.log('like')
    return <>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        {counter}
        <Book books={newArray} addBook={memoizedBook}/>
    </>
}

const BooksS = (props: { books: Array<string>, addBook:()=>void }) => {
    console.log('BookS')
    return <div>
        <button onClick={() => props.addBook()}>add book</button>
        {props.books.map((book, i) => <div key={i}>{book}</div>)}
    </div>
}

const Book = React.memo(BooksS)