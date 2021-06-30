<template>
  <q-page class="row items-center justify-evenly">
    <page-title title="Welcome to shayne-quinton.com!" />
    <div>
      I am a passionate software developer during the day, aspiring game
      developer during the night. I have a lifelong commitment to learning all
      that I can about software development. TODO - more stuff.
    </div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import PageTitle from 'components/PageTitle.vue';

export default defineComponent({
  name: 'PageIndex',
  components: { PageTitle },
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
