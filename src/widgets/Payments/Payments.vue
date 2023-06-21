<template>
  <div class="payment__list">
    <PaymentCard />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import PaymentCard from '@/entities/PaymentCard/PaymentCard.vue';

export default defineComponent({
  components: { PaymentCard },
  setup() {
    return {};
  },
});
</script>

<style scoped>
.payment__list {
  margin: 0;
  color: black;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
}
</style>
