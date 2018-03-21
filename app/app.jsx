var React = require("react");
var ReactDOM = require("react-dom");
var redux = require("redux");
var Provider = require("react-redux").Provider;
var reducer = require("./reducer.jsx");
var AppView = require("./components/appView.jsx");
// import style from './app.css'
const enhancers = redux.compose(
	window.devToolsExtension ? window.devToolsExtension() : f => f
);

var store = redux.createStore(reducer, enhancers);

store.dispatch({
  type: "SET_STATE",
  state: {
    tasks: [],
    filter: "all"
  }
});

ReactDOM.render(
  <Provider store={store}>
    <AppView />
  </Provider>,
  document.getElementById("container")
);
