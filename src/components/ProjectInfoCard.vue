<template>
  <q-card style="max-width: 500px">
    <q-card-section style="text-align: center">
      <div class="text-h6">{{ info.title }}</div>
      <div><img class="project-info-image" :src="info.image" /></div>
    </q-card-section>
    <q-card-section style="text-align: center">
      <div v-if="info.github !== undefined">Github: {{ info.github }}</div>
      <div><a :href="info.url">Click here to view online</a></div>
    </q-card-section>
    <q-card-section>
      <div>{{ info.description }}</div>
    </q-card-section>
  </q-card>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { ProjectInfo } from 'src/data/data';

export default defineComponent({
  name: 'ProjectInfoCard',
  props: {
    info: {
      type: Object as PropType<ProjectInfo>,
      required: true,
    },
  },
});
</script>

<style scoped>
.project-info-image {
  max-width: 300px;
  object-fit: contain;
}
</style>
