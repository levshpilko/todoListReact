import React, { Component } from 'react';
import axios from 'axios';

import TodoItem from '../../components/TodoItem/TodoItem';
import TodoForm from '../TodoForm/TodoForm';
import classes from './TodoList.module.css';

const APIURL = '/api/todos';

class TodoList extends Component {
    state = {
        todos: []
    }

    componentDidMount() {
        this.loadTodos();
    };

    loadTodos = () => {
        axios.get(APIURL)
            .then(res => this.setState({ todos: res.data }))
            .catch(err => 'Please try again later, server is not responding');
    }

    addTodoHandler = (newTodo) => {
        axios.post(APIURL, { name: newTodo })
            .then(res => {
                const todos = [...this.state.todos];
                todos.push(res.data);
                this.setState({ todos });
            })
            .catch(err => 'Please try again later, server is not responding');
    }

    deleteTodoHandler = (id) => {
        axios.delete(`${APIURL}/${id}`)
            .then(() => {
                const todos = this.state.todos.filter(todo =>
                    todo._id !== id);
                this.setState({ todos });
            })
            .catch(err => 'Please try again later, server is not responding');
    }

    todoToggleHandler = (todo) => {
        axios.put(`${APIURL}/${todo._id}`, { completed: !todo.completed })
            .then(res => {
                const todos = this.state.todos.map(todo =>
                    (todo._id === res.data._id)
                        ? { ...todo, completed: !todo.completed }
                        : todo);
                this.setState({ todos });
            })
            .catch(err => 'Please try again later, server is not responding');
    }

    render() {
        const todos = this.state.todos.map(todo => (
            <TodoItem
                key={todo._id}
                {...todo}
                toggle={() => this.todoToggleHandler(todo)}
                delete={() => this.deleteTodoHandler(todo._id)}
                completed={todo.completed} />
        ))

        return (
            <div>
                <TodoForm addTodo={this.addTodoHandler} />
                <ul className={classes.List}>
                    {todos}
                </ul>
            </div>
        );
    };
};

export default TodoList; 