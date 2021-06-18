import React, { useState } from 'react';

const Todo = () => { 
    const [inputD ,setInputd] = useState(" ");
    const [inputList ,setInputList] = useState([]);

    const inputEvent = (e) =>{
        setInputd(e.target.value)
    }
    
    const buttonList = () => {
        setInputList((oldData)=>{
            return [...oldData,inputD];
        });        
        setInputd("");
    }


    return(
        <>
        <br/>
        <h1 className="text-center bg-warning p-3 mb-2"> todo app</h1>
        <div className=" m-5">
        <input type="text" value={inputD} onChange={inputEvent} placeholder="add a note" />
        <button onClick={buttonList}> add note </button>
        <ul>
            {
                inputList.map((ele) => {
                    return <li> {ele}</li>
                })
            }
            
        </ul>

        </div>
        </>

    );
    
}
export default Todo;