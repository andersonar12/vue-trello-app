import firebaseConfig from "./firebase-config.js";
import axios from "axios";

const url = firebaseConfig.databaseURL;

/* import { db } from "./firebase.js";
import { ref, set } from "firebase/database";
const boardsRef = ref(db, "/boards");
const boardsSet = (id, board) => set(ref(db, "/boards" + id), board);
const listsRef = ref(db, "/lists");
const tasksRef = ref(db, "/tasks");
 */

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
    return await axios.post(url + `/boards/${boardId}/lists/${name}.json`, {
      name,
    });
  },
  async getTasksFromList(boardId, listId) {
    return await axios.get(
      url + `/boards/${boardId}/lists/${listId}/tasks/.json`
    );
  },
  async postTask(boardId, listId, title) {
    const task = { title, completed: false };
    return await axios.post(
      url + `/boards/${boardId}/lists/${listId}/.json`,
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
