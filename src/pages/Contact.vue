<template>
  <q-page>
    <page-title title="Contact Me" />
    <div class="shayne-content">
      If you are interested in hiring me, or would like to chat here are some
      ways you can do so:
      <div style="text-align: center; margin-top: 24px">
        <a class="shayne-icon" :href="'mailto:' + email.url">
          <q-icon size="lg" name="fas fa-envelope"
        /></a>
        <a class="shayne-icon" target="_blank" :href="linkedIn.url"
          ><q-icon size="lg" name="fab fa-linkedin"
        /></a>
        <a class="shayne-icon" target="_blank" :href="github.url">
          <q-icon size="lg" name="fab fa-github"
        /></a>
      </div>
    </div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import PageTitle from 'components/PageTitle.vue';
import 'src/css/app.scss';

export default defineComponent({
  name: 'Contact',
  components: { PageTitle },
  data: () => {
    return {
      linkedIn: { url: 'https://www.linkedin.com/in/shayne-quinton-809a5269/' },
      github: { url: 'https://github.com/slippery39' },
      email: { url: 'shayne_quinton@hotmail.com' },
    };
  },
});
</script>
