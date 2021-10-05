<template>
  <q-page>
    <page-title title="Projects" />
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
import { ProjectInfo } from 'src/data/ProjectInfo';
import ProjectInfoCard from 'src/components/ProjectInfoCard.vue';
import PageTitle from 'src/components/PageTitle.vue';

//placeholder image can be found with https://via.placeholder.com/150;
const testProjects: ProjectInfo[] = [
  {
    title: 'Lumines Clone',
    description:
      'A clone of the game Lumines built using the Unity game engine.',
    image: 'project-screenshots/lumines-clone.jpg',
    url: undefined,
    startDate: new Date(2021, 8, 1),
    endDate: undefined,
    articles: [
      'development-of-a-lumines-clone-month-1',
      'development-of-a-lumines-clone-month-2',
    ],
    techUsed: ['Unity', 'C#'],
  },
  {
    title: 'Pokemon Battle Simulator',
    description:
      'A pokemon battle game where you can play against a computer opponent or play online vs another player. Front End built with React and Typescript, Server built with NodeJS using socket.io and hosted on Heroku',
    url: 'http://pokemon-sim.shayne-quinton.com',
    image: 'project-screenshots/pokemon.jpg',
    startDate: new Date(2020, 8, 1),
    endDate: new Date(2021, 5, 1),
    articles: ['pokemon-battle-simulator-post-mortem'],
    techUsed: ['React', 'TypeScript', 'NodeJS', 'socket.io', 'Heroku'],
  },
  {
    title: 'Vector Drawing App',
    description:
      'A vector based drawing app that was built to test out the Quasar framework for VueJS',
    url: 'vector-drawing-app/index.html',
    image: 'vector-drawing-app/screenshot.jpg',
    startDate: new Date(2020, 3, 1),
    endDate: new Date(2020, 4, 1),
    techUsed: ['VueJS', 'Quasar'],
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
