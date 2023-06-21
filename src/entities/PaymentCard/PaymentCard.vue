<template>
  <div class="payment__list-header">
    <span><b>Name</b></span>
    <span><b>Email</b></span>
    <span><b>Subscription</b></span>
    <span><b>Payment</b></span>
  </div>
  <div class="payment__list-card" v-for="user in users" :key="user.id">
    <span>{{ user.name }}</span>
    <span>{{ user.email }}</span>
    <span>{{ user.isPaid ? 'active' : 'inactive' }}</span>
    <span>{{ user.amount }}</span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { users } from '@/shared/users/users.ts';

export default defineComponent({
  data() {
    return {
      users,
    };
  },
});
</script>

<style scoped>
span {
  width: 25%;
}
.payment__list-header {
  border-bottom: 2px solid teal;
  width: 100%;
  padding: 2em;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.payment__list-card {
  width: 100%;
  padding: 2em;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
