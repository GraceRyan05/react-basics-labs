import React from 'react';

const Task = (props) => {
    
       return (
        <div className="card">
            <b><p classname="title">{props.title}</p></b>
            <p>Due: {props.deadline}</p>
            <i><p classname="description">{props.description}</p></i>
        </div>
    )
}

export default Task;