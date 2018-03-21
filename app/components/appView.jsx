var React = require("react");
var connect = require("react-redux").connect;
var actions = require("../actions.jsx");
var Input = require('./input.jsx');
var ToDoList = require('./todolist.jsx');
var Footer = require('./footer.jsx');

class AppView extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){
      return <div>
          <h2>ToDo List</h2>
          <Input {...this.props}/>
          <ToDoList {...this.props}/>
          <Footer {...this.props}/>
      </div>
  }
};

function mapStateToProps(state) {
  return {
    tasks: state.get("tasks"),
    filter: state.get("filter")
  };
}

module.exports = connect(mapStateToProps, actions)(AppView);
