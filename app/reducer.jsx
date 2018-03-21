var Map = require("immutable").Map;

var reducer = function(state = Map(), action) {
  switch (action.type) {
    case "SET_STATE":
        return state.merge(action.state);
    case "ADD_TASK":
        return state.update("tasks", (tasks) => tasks.push(action.task));
    case "DELETE_TASK":
        return state.update("tasks",
            (tasks) => tasks.filterNot(
                (item) => item.id === action.id
            )
        );
    case "CHANGE_STATE_TASK":
        return state.update("tasks",(tasks) => {
            let objIndex = tasks.findIndex((obj => obj.id == action.id));
            tasks._tail.array[objIndex].done = !tasks._tail.array[objIndex].done;
            return tasks;
        });
        break;
    case "EDIT_TASK":
        return state.update("tasks",function(tasks){
            let objIndex = tasks.findIndex((obj => obj.id == action.id));
            tasks._tail.array[objIndex].edit = true;
            return tasks;
        });
        break;
    case "CANCEL_EDIT_TASK":
        return state.update("tasks",function(tasks){
            let objIndex = tasks.findIndex((obj => obj.id == action.id));
            tasks._tail.array[objIndex].edit = false;
            return tasks;
        });
        break;
    case "SAVE_EDIT_TASK":
        return state.update("tasks",function(tasks){
            let objIndex = tasks.findIndex((obj => obj.id == action.id));
            tasks._tail.array[objIndex].edit = false;
            tasks._tail.array[objIndex].text = action.text;
            return tasks;
        });
        break;
    case "CHANGE_FILTER":
        return state.update("filter", function(filter){
                return action.filter;
        });
        break;
  }
  return state;
}
module.exports = reducer;
