var React = require("react");
var SaveEditTask = require('./saveEditTask.jsx');
var CancelEditTask = require('./cancelEditTask.jsx');

class Edit extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            text: "",
            id: props.task.id,
        }
    }

    SaveTask(){
        if(this.refs.editInput.value!==""){
            this.props.saveEditTask(this.props.task.id,this.refs.editInput.value);
            this.setState({text: this.refs.editInput.value, id: this.props.task.id});
        }
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
