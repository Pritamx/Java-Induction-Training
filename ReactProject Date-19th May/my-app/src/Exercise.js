import React from 'react'
import {useContext,useEffect,useState} from 'react';
//Exercise-1 Displaying A Simple Message In The Page Hardcoding With Default Values
/*const Show = () =>{
    console.log()
    return(<div>
    <h1>Name :- Pritam Saha And Phone :- 8240381969 </h1>
    </div>
    )
}*/

//Exercise-2 Displaying A Simple Message In The Page But Without Hardcoding And Using Props
/*const Show = (Props) =>{
    console.log()
    return(<div>
    <h1>Name :- {Props.name} And Phone :- {Props.phone}</h1>
    </div>
    )
}*/

//Exercise-3 Using Styling Properties
/*const Show = (Props) =>{
    console.log()
    return(<div>
    <h1 style={{backgroundColor:"#CC9B6D"}}>Name :- <span style={{fontSize:"30px",fontStyle:"italic",color:"#F55C47"}}>{Props.name}</span> Phone :- <span style={{fontSize:"30px",fontStyle:"italic",color:"#F55C47"}}>{Props.phone}</span></h1>
    </div>
    )
}*/


//Exercise-6
/*const Show = () =>{
    const func = () =>{console.log("Clicked Heading")}
    return(<div>
    <h1 onClick={func}>Click Me And Check Console</h1>
    </div>
    )
}*/

//Exercise-7
/*const Show = () =>{
    return(<div>
    <h1 onClick={(e)=>{console.log("Clicked :- "+e.target)}}>Click Me And Check Console</h1>
    </div>
    )
}*/

//Exercise-8
/*const Show = () =>{
    return(<div>
    <h1 onClick={(e)=>{console.log("Clicked :- "+e.target.innerHTML)}}>Click Me And Check Console</h1>
    </div>
    )
}*/

//Exercise-9
/*const Show = () =>{
    return(<div>
    <h3>Write Something And Check Console</h3>
    <input type="text" onChange={(e)=>{console.log(e.target.value)}}></input>
    </div>
    )
}*/

//Exercise-10
/*const Show = () =>{
    return(<div>
    <button onClick={()=>{console.log("You have clicked the button")}}>Click Me And Check Console</button>
    </div>
    )
}*/

//Exercise-11
/*const Show = () =>{
    const [name,setname] = useState('Pritam')
    return(<div>
    {name}
    <button onClick={()=>{setname("Ashish")}}>Toggle</button>
    </div>
    )
}*/

//Exercise-12
/*const Show = () =>{
    const [num1,setnum1] = useState(0)
    const [num2,setnum2] = useState(0)
    const [result,setresult] = useState(0)
    return(<div>
        <input type="number" onChange={(e)=>{setnum1(parseInt(e.target.value))}}></input>
        <br/>
        <input type="number" onChange={(e)=>{setnum2(parseInt(e.target.value))}}></input>
        <br/>
        <button onClick={()=>{setresult(num1+num2)}}>Add</button>
        <br/>
        {result}   
    </div>
    )
}*/


//export default Show