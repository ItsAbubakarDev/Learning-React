import { useState } from "react";



function UpdateCount(){
    
        const [count , setCount] = useState(0);
        let incCount = () =>{
            setCount(count+1);
        }
    
    
    return (<div>
    
        <h3>Count = {count}</h3>
        <button onClick={incCount} >Click me</button>
        </div>)
}

export default UpdateCount