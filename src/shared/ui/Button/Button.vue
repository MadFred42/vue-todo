<template>
  <button class="button" :style="style">
    {{ children }}
  </button>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { OwnProps } from '@/shared/ui/Button/types.ts';

export default defineComponent({
  setup() {
    return {};
  },
  props: {
    buttonStyle: {
      type: Object as PropType<OwnProps>,
      required: true,
    },
    children: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      style: {
        '--background-color': `rgba(${this.buttonStyle.background}, 0.2)`,
        '--background-hover': `rgba(${this.buttonStyle.background}, 0.8)`,
        '--width': this.buttonStyle.width,
        '--height': this.buttonStyle.height,
        '--padding': this.buttonStyle.padding || '3px',
        '--margin': this.buttonStyle.margin || '0',
      },
    };
  },
});
</script>

<style scoped>
.button {
  color: black;
  font-size: 0.9em;
  padding: var(--padding);
  margin: var(--margin);
  background-color: var(--background-color);
  width: var(--width);
  height: var(--height);
  border: 1px solid black;
}
.button:hover {
  background-color: var(--background-hover);
  color: white;
}
</style>
