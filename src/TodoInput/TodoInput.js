import React, {Component} from 'react';
import './TodoInput.css';


class todoinput extends Component {


    

    state = {
        task : "",
        todolist: []
    }

    keypressHandler = (event)=>{
        if(event.key === 'Enter')
        {
            this.buttonClickHandler();
        }
    }

    changeHandler = (event)=> {

        this.setState(
            {
                task: event.target.value
            }
        )

    }

    buttonClickHandler = () => {

        if(this.state.task){
            let updatedTodolist = [...this.state.todolist];
            updatedTodolist.push(this.state.task);
            this.setState({
                todolist : updatedTodolist
            })

            this.refs.inputbox.value = "";
            
        }
        else{
            alert("The field's empty");
        }


    }

    deleteHandler = (index) => {
       let updatedTodolist = [...this.state.todolist]
       updatedTodolist.splice(index,1);
       this.setState({
            todolist: updatedTodolist
       })
    }




    render(){

        let displayText = (
                            <div style = {{padding: '40px' ,textAlign:'center',color: '#666'}}>
                                NO ANY TODOS!!
                            </div>
                            );

        if(this.state.todolist.length){

              displayText = this.state.todolist.map(
                                (value,index) => {
                                    return (
                                        <div className = 'Todolist'
                                             key = {index}>
                                            <div className = 'Todolist_Card'>
                                                {value}
                                            </div>
                                            <div className = 'Todolist_delete'>
                                                <button onClick = {() => this.deleteHandler(index)}>
                                                    &times;
                                                </button>
                                            </div>
                                        </div>
                                    )
                                }
                            )
        }




        return(
            <div className = 'TodoListContainer' >

                <div className = 'Label'>
                    ADD YOUR LIST!!
                </div>

                <div className = "InputField">
                    <input type = 'text' 
                           placeholder = 'Enter any task' 
                           onKeyPress = {this.keypressHandler}
                           onChange = {this.changeHandler}
                           ref = "inputbox"
                            />

                     <button onClick = {this.buttonClickHandler}>ADD</button>      
                </div>

                <div className = 'Todolistbox'>
                {displayText}
                </div>


                


            </div>
        )
    }
}

export default todoinput;