<template>
  <input
    :class="className"
    :placeholder="placeholder"
    v-bind:value="inputValue"
    @input="onInputChange"
  />
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  data() {
    return {
      inputValue: '',
    };
  },
  props: {
    className: {
      type: String,
    },
    placeholder: {
      type: String,
    },
  },
  methods: {
    onInputChange(event: Event) {
      const target = event.target as HTMLInputElement;
      this.inputValue = target.value;
      this.$emit('inputValue', target.value, target.id);
    },
  },
});
</script>

<style scoped>
input {
  color: black;
}
</style>
