var React = require("react");

class SaveEditTask extends React.Component{
    constructor(props) {
        super(props);
    }

    render()
    {
        return <div>
            <button onClick={this.props.action}>Сохранить</button>
        </div>
    }
}
module.exports = SaveEditTask;
