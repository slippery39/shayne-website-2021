<template>
  <div style="padding-bottom: 100px">
    <h3>{{ $route.params.id }}</h3>

    <router-view />
  </div>
</template>

<script lang="ts">
import DefaultBlog from 'src/data/Blog';
import { defineComponent, PropType } from 'vue';

export default defineComponent({
  name: 'BlogPost',
});
</script>
