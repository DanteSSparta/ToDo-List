var React = require("react");

class DeleteBtn extends React.Component {
    constructor(props) {
        super(props);
    }

    DeleteTask(){
        this.props.deleteAction(this.props.id);
    }

    render(){
        return <div className="Btn">
            <button onClick={this.DeleteTask.bind(this)}>Удалить</button>
        </div>
    }
}
module.exports = DeleteBtn;
