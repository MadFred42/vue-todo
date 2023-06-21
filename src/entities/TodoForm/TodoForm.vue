<template>
  <form class="todo__modal-form" @submit.prevent>
    <Input
      @inputValue="onChangeValue"
      :value="todoTitle"
      v-bind:className="'todo__modal-input'"
      placeholder="Enter task title"
    />
    <Button
      v-bind:buttonStyle="buttonProps"
      children="Add task"
      @click="onTaskSubmit"
    />
  </form>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Input from '@/shared/ui/Input/Input.vue';
import Button from '@/shared/ui/Button/Button.vue';
import { v4 } from 'uuid';
import { convertDate } from '@/shared/lib/convertDate.ts';

export default defineComponent({
  components: { Input, Button },
  data() {
    return {
      buttonProps: {
        width: '30%',
        height: '2rem',
        background: '0, 128, 128',
      },
      todoTitle: '',
    };
  },
  methods: {
    onTaskSubmit() {
      if (!this.todoTitle) return;
      const id = v4();
      const todo = {
        title: this.todoTitle,
        isDone: false,
        dateCreated: convertDate(new Date()),
        id,
      };
      console.log(todo);
      this.$emit('addTodo', todo);
      this.todoTitle = '';
    },
    onChangeValue(value: string) {
      this.todoTitle = value;
    },
  },
});
</script>

<style scoped>
.todo__modal-form {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5em 0;
  width: 100%;
}
.todo__modal-input {
  font-size: 1em;
  width: 60%;
  height: 2rem;
  border: 1px solid teal;
  border-radius: 5px;
}
</style>
