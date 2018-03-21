var React = require("react");
var Link = require('./link.jsx');

class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.ChangeFilter.bind(this);
    }

    ChangeFilter(filter){
        this.props.changeFilter(filter);
    }

    render(){
        return <div>
            <Link action={this.ChangeFilter.bind(this)} name="all"/>
            <Link action={this.ChangeFilter.bind(this)} name="done"/>
            <Link action={this.ChangeFilter.bind(this)} name="active"/>
        </div>
    }
}
module.exports = Footer;
