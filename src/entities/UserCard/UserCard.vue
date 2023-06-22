<template>
  <h3>Users List</h3>
  <div class="user__list-card" v-for="user in users" :key="user.id">
    <header>
      <strong>{{ user.name }}</strong>
    </header>
    <div class="user__list-info">
      <span><b>email</b>: {{ user.email }}</span>
      <span><b>phone</b>: {{ user.phone }}</span>
    </div>
    <Button
      :id="user.name"
      v-bind:button-style="buttonProps"
      children="Show todos"
      @click="onOpenTodos"
    />
    <img
      @click="onOpenSettings"
      src="../../../public/settings.svg"
      alt="settings"
      class="user__list-settings"
      :id="user.name"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import Button from '@/shared/ui/Button/Button.vue';
import { store } from '@/app/store.ts';
import { User } from '@/shared/users/users.ts';
import { users } from '@/shared/users/users.ts';

export default defineComponent({
  components: { Button },
  data() {
    return {
      buttonProps: {
        width: '10rem',
        height: '2.2rem',
        background: '0, 128, 128',
        margin: '10px 0',
      },
    };
  },
  methods: {
    onOpenTodos(event: MouseEvent) {
      const target = event.target as HTMLButtonElement;

      if (!users.find((user) => user.name === target.id)?.isPaid) {
        return alert(
          'Please activate your subscription for only three hundred bucks',
        );
      }
      store.isTodo = true;
      store.activeUser = target.id;
    },
    onOpenSettings(event: MouseEvent) {
      const target = event.target as HTMLImageElement;
      store.isSettings = true;
      store.activeUser = target.id;
    },
  },
  props: {
    users: {
      type: Array as PropType<User[]>,
      required: true,
    },
  },
});
</script>

<style scoped>
.user__list-card {
  border: 2px solid teal;
  position: relative;
  margin: 15px;
  padding: 10px;
  height: 8rem;
  width: 70vw;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
}

h3 {
  text-align: start;
  margin: 15px;
}

.user__list-info {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
}

.user__list-settings {
  position: absolute;
  top: 0.5em;
  right: 0.5em;
  height: 1.5em;
  width: 1.5em;
  cursor: pointer;
  opacity: 0.5;
}

.user__list-settings:hover {
  opacity: 1;
}
</style>
