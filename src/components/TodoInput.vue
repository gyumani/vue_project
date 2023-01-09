<template>
  <div class="inputBox shadow">
    <input type="text" v-model="newTodoItem" v-on:keyup.enter="addTodo" />

    <span class="addContainer" v-on:click="addTodo">
      <i class="fas fa-plus addBtn"></i>
    </span>

    <!-- use the modal component, pass in the prop -->
    <Modal v-if="showModal" @close="showModal = false">
      <h3 slot="header">
        <span>경고!!</span>
        <i class="closeModalBtn fas fa-times" @click="showModal = false"></i>
      </h3>
      <div slot="body">내용을 입력해주세요.</div>
    </Modal>
  </div>
</template>

<script>
import Modal from "./common/Modal.vue";
import { mapMutations } from "vuex";

export default {
  name: "TodoInput",
  data() {
    return {
      newTodoItem: "",
      showModal: false
    };
  },
  methods: {
    ...mapMutations(["addOneItem"]),
    addTodo() {
      if (this.newTodoItem !== "") {
        // this.$emit("addTodoItem", this.newTodoItem);
        const contents = this.newTodoItem.trim();
        this.addOneItem(contents);
        this.clearInput();
      } else {
        this.showModal = !this.showModal;
      }
    },
    clearInput() {
      this.newTodoItem = "";
    }
  },
  components: {
    Modal
  }
};
</script>

<style scoped>
input:focus {
  outline: none;
}

.inputBox {
  background: white;
  height: 50px;
  line-height: 50px;
  border-radius: 5px;
}

.inputBox input {
  border-style: none;
  font-size: 0.9rem;
  width: 80%;
}

.addContainer {
  float: right;
  background: linear-gradient(to right, #6478fb, #8763fb);
  display: block;
  width: 3rem;
  border-radius: 0 5px 5px 0;
}

.addBtn {
  color: white;
  vertical-align: middle;
}

.closeModalBtn {
  color: #42b983;
  cursor: pointer;
}
</style>
