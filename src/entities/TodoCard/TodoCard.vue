<template>
  <div class="todo__modal-list">
    <div class="todo__modal-header">
      <span><strong>Task title</strong></span>
      <span><strong>Date created</strong></span>
      <span><strong>Date completed</strong></span>
      <span><strong>Completed</strong></span>
    </div>
    <div class="todo__modal-card" v-for="todo in todos" :key="todo.id">
      <span>{{ trim(todo.title) }}</span>
      <span>{{ todo.dateCreated }}</span>
      <span>{{ todo.dateCompleted }}</span>
      <span>{{ todo.isDone ? 'yes' : 'no' }}</span>
      <input
        :id="todo.id"
        v-bind:class-name="'todo__modal-checkbox'"
        type="checkbox"
        :checked="todo.isDone"
        @change="onCheck"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import Input from '@/shared/ui/Input/Input.vue';
import { ToDo } from '@/shared/users/users.ts';
import { trimString } from '@/shared/lib/trimString.ts';
import { convertDate } from '@/shared/lib/convertDate.ts';

export default defineComponent({
  data() {
    return {
      trim: trimString,
    };
  },
  components: { Input },
  props: {
    todos: {
      type: Array as PropType<ToDo[]>,
      required: true,
    },
  },
  methods: {
    onCheck(event: Event) {
      const target = event.target as HTMLInputElement;
      const checkedTodo = {
        ...this.todos.find((todo) => todo.id === target.id),
        isDone: target.checked,
        dateCompleted: target.checked ? convertDate(new Date()) : '',
      };
      this.$emit('checkTodo', checkedTodo);
    },
  },
});
</script>

<style scoped>
.todo__modal-list {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0.5em 0;
  height: 25em;
  overflow: auto;
  border: 1px solid teal;
  width: 100%;
}
.todo__modal-header {
  width: 96%;
  display: flex;
  padding: 10px 10px;
  border-bottom: 1px solid black;
  justify-content: space-between;
}
.todo__modal-card {
  display: flex;
  position: relative;
  justify-content: space-between;
  padding: 10px 20px 0;
  width: 96%;
}
span {
  width: 25%;
}
.todo__modal-checkbox {
  position: absolute;
  right: 1em;
}
</style>
