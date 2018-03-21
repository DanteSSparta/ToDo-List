var React = require("react");
var ToDo = require('./todo.jsx');
var Edit = require('./edit.jsx');

class ToDoList extends React.Component{
    constructor(props) {
        super(props);
        this.ShowTask.bind(this);
    }

    ShowTask(task){
        if(!task.edit){
            return(
                <ToDo
                    key={task.text}
                    task={task}
                    {...this.props}/>
            )
        }
        else {
            return(
                <Edit
                    key={task.text}
                    task={task}
                    {...this.props}/>
            )
        }
    }

    render(){
    if(this.props.tasks.last())
        return <div>
        {this.props.tasks.map(item =>
            this.ShowTask(item)
        )}
        </div>
    else
        return(null);
    }
};

module.exports = ToDoList;
