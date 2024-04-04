import React from "react";

export default function Todolist(props){
    
    return(

    <>
    <div className="todo_list">
       
     <li> {props.text}
     <span className="btn btn-danger mx-2" onClick={()=>{
        props.onSelect(props.id)
     }}>x</span>
        </li>
     </div>
    </>

    )
}