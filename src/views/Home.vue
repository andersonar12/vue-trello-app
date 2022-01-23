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

      <div
        class="row d-flex justify-content-center"
        v-if="Object.values(boards).length > 0"
      >
        <BoardCard
          class="col-3"
          v-for="(board, index) in boards"
          :key="index"
          :name="board.name"
          :id="index"
        ></BoardCard>
      </div>
      <div class="text-center" v-else>
        <h5><strong>No hay Paneles Creados</strong></h5>
      </div>
    </div>
  </section>
</template>

<script>
import BoardCard from "@/components/BoardCard";
import { computed } from "@vue/runtime-core";
import loader from "../utils/loader.js";
/* const randomId = () => Math.round(Math.random() * (1000 - 1) + 1); */

export default {
  name: "home",
  components: {
    BoardCard,
  },
  data() {
    return {
      boardName: "",
      boards: {},
    };
  },
  async mounted() {
    this.boards = computed(() => this.$store.state.boards);

    if (!this.$store.getters.boardsExists) {
      loader.presentLoader();
      await this.$store.dispatch("fetchBoards");
      loader.closeLoader();
      return;
    }
  },
  methods: {
    async add(/* event */) {
      loader.presentLoader();
      await this.$store.dispatch("addBoard", { name: this.boardName });
      setTimeout(() => {
        this.$store.dispatch("fetchBoards");
        loader.closeLoader();
      }, 1000);
    },
  },
};
</script>

<style scoped lang="scss">
@import "../scss/views/home";
</style>
