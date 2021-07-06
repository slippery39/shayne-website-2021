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

//placeholder image can be found with https://via.placeholder.com/150;
const testProjects: ProjectInfo[] = [
  {
    title: 'Pokemon Battle Simulator',
    description:
      'A pokemon battle game where you can play against a computer opponent or play online vs another player. Front End built with React and Typescript, Server built with NodeJS and hosted on Heroku',
    url: 'http://pokemon-sim.shayne-quinton.com',
    image: 'project-screenshots/pokemon.jpg',
  },
  {
    title: 'Vector Drawing App',
    description:
      'A vector based drawing app that was built to test out the Quasar framework for VueJS',
    url: 'vector-drawing-app/index.html',
    image: 'vector-drawing-app/screenshot.jpg',
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
