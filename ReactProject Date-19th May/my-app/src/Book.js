//Individual book structure
const Book = (props)=>{
    return <div style={{border:"2px double black",padding:"5px",margin:"5px"}}>
    <h3>{props.title}</h3>
    <h4>{props.publisher}</h4>
    <button onClick={props.onRemove}>Remove</button>
    </div>
}
export default Book

