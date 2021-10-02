<template>
  <q-layout class="shayne-layout" view="lHh Lpr lFf">
    <q-header class="remove-fixed" reveal elevated>
      <q-toolbar>
        <q-toolbar-title> shayne-quinton.com </q-toolbar-title>
      </q-toolbar>
      <q-tabs align="left">
        <q-route-tab to="/" label="Home" />
        <q-route-tab to="/projects" label="Projects" />
        <q-route-tab to="/contact" label="Contact Me" />
      </q-tabs>
    </q-header>

    <q-page-container
      style="
        padding-top: 50px !important;
        padding-left: 10px;
        padding-right: 10px;
      "
    >
      <router-view style="min-height: 0 !important" />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import './MainLayout.scss';
import 'pattern.css';

export default defineComponent({
  name: 'MainLayout',
  components: {},
});
</script>
