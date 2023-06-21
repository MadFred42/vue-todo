<template>
  <UsersList />
  <Todos v-if="store.isTodo" />
  <UserSettingsModal v-if="store.isSettings" />
  <BackgroundWrapper v-if="store.isTodo || store.isSettings" />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import UsersList from '@/widgets/UsersList/UsersList.vue';
import Todos from '@/widgets/Todos/Todos.vue';
import BackgroundWrapper from '@/features/BackgroundWrapper/BackgroundWrapper.vue';
import { store } from '@/app/store.ts';
import UserSettingsModal from '@/widgets/UserSettingsModal/UserSettingsModal.vue';

export default defineComponent({
  components: { UserSettingsModal, BackgroundWrapper, Todos, UsersList },
  data() {
    return {
      store,
    };
  },
});
</script>

<style></style>
