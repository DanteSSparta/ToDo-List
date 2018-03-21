var React = require("react");

class EditBtn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id : props.id,
        }
    }

    EditTask(){
        this.props.editAction(this.props.id);
        this.setState({id: this.props.id});
    }

    render(){
        return <div className="Btn">
            <button onClick={this.EditTask.bind(this)}>Изменить</button>
        </div>
    }
}
module.exports = EditBtn;
