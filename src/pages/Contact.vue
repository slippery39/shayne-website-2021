<template>
  <q-page class="row items-center justify-evenly">
    Contact Me
    <div>
      <a target="_blank" :href="linkedIn.url"
        ><q-icon size="lg" name="fab fa-linkedin"
      /></a>
      <a target="_blank" :href="github.url">
        <q-icon size="lg" name="fab fa-github"
      /></a>
      <a :href="'mailto:' + email.url">
        <q-icon size="lg" name="fas fa-envelope"
      /></a>
    </div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Contact',
  components: {},
  data: () => {
    return {
      linkedIn: { url: 'https://www.linkedin.com/in/shayne-quinton-809a5269/' },
      github: { url: 'https://github.com/slippery39' },
      email: { url: 'shayne_quinton@hotmail.com' },
    };
  },
});
</script>
