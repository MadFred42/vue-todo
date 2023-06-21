<template>
  <Payments />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Payments from '@/widgets/Payments/Payments.vue';

export default defineComponent({
  components: { Payments },
  setup() {
    return {};
  },
});
</script>

<style scoped></style>
