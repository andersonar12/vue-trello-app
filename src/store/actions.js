import * as types from "./mutations-types.js";
import API from "../api/index.js";

export default {
  //Fetch de los paneles
  async fetchBoards({ commit }) {
    commit(types.FETCH_BOARDS_REQUESTS);
    await API.getBoards()
      .then((res) => {
        commit(types.FETCH_BOARDS_SUCCESS, { boards: res["data"] });
      })
      .catch((error) => commit(types.FETCH_BOARDS_FAILURE, { error }));
  },
  //Fecth de las listas asociadas a un panel

  async fetchLists({ commit }, { boardId }) {
    commit(types.FETCH_LISTS_REQUESTS);
    await API.getListsFromBoard(boardId)
      .then((res) => {
        commit(types.FETCH_LISTS_SUCCESS, { lists: res.data["lists"] });
      })
      .catch((error) => commit(types.FETCH_LISTS_FAILURE, { error }));
  },

  //Fetch de las tareas asociadas a un lista

  async fetchTasks({ commit }, { boardId, listId }) {
    commit(types.FETCH_TASKS_REQUESTS);
    await API.getTasksFromList(boardId, listId)
      .then((res) =>
        commit(types.FETCH_TASKS_SUCCESS, { tasks: res.data["tasks"] })
      )
      .catch((error) => commit(types.FETCH_TASKS_FAILURE, { error }));
  },

  //Añadir un nuevo panel
  async addBoard({ commit }, { name }) {
    commit(types.ADD_REQUEST);
    await API.postBoard(name)
      .then(
        (res) => console.log("addBoard", res) /* commit(types.ADD_BOARD, res) */
      )
      .catch((error) => console.log(error));
  },

  //Añadir una nueva lista

  async addColumn({ commit }, { boardId, name }) {
    commit(types.ADD_REQUEST);
    await API.postList(boardId, name)
      .then((res) => {
        console.log("addList", res);
      })
      .catch((error) => console.log(error));
  },
  //Añadir una nueva tarea
  async addTask({ commit }, { boardId, listId, title }) {
    commit(types.ADD_REQUEST);
    await API.postTask(boardId, listId, title)
      .then((res) => console.log("addTask", res))
      .catch((error) => console.log(error));
  },

  //Borrar una  tarea
  async deleteTask({ commit }, { boardId, listId, taskId }) {
    commit(types.ADD_REQUEST);
    await API.deleteTask(boardId, listId, taskId)
      .then((res) => console.log("deleteTask", res))
      .catch((error) => console.log(error));
  },
  //Borrar una  tarea
  async deleteList({ commit }, { boardId, listId }) {
    commit(types.ADD_REQUEST);
    await API.deleteList(boardId, listId)
      .then((res) => console.log("deleteList", res))
      .catch((error) => console.log(error));
  },

  //Marcar una  tarea como completada
  async marksAsCompleted({ commit }, { boardId, listId, taskId, task }) {
    await API.completedTask(boardId, listId, taskId, task)
      .then((res) => commit(types.MARK_AS_COMPLETED, res))
      .catch((error) => console.log(error));
  },
};
