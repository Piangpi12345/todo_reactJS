import React, { Component } from 'react';
import TodoItem from '../TodoItem/TodoItem';

// function Todos(pep) {
//     return <div>
//         <h3>{pep.title}</h3>
//         I am todos
//         <TodoItem/>
//     </div>
// }

// const Todos = pep => (
//     <div>
//         {pep.title}
//         <TodoItem title='learn react'/>
//         <TodoItem title='pratice react'/>

//     </div>
// );

class Todos extends Component {
    // constructor(props){
    //     super(props); 
    //     this.state = {
    //         todos: [
    //             {
    //                 id: 1,
    //                 title: "learn react"
    //             },
    //             {
    //                 id: 2,
    //                 title: "pratice react"
    //             }
    //         ],
    //         todoTitle: ""
    //     };

    //     // this.handleChange = this.handleChange.bind(this);
    // };

    state = {
        todos: [
            // {
            //     id: 1,
            //     title: "learn react"
            // },
            // {
            //     id: 2,
            //     title: "pratice react"
            // }
        ],
        todoTitle: ""
    };

    componentDidMount() {
        console.log("mounted");
        fetch("https://jsonplaceholder.typicode.com/todos")
        .then(res => res.json())
        .then(data => this.setState({ todos: data}));
    }

    componentDidUpdate(){
        console.log('update');
    }

    componentWillUnmount(){
        console.log("destory");
    }

    handleChange = e => {
        this.setState({
            // todoTitle: e.target.value
            [e.target.name]: e.target.value
        });
    }

    createNewTodo = e => {
        const todos = [...this.state.todos];
        // const id = todos.length ? todos[todos.length - 1].id + 1 : 1;
        const id = todos.length ? todos.length + 1 : 1;

        todos.push({ id, title: this.state.todoTitle });

        this.setState({ todos });
    };

    deleteTodo = id => {
        const todos = [...this.state.todos];
        // const index = todos.findIndex(todo => todo.id === id)

        this.setState({ todos: todos.filter(todo => todo.id !== id) });
    }

    updateTodo = data => {
        const todos = [...this.state.todos];

        const index = todos.findIndex(todo => todo.id === data.id);
        todos[index].title = data.title;
        this.setState(todos)
    }

    render = () => {
        console.log('render')
        return (
            <div>
                <h1>{this.props.title}</h1>
                <input
                    style={{ marginLeft: "-1rem" }} type="text" name='todoTitle' value={this.state.todoTitle} onChange={this.handleChange} />
                <button onClick={this.createNewTodo}>Save</button>
                <ul>
                    {/* <TodoItem title={this.state.todos.map(todo => (
                    // <li>{todo.id}</li>,
                    <li>{todo.title}</li>
                ))}/> */}
                    {this.state.todos.map(todo => (
                        <TodoItem
                            title={todo.title}
                            key={todo.id}
                            deleteTodo={this.deleteTodo}
                            id={todo.id}
                            updateTodo={this.updateTodo}
                        />

                    ))}
                </ul>
            </div>
        );
    };

}

export default Todos;