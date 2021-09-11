<template>
  <q-card style="max-width: 500px">
    <q-card-section style="text-align: center">
      <div class="text-h6">{{ info.title }}</div>
      <div><img class="project-info-image" :src="info.image" /></div>
    </q-card-section>
    <q-card-section style="text-align: center">
      <div v-if="info.github !== undefined">Github: {{ info.github }}</div>
      <div v-if="info.url !== undefined">
        <a :href="info.url">Click here to view online</a>
      </div>
    </q-card-section>
    <q-card-section>
      <div v-if="info.endDate !== undefined">
        Development Period:
        {{
          info.startDate.toLocaleString('default', {
            month: 'long',
            year: 'numeric',
          })
        }}
        -
        {{
          info.endDate?.toLocaleString('default', {
            month: 'long',
            year: 'numeric',
          })
        }}
      </div>
      <div v-else>Work In Progress</div>
    </q-card-section>
    <q-card-section>
      <div>{{ info.description }}</div>
    </q-card-section>
    <q-card-section>
      <div>
        Technologies Used :
        <ul>
          <li :key="tech" v-for="tech in info.techUsed">{{ tech }}</li>
        </ul>
      </div>
    </q-card-section>
    <q-card-section>
      <div v-if="info.articles !== undefined && info.articles.length > 0">
        <div>Articles Related to this Project :</div>
        <br />
        <router-link
          v-for="article in info.articles"
          :key="article"
          :to="`/blog/${article}`"
          >{{ article }}</router-link
        >
      </div>
    </q-card-section>
  </q-card>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { ProjectInfo } from 'src/data/ProjectInfo';

export default defineComponent({
  name: 'ProjectInfoCard',
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  props: {
    info: {
      type: Object as PropType<ProjectInfo>,
      required: true,
    },
  },
  setup: (props) => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    console.log(props.info.startDate);
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    console.log(props.info.endDate);
  },
});
</script>

<style scoped>
.project-info-image {
  max-width: 300px;
  object-fit: contain;
}
</style>
