var React = require("react");

class Link extends React.Component {
    constructor(props) {
        super(props);
    }

    onClick(){
        this.props.action(this.props.name);
    }

    render(){
        return(
            <a id={this.props.name} style={{alignItems: 'center'}} onClick={this.onClick.bind(this)}>{this.props.name}</a>
        )
    }
}
module.exports = Link;
