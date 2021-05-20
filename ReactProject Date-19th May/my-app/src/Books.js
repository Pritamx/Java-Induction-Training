import { useState } from 'react'
import Book from './Book'

// Exercise 14,15,16 The book exercise with add,edit and remove options
const Books = () => {
    const [books,setBooks]= useState([{id:"1",title:"Understanding Computer Application",publisher:"APC"},
                {id:"2",title:"Java Seventh Edition",publisher:"McGraw Hills"}])
    
                const [id,setId]=useState("")
    const [title,setTitle]=useState("")
    const [publisher,setPublisher]=useState("")

    const removeBookHandler=(id)=>{
        const bookcopy = [...books]
        const filerbooks = bookcopy.filter(b=>b.id!=id)
        setBooks(filerbooks)
    }
    return(<div style={{border:"3px dashed crimson",padding:"20px"}}>
        <label>Enter Id :- </label>
        <input type="number" onChange={(e)=>{setId(e.target.value)}} style={{margin:"10px"}}></input>

        <label>Enter Title :- </label>
        <input type="text" onChange={(e)=>{setTitle(e.target.value)}} style={{margin:"10px"}}></input>

        <label>Enter Publisher :- </label>
        <input type="text" onChange={(e)=>{setPublisher(e.target.value)}} style={{margin:"10px"}}></input>

        <button style={{margin:"10px"}} onClick={()=>{
            const b = [...books,{id:id,title:title,publisher:publisher}]
            setBooks(b)
        }}>Add</button>

        <button style={{margin:"10px"}} onClick={()=>{
            const bookcopy = [...books]
            for(let i=0;i<bookcopy.length;i++){
                if(bookcopy[i].id===id){
                    bookcopy[i].title = title
                    bookcopy[i].publisher = (publisher!=="")? publisher:bookcopy[i].publisher
                }
                setBooks(bookcopy)
            }
        }}>Edit</button>

        {
        books.map((book)=> {
            return <Book key={book.id} title={book.title} publisher={book.publisher} onRemove={()=>{removeBookHandler(book.id)}}></Book>})
        }
    </div>)
}

export default Books