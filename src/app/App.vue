<template>
  <Header />
  <router-view></router-view>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import UsersPage from '@/pages/UsersPage.vue';
import PaymentPage from '@/pages/PaymentPage.vue';
import Header from '@/widgets/Header/Header.vue';

export default defineComponent({
  components: { Header, PaymentPage, UsersPage },
  setup() {
    return {};
  },
});
</script>

<style>
* {
  box-sizing: border-box;
  background-color: ivory;
}
#app {
  position: relative;
  margin: 0;
  padding: 0;
  min-width: 100%;
  height: 100vh;
}
</style>
