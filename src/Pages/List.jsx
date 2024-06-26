    import React from "react";
    import Todolist from "./Todo";
    export default function TodoList(){
        let [InputList,setInputList]=React.useState('');
        let [Items,setItems]=React.useState([]);
        function itemEvent(e){
            setInputList(e.target.value)
        }
        function listOfItems(){
            setItems((oldItems)=>{
            return [...oldItems,InputList]
            })
            setInputList('');
        }
        function deleteItems(id){
        console.log('deleted');
        setItems((oldItems)=>{
            return oldItems.filter((arr,index)=>{
                return index!==id;
            })
        })
        }
    //html content
        return(
            <div className="main_div">
                <div className="div_center">
                    <br/>
        <h1 className="text-center">ToDo List</h1> 
        <br/>
        <input type='text' placeholder="Add a item" value={InputList} onChange={itemEvent}/>
        <button onClick={listOfItems} >+</button>

        <ol>
        
                {Items.map((itemValue,index)=>{
                return <Todolist key={index} 
                id={index} 
                text={itemValue} 
                onSelect={deleteItems}/>
                })}
        
        </ol>

        </div>
        </div>
        )
    }
