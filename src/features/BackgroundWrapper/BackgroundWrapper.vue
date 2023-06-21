<template>
  <div class="background__wrapper"></div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  setup() {
    return {};
  },
});
</script>

<style scoped>
.background__wrapper {
  width: 100vw;
  height: 100vh;
  background-color: #1a1a1a;
  opacity: 0.8;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
}
</style>
