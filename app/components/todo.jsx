var React = require("react");
var DeleteBtn = require('./deleteBtn.jsx');
var EditBtn = require('./editBtn.jsx');

class ToDo extends React.Component{
    constructor(props) {
        super(props);
    }

    DoneOrActionTask(){
        this.props.changeStateTask(this.props.task.id);
    }

    render(){
        switch (this.props.filter) {
            case "all":
                return <div>
                    <li id={this.props.task.id} style={{textDecorationLine:(this.props.task.done?"line-through":"none")}} onClick={this.DoneOrActionTask.bind(this)}>{this.props.task.text}</li>
                    <EditBtn editAction={this.props.editTask} id={this.props.task.id}/>
                    <DeleteBtn deleteAction={this.props.deleteTask} id={this.props.task.id}/>
                </div>
                break;
            case "done":
                if(this.props.task.done)
                    return <div>
                        <li id={this.props.task.id} style={{textDecorationLine:(this.props.task.done?"line-through":"none")}} onClick={this.DoneOrActionTask.bind(this)}>{this.props.task.text}</li>
                        <EditBtn editAction={this.props.editTask} id={this.props.task.id}/>
                        <DeleteBtn deleteAction={this.props.deleteTask} id={this.props.task.id}/>
                    </div>
                else
                    return(null);
                break;
            case "active":
                if(!this.props.task.done)
                    return <div>
                        <li id={this.props.task.id} style={{textDecorationLine:(this.props.task.done?"line-through":"none")}} onClick={this.DoneOrActionTask.bind(this)}>{this.props.task.text}</li>
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
module.exports = ToDo;
