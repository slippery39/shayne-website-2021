<template>
  <q-page>
    <page-title title="Projects" />
    <div style="padding-bottom: 24px">
      This is a collection of projects that I have created in my spare time. For
      each project I work on, I try to learn something new and try out different
      things that I might not get a chance to do during my work day.
    </div>
    <div>
      <project-info-card
        style="margin: 0 auto; margin-bottom: 24px"
        v-for="project in projects"
        :info="project"
        :key="project.title"
      />
    </div>
    ``
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { ProjectInfo } from 'src/data/data';
import ProjectInfoCard from 'src/components/ProjectInfoCard.vue';
import PageTitle from 'src/components/PageTitle.vue';

const testProjects: ProjectInfo[] = [
  {
    title: 'Project 1',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut elementum risus. Cras faucibus lacus vel aliquet venenatis. Aenean nec aliquam dui, non sollicitudin dui. Nulla eget diam sed velit.',
    url: 'project1.html',
    image: 'https://via.placeholder.com/150',
  },
  {
    title: 'Project 2',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut elementum risus. Cras faucibus lacus vel aliquet venenatis. Aenean nec aliquam dui, non sollicitudin dui. Nulla eget diam sed velit.',
    url: 'project2.html',
    image: 'https://via.placeholder.com/150',
  },
  {
    title: 'Project 3',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut elementum risus. Cras faucibus lacus vel aliquet venenatis. Aenean nec aliquam dui, non sollicitudin dui. Nulla eget diam sed velit.',
    url: 'project2.html',
    image: 'https://via.placeholder.com/150',
  },
];

export default defineComponent({
  name: 'Projects',
  components: { ProjectInfoCard, PageTitle },
  props: {
    projects: {
      default: testProjects,
    },
  },
});
</script>
