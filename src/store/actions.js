import * as types from "./mutations-types.js";
import API from "../api/index.js";

export default {
  //Fetch de los paneles
  fetchBoards({ commit }) {
    commit(types.FETCH_BOARDS_REQUESTS);
    API.getBoards()
      .then((res) => {
        commit(types.FETCH_BOARDS_SUCCESS, { boards: res["data"] });
      })
      .catch((error) => commit(types.FETCH_BOARDS_FAILURE, { error }));
  },
  //Fecth de las listas asociadas a un panel

  fetchLists({ commit }) {
    commit(types.FETCH_LISTS_REQUESTS);
    API.getBoards()
      .then((res) => commit(types.FETCH_LISTS_SUCCESS, res))
      .catch((error) => commit(types.FETCH_LISTS_FAILURE, { error }));
  },

  //Fecth de las tareas asociadas a un lista

  fetchTasks({ commit }) {
    commit(types.FETCH_TASKS_REQUESTS);
    API.getTasksFromList()
      .then((res) => commit(types.FETCH_TASKS_SUCCESS, res))
      .catch((error) => commit(types.FETCH_TASKS_FAILURE, { error }));
  },

  //Añadir un nuevo panel
  addBoard({ commit }, { name }) {
    commit(types.FETCH_TASKS_REQUESTS);
    API.postBoard(name)
      .then((res) => console.log(res) /* commit(types.ADD_BOARD, res) */)
      .catch((error) => console.log(error));
  },

  //Añadir una nueva lista

  addColumn({ commit }, { boardId, name }) {
    API.postList(boardId, name)
      .then((res) => commit(types.ADD_COLUMN, res))
      .catch((error) => console.log(error));
  },
  //Añadir una nueva tarea
  addTask({ commit }, { boardId, listId, title }) {
    API.postTask(boardId, listId, title)
      .then((res) => commit(types.ADD_TASK, res))
      .catch((error) => console.log(error));
  },

  //Borrar una  tarea
  deleteTask({ commit }, { boardId, listId, taskId }) {
    API.deleteTask(boardId, listId, taskId)
      .then((res) => commit(types.DELETE_TASK, res))
      .catch((error) => console.log(error));
  },

  //Borrar una  tarea
  marksAsCompleted({ commit }, { boardId, listId, taskId, task }) {
    API.completedTask(boardId, listId, taskId, task)
      .then((res) => commit(types.MARK_AS_COMPLETED, res))
      .catch((error) => console.log(error));
  },
};
