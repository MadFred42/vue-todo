<template>
  <div class="user__list">
    <UserCard v-bind:users="users" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import UserCard from '@/entities/UserCard/UserCard.vue';
import { userStore } from '@/app/store.ts';

export default defineComponent({
  components: { UserCard },
  setup() {
    return {
      users: userStore.users,
    };
  },
});
</script>
<style scoped>
.user__list {
  color: black;
  width: 30%;
}
</style>
