import React, {Component} from 'react'

class Todos extends Component{
    constructor(){
        super();

        this.state={
            todos:[],
            todo:''
        }
    }

    onTodoChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    addTodo=(e)=>{
        e.preventDefault();

        this.setState({
            todos:[
                ...this.state.todos,
                this.state.todo
            ],
            todo:''
        })
    }

    render(){
        return(
            <div>
                <h1>Todos</h1>
                <input type="text" name="todo" value={this.state.todo} onChange={this.onTodoChange}/> 
                <button onClick={this.addTodo}>Add Todo</button>
                <ul>
                {
                    this.state.todos.map((todo, index)=>{
                        return <li key={index}>{todo}</li>
                    })
                }
                </ul>
            </div>
        )
    }
}

export default Todos;