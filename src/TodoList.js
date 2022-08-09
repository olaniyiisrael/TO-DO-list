import {Component} from "react";


class TodoList extends Component{

    constructor(){
        super();
        this.state = {
            newTask: '',
            TodoList: [
                // {title: 'wash', done: false},
                // {title: 'cook', done: false}
            ]
        }
    }
    

addItemToTask = (event) => {

    event.preventDefault();
    if (this.state.newTask.length < 1){
        alert("Please Add a Task!");
        return;
    }
    // console.log(event);
    const newArr = [...this.state.TodoList]
    newArr.push({title: this.state.newTask, done: false});
    this.setState({TodoList: [...newArr], newTask: ''})
}


        taskIsDone = (id) => {
            // console.log(id)
            let TodoList2 = [...this.state.TodoList];
            TodoList2[id] = {...TodoList2[id], done: !TodoList2[id].done};
            this.setState({TodoList: TodoList2});
            // const data = [...this.state.todoItems]
            // const index = data.findIndex
        }

    render(){

        console.log(this.state)
        return(
        <div>
            <h1>To Do List</h1>
            <form onSubmit={this.addItemToTask}>
            <p>What Should I Be Doing?</p>
            <input value={this.state.newTask} onChange={(event)=>this.setState({newTask: event.target.value})} type="text" placeholder="Add Task!"/>
            <button type="submit">Add Task</button>
            </form>
            
            <ul>
                {
                    this.state.TodoList?.map((item, id) => (
                        <li onClick={
                            () => this.taskIsDone(id)   
                        }
                        style={{textDecoration: item.done ? 'line-through': '' }}>{item.title}</li>
                    ))
                }
            </ul>

        </div>
        )
    }
}


export default TodoList