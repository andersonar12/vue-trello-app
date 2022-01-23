export default {
  boardsExists: (state) => Object.values(state.boards).length > 0,
  /*  getListByBoard: (state, boardId) => {
    return Object.values(state.lists).filter((list) => list.board === boardId);
  },
  getTaskFromList: (state, listId) => {
    return Object.values(state.tasks).filter((task) => task.list === listId);
  }, */
};
