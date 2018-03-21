var React = require("react");

class Input extends React.Component{
    constructor(props) {
        super(props);
        this.CreateTask.bind(this);
    }

    CreateTask(text){
        var id = 0;
        if(this.props.tasks.last())
        {
            id = this.props.tasks.last().id+1;
        }
        var task = {
            id: id,
            text: text,
            done: false,
            edit: false
        };
        return task;
    }

    onClick() {
        if (this.refs.TaskInput.value !== "") {
            var itemText = this.refs.TaskInput.value;
            this.refs.TaskInput.value ="";
            return this.props.addTask(this.CreateTask(itemText));
        }
    }

    onPressKey(e){
        if(e.keyCode === 13 && this.refs.TaskInput.value !== ""){
            var itemText = this.refs.TaskInput.value;
            this.refs.TaskInput.value ="";
            return this.props.addTask(this.CreateTask(itemText));
        }
    }

    render() {
        return <div className="AddForm">
                <input className="inputTB" ref="TaskInput" onKeyDown={this.onPressKey.bind(this)}/>
                <button id="addButton" onClick = {this.onClick.bind(this)}>Добавить</button>
            </div>
    }
};
module.exports = Input;
