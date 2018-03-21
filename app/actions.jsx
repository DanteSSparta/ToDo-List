var addTask = (task) => {
    return{
        type: "ADD_TASK",
        task
    }
};
var deleteTask = (id) => {
    return{
        type: "DELETE_TASK",
        id
    }
};
var changeStateTask = (id) => {
    return{
        type: "CHANGE_STATE_TASK",
        id
    }
};
var editTask = (id) => {
    return{
        type: "EDIT_TASK",
        id
    }
};
var saveEditTask = (id, text) => {
    return{
        type: "SAVE_EDIT_TASK",
        id,
        text
    }
};
var cancelEditTask = (id) => {
    return{
        type: "CANCEL_EDIT_TASK",
        id
    }
};
var changeFilter = (filter) => {
    return{
        type: "CHANGE_FILTER",
        filter
    }
};
module.exports = {addTask, deleteTask, changeStateTask, editTask, saveEditTask, cancelEditTask, changeFilter};
