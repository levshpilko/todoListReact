import React from 'react';

import classes from './TodoItem.module.css';

const TodoItem = (props) => {
    let done = {}
    if (props.completed)
        done = {
            textDecoration: 'line-through',
            color: '#bdc3c7'
        }

    return (
        <div>
            <li
                className={classes.Task}
                style={done}
                onClick={props.toggle}>
                {props.name}
                <span className={classes.Delete} onClick={props.delete} style={{ color: 'red' }}>X</span>
            </li>

        </div>
    );

};

export default TodoItem; 