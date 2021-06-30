<template>
  <div style="padding-bottom: 24px; text-align: center" class="text-h3">
    {{ title }}
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PageTitle',
  props: {
    title: {
      type: String,
      required: true,
    },
  },
});
</script>
