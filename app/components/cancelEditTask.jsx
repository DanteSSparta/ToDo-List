var React = require("react");

class CancelEditTask extends React.Component{
    constructor(props) {
        super(props);
    }

    render()
    {
        return <div>
            <button onClick={this.props.action}>Отмена</button>
        </div>
    }
}
module.exports = CancelEditTask;
