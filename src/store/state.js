export default {
  user: null,
  fetchingData: true,
  error: null,
  boards: {
    // cada board tendra un atributo "lists" y dentro tendran "tasks" todos anidados en objetos
    /* 
        id:{
            id,
            owner,
            name
        }
    */
  },
  lists: {},
  tasks: {},
};
