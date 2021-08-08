<template>
  <q-page class="row items-center justify-evenly">
    <page-title title="Welcome to shayne-quinton.com!" />
    <div>
      <p>
        I am a Canadian software developer who is very passionate about learning
        and improving every single day.
      </p>
      <p>
        After work and on weekends I am an aspiring game developer, basketball
        fan, and cat owner.
      </p>
      <p>
        I travelled to Mexico right before the COVID-19 pandemic happened and
        ended up staying there for almost a year. Because of the pandemic I
        ended up having a lot more time than usual and I decided that I would
        start to work on more personal projects regarding software, web and game
        development. This website was created mainly so I can keep a diary of
        these projects and maybe one day look back and see how much progress I
        have made as a developer.
      </p>
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
