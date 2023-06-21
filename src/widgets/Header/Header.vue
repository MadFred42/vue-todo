<template>
  <div class="app__header">
    <h4 @click="$router.push('/')">Main Page</h4>
    <Button
      @click="$router.push('/payment')"
      children="Payment Page"
      v-bind:button-style="buttonProps"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Button from '@/shared/ui/Button/Button.vue';

export default defineComponent({
  components: { Button },
  data() {
    return {
      buttonProps: {
        width: '15%',
        margin: '0 2em',
        color: 'white',
        height: '70%',
        background: '66, 230, 245',
      },
    };
  },
});
</script>

<style scoped>
.app__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 4rem;
  padding: 0 2em;
  background-color: teal;
}
h4 {
  color: white;
  background-color: transparent;
  cursor: pointer;
}
</style>
