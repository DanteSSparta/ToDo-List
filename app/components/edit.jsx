var React = require("react");
var SaveEditTask = require('./saveEditTask.jsx');
var CancelEditTask = require('./cancelEditTask.jsx');

class Edit extends React.Component{
    constructor(props) {
        super(props);
    }

    SaveTask(){
        if(this.refs.editInput.value!=="")
            this.props.saveEditTask(this.props.task.id,this.refs.editInput.value);
        else
            this.props.deleteTask(cancelEditTask);
    }

    CancelTask(){
        this.props.cancelEditTask(this.props.task.id);
    }

    render(){
        return <div>
            <input  ref="editInput"/>
            <SaveEditTask action={this.SaveTask.bind(this)}/>
            <CancelEditTask action={this.CancelTask.bind(this)}/>
        </div>
    }
};
module.exports = Edit;
