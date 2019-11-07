import React, { Component } from 'react';

import classes from './TodoForm.module.css';

class TodoForm extends Component {
    state = {
        inputVal: ''
    };

    inputHandler = (event) => {
        const newState = this.state;
        newState.inputVal = event.target.value;
        this.setState(newState);
    }

    todoSubmitHandler = (event) => {
        event.preventDefault();
        this.props.addTodo(this.state.inputVal);
        const newState = this.state;
        newState.inputVal = '';
        this.setState(newState);
    }
    render() {
        return (
            <div className={classes.Form}>
                <form onSubmit={this.todoSubmitHandler}>
                    <input
                        className={classes.TodoInput}
                        type="text"
                        placeholder="Insert your task here..."
                        value={this.state.inputVal}
                        onChange={(event) => this.inputHandler(event)}
                    />
                </form>
            </div>
        );
    }
}

export default TodoForm; 