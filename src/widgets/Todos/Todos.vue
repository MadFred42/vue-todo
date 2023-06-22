<template>
  <div class="todo__modal">
    <header>
      <strong>{{ name }}'s todos</strong>
    </header>
    <TodoForm @addTodo="addTodo" />
    <TodoCard @checkTodo="checkTodo" v-bind:todos="todos" />
    <Button
      @click="onCloseModal"
      v-bind:buttonStyle="buttonProps"
      children="Close"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TodoCard from '@/entities/TodoCard/TodoCard.vue';
import TodoForm from '@/entities/TodoForm/TodoForm.vue';
import Button from '@/shared/ui/Button/Button.vue';
import { store, usersTodoStore } from '@/app/store.ts';
import { ToDo } from '@/shared/users/users.ts';

export default defineComponent({
  components: { TodoCard, TodoForm, Button },
  data() {
    return {
      isModal: true,
      name: store.activeUser,
      buttonProps: {
        width: '20%',
        height: '2em',
        background: '255, 100, 100',
      },
      todos: usersTodoStore.find((user) => user.name === store.activeUser)
        ?.todos as ToDo[],
    };
  },
  methods: {
    onCloseModal() {
      store.isTodo = false;
    },
    addTodo(todo: ToDo) {
      this.todos.push(todo);
    },
    checkTodo(newTodo: ToDo) {
      const todoIndex = this.todos.findIndex((todo) => todo.id === newTodo.id);
      if (todoIndex < 0) return console.error('No such todo');
      this.todos.splice(todoIndex, 1, newTodo);
    },
  },
});
</script>

<style scoped>
.todo__modal {
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  padding: 15px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 2px solid teal;
  width: 80%;
  height: 80%;
  color: black;
  background-color: ivory;
  z-index: 2;
}
@media (max-width: 600px), screen {
  .todo__modal {
    font-size: 0.7em;
  }
}
</style>
