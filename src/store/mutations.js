import * as types from "./mutations-types.js";

export default {
  //Fetch de los paneles creados por el usuario
  [types.FETCH_BOARDS_REQUESTS](state) {
    state.fetchingData = true;
    state.error = null;
  },

  [types.FETCH_BOARDS_SUCCESS](state, { boards }) {
    state.fetchingData = false;
    state.error = null;
    state.boards = boards;
  },

  [types.FETCH_BOARDS_FAILURE](state, { error }) {
    state.fetchingData = false;
    state.error = error;
  },
  //Fetch de las listas de un determinado panel
  [types.FETCH_LISTS_REQUESTS](state) {
    state.fetchingData = true;
    /* state.error = null; */
  },

  [types.FETCH_LISTS_SUCCESS](state, { lists }) {
    state.fetchingData = false;
    state.error = null;
    state.lists = { ...lists };
  },

  [types.FETCH_LISTS_FAILURE](state) {
    state.fetchingData = false;
    state.error = null;
  },
  //Fetch de las tareas correspondientes a una lista
  [types.FETCH_TASKS_REQUESTS](state) {
    state.fetchingData = true;
    state.error = null;
  },

  [types.FETCH_TASKS_SUCCESS](state, { tasks }) {
    state.fetchingData = false;
    state.error = null;
    state.tasks = { ...tasks };
  },

  [types.FETCH_TASKS_FAILURE](state, { error }) {
    state.fetchingData = false;
    state.error = error;
  },

  //Crear un nuevo panel

  [types.ADD_REQUEST](state) {
    state.error = null;
  },

  [types.ADD_BOARD](state, { board }) {
    state.boards = board;
  },
  //Crear una lista de tares
  [types.ADD_COLUMN](state, { column }) {
    state.lists[column.id] = column;
  },
  //Añadir una nueva tarea a una lista
  [types.ADD_TASK](state, { task }) {
    state.tasks[task.id] = task;
  },

  //Borrar una tarea de una lista de tareas
  [types.DELETE_TASK](state, { taskiD }) {
    state.tasks = Object.values(state.tasks).filter(
      (task) => task.id !== taskiD
    );
  },

  //Marca como completada tarea
  [types.MARK_AS_COMPLETED](state, { task }) {
    task.completed = !task.completed;
  },
};
