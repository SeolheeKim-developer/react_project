import React from 'react';

const todoItems = [
    { id: 1, title : "Learn React", isDone : true },
    { id: 2, title:"Learn JavaScript", isDone: true },
    {id: 3, title:"Learn ASP.NET Core", isDone: false },

]

function TodoItem(props) {
    const isDoneStyle = {
        textDecoration: "line-through",
    };
    return (
        <li>
            <input
                type="checkbox"
                checked={props.item.isDone}
                onChange={() => props.handleCheckedChange(props.item.id)}
            ></input>
            <span style={props.item.isDone ? isDoneStyle : null}>{props.item.title}</span>
        </li>
    );
}

class TodoListInMemory extends React.Component {
    constructor() {
        super();
        this.state = {
            todos: todoItems,
            todoItem:"",
        };
        this.handleCheckedChange = this.handleCheckedChange.bind(this);
        this.handleChangeTodoItem = this.handleChangeTodoItem.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleCheckedChange(id) {
        this.setState(prev => {
            const modified = prev.todos.map(todo => {
                if (todo.id === id) {
                    todo.isDone = !todo.isDone;
                }
                return todo;
            });
            return {
                todos: modified
            }
        });
    }

    handleChangeTodoItem(e) {
        this.setState({ todoItem: e.target.value });
    }

    handleChange(e) {
        e.preventDefault();
        let todos = this.state.todos;
        let maxId = Math.max.apply(Math, todos.map(t => t.id));

        let newTodo = { id: maxId + 1, title: this.state.todoItem, isDone: false };

        todos.push(newTodo);

        this.setState({todos:todos, todoItem:""});
    }

    render() { 
        const todos = this.state.todos.map((todo) => <TodoItem key={todo.id} item={todo} handleCheckedChange={this.handleCheckedChange} />);
    return (
        <>
            <h3>simple doto list in memory</h3>
            <div>
                <form onSubmit={ this.handleChange}>
                    <input type="text" value={this.state.todoItem}
                        onChange={this.handleChangeTodoItem}></input>
                    <input type="submit" value="Add"></input>

                </form>
            </div>
            <ul>
                { todos}
                {/*<TodoItem />*/}
                {/*<TodoItem />*/}
                {/*<TodoItem />*/}
                {/*<li>*/}
                {/*    <input type="checkbox"></input>*/}
                {/*    Learn React*/}
                {/*</li>*/}
                {/*<li>*/}
                {/*    <input type="checkbox"></input>*/}
                {/*    Learn C#*/}
                {/*</li>*/}
                {/*<li>*/}
                {/*    <input type="checkbox"></input>*/}
                {/*    Learn ASP.NET Core Web API */}
                {/*</li>*/}
            </ul>
        </>
    );
    }
}

export default TodoListInMemory