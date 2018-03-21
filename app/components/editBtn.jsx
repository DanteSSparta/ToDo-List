var React = require("react");

class EditBtn extends React.Component {
    constructor(props) {
        super(props);
    }

    EditTask(){
        this.props.editAction(this.props.id);
    }

    render(){
        return <div>
            <button onClick={this.EditTask.bind(this)}>Изменить</button>
        </div>
    }
}
module.exports = EditBtn;
