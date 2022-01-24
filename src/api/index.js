import firebaseConfig from "./firebase-config.js";
import axios from "axios";

const url = firebaseConfig.databaseURL;

export default {
  async getBoards() {
    return await axios.get(url + "/boards/.json");
  },
  async postBoard(name, owner = 1) {
    const board = { name, owner };
    return await axios.post(url + "/boards/.json", board);
  },
  async getListsFromBoard(boardId) {
    return await axios.get(url + `/boards/${boardId}/.json`);
  },
  async postList(boardId, name) {
    return await axios.post(url + `/boards/${boardId}/lists/.json`, {
      name,
    });
  },
  async deleteList(boardId, listId) {
    return await axios.delete(url + `/boards/${boardId}/lists/${listId}.json`);
  },
  async getTasksFromList(boardId, listId) {
    return await axios.get(url + `/boards/${boardId}/lists/${listId}/.json`);
  },
  async postTask(boardId, listId, title) {
    const task = { title, completed: false };
    return await axios.post(
      url + `/boards/${boardId}/lists/${listId}/tasks/.json`,
      task
    );
  },
  async deleteTask(boardId, listId, taskId) {
    return await axios.delete(
      url + `/boards/${boardId}/lists/${listId}/tasks/${taskId}.json`
    );
  },
  async completedTask(boardId, listId, taskId, task) {
    return await axios.put(
      url + `/boards/${boardId}/lists/${listId}/tasks/${taskId}.json`,
      task
    );
  },
};
