import React from 'react';

const Input = (props) => {
    const {list, setList} = props;
    let task ={
        name:"",
        isComplete: false
    };
    const onChange = (e) => {
        task.name = e.target.value;
    }

    const onClick = (e) => {
        setList([...list, task]);
        e.target.value = "";
    }


    return(
        <div className="container">

            <div>
                <input onChange ={onChange} type ="text" name="task"/>
                <button className="btn btn-primary btn-block" onClick={onClick} >Submit</button>
            </div>
        </div>
    );
}

export default Input;