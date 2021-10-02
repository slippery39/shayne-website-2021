<template>
  <q-page class="row items-center justify-evenly">
    <page-title title="Who am I?" />
    <div>
      <p>
        I'm a Canadian software developer who is passionate about learning and
        trying out new things.
      </p>
      <p>
        This website is my personal diary of side projects like game development
        projects that I do for fun, or projects to learn technologies I might
        not have had a chance to use in my day job.
      </p>
    </div>
    <recent-posts />
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import PageTitle from 'components/PageTitle.vue';
import RecentPosts from 'src/components/RecentPosts.vue';

export default defineComponent({
  name: 'PageIndex',
  components: { PageTitle, RecentPosts },
  /*
  setup() {
    const todos = ref<Todo[]>([
      {
        id: 1,
        content: 'ct1'
      },
      {
        id: 2,
        content: 'ct2'
      },
      {
        id: 3,
        content: 'ct3'
      },
      {
        id: 4,
        content: 'ct4'
      },
      {
        id: 5,
        content: 'ct5'
      }
    ]);
    const meta = ref<Meta>({
      totalCount: 1200
    });
    return { todos, meta };
  }
  */
});
</script>
