<template>
  <section class="row d-flex justify-content-center">
    <div class="col-10 text-center">
      <h3 class="my-4">Mis Paneles</h3>

      <div class="d-flex justify-content-center mt-3">
        <input
          class="form-control w-25"
          type="text"
          placeholder="Añade un nuevo panel"
          v-model="boardName"
          @keyup.enter="add($event)"
        />
      </div>

      <div class="row d-flex justify-content-center">
        <board-card
          class="col-3"
          v-for="(board, index) in boards"
          :key="index"
          :name="board.name"
          :id="board.id"
          :i="index"
          @listenIndex="deleteTarea($event)"
        ></board-card>
      </div>
    </div>
  </section>
</template>

<script>
import BoardCard from "@/components/BoardCard";

const randomId = () => Math.round(Math.random() * (1000 - 1) + 1);

export default {
  name: "home",
  components: {
    BoardCard,
  },
  props: [],
  mounted() {},
  data() {
    return {
      boardName: "",
      boards: [
        { id: 1, name: "Tareas" },
        { id: 2, name: "Lista de la compra" },
        { id: 3, name: "Asignaciones de la semana" },
      ],
    };
  },
  methods: {
    add(event) {
      const value = event.srcElement.value;
      const ID = randomId();
      this.boards.push({ id: ID, name: value });
    },
    // deleteTarea(index) {
    //   console.log(index);
    //   this.boards = [];
    // },
  },
  computed: {},
};
</script>

<style scoped lang="scss">
@import "../scss/views/home";
</style>
