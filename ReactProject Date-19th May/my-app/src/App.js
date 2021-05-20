import logo from './logo.svg';
import './App.css';
import Show from './Exercise'
import {useContext,useEffect,useState} from 'react';
import Books from './Books'
//Exercise-1
/*function App() {
  return (
    <div className="App">
    <Show/>
    <Show/>
    <Show/>
    </div>
  );
}*/

//Exercise-2
/*function App() {
  return (
    <div className="App">
    <Show name="Pritam Saha" phone="8240381969"/>
    <Show name="Ashish Saha" phone="9433317242"/>
    </div>
  );
}*/

//Exercise-3
/*function App() {
  return (
    <div className="App">
    <Show name="Pritam Saha" phone="8240381969"/>
    <Show name="Ashish Saha" phone="9433317242"/>
    </div>
  );
}*/

//Exercise-4 Printing Iteratively From Array Of Objects
/*function App() {
  const contact = [{name:"Pritam Saha",phone:"8240381969"},
                  {name:"Ashish Saha",phone:"94333172424"}
                ]
  return (
    <div className="App">
    {
      contact.map((contact)=>{
        return <Show name={contact.name} phone={contact.phone}/>
      })
    }
    </div>
  );
}*/

//Exercise-5 Advanced Version of Exercise-4 Preventing JSX From Bloating
/*function App() {
  const contact = [{name:"Pritam Saha",phone:"8240381969"},
                  {name:"Ashish Saha",phone:"94333172424"}
                ]
  
  const htmlpart =  contact.map((contact)=>{
    return <Show name={contact.name} phone={contact.phone}/>
  })

  return (
    <div className="App">
    { htmlpart}
    </div>
  );
}*/

//Exercise 6,7,8,9,10 (Note :- Open Console In Web Browser) And 11,12 UseSate Demo ( No Need For Console)
/*function App() {
  return (
    <div className="App">
    <Show/>
    </div>
  );
}*/

//Exercise 13 Random Color Change Using Use State
/*function App() {
  const [ui,setui] = useState({})
  return (
    <div className="App" style={ui}>
    <button onClick={()=>{
      const r =Math.floor(Math.random()*255)
      const g =Math.floor(Math.random()*255)
      const b =Math.floor(Math.random()*255)
      setui({backgroundColor:`rgb(${r},${g},${b})`})}}>click me</button>
    </div>
  );
}*/

//Exercise 14,15,16
function App() {
  return (
    <div className="App">
    <Books/>
    </div>
  );
}



export default App;
