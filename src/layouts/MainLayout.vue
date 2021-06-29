<template>
  <q-layout class="shayne-layout" view="lHh Lpr lFf">
    <q-header class="remove-fixed" reveal elevated>
      <q-toolbar>
        <q-toolbar-title> Shayne's Space </q-toolbar-title>
      </q-toolbar>
      <q-tabs align="left">
        <q-route-tab to="/" label="Home" />
        <q-route-tab to="/projects" label="Projects" />
        <q-route-tab to="/contact" label="Contact Me" />
      </q-tabs>
    </q-header>

    <q-page-container>
      <router-view style="min-height: 0 !important" />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import './MainLayout.scss';

export default defineComponent({
  name: 'MainLayout',
  components: {},
});
</script>
