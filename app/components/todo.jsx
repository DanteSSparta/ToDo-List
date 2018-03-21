var React = require("react");
var DeleteBtn = require('./deleteBtn.jsx');
var EditBtn = require('./editBtn.jsx');

class ToDo extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            id: props.task.id,
            done: props.task.done,
        }
    }

    DoneOrActionTask(){
        this.props.changeStateTask(this.props.task.id);
        this.setState({done: this.props.task.done});
    }

    render(){
        const {done} = this.state;
        switch (this.props.filter) {
            case "all":
                return <div className="todo_block">
                    <li id={this.props.task.id} style={{textDecorationLine:(done?"line-through":"none")}} onClick={this.DoneOrActionTask.bind(this)}>{this.props.task.text}</li>
                    <EditBtn editAction={this.props.editTask} id={this.props.task.id}/>
                    <DeleteBtn deleteAction={this.props.deleteTask} id={this.props.task.id}/>
                </div>
                break;
            case "done":
                if(done)
                    return <div className="todo_block">
                        <li id={this.props.task.id} style={{textDecorationLine:(done?"line-through":"none")}} onClick={this.DoneOrActionTask.bind(this)}>{this.props.task.text}</li>
                        <EditBtn editAction={this.props.editTask} id={this.props.task.id}/>
                        <DeleteBtn deleteAction={this.props.deleteTask} id={this.props.task.id}/>
                    </div>
                else
                    return(null);
                break;
            case "active":
                if(!done)
                    return <div className="todo_block">
                        <li id={this.props.task.id} style={{textDecorationLine:(done?"line-through":"none")}} onClick={this.DoneOrActionTask.bind(this)}>{this.props.task.text}</li>
                        <EditBtn editAction={this.props.editTask} id={this.props.task.id}/>
                        <DeleteBtn deleteAction={this.props.deleteTask} id={this.props.task.id}/>
                    </div>
                else
                    return(null);
                break;
            default:
                return(null)
                break;
        }
    }
};

module.exports = (ToDo);
