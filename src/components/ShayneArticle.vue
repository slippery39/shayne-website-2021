<template>
  <div style="margin-bottom: 100px">
    <h3>{{ articleInfo.title }}</h3>
    <router-view />
  </div>
</template>

<script lang="ts">
import ArticleInfo from 'src/data/ArticleInfo';
import { defineComponent, PropType } from 'vue';

export default defineComponent({
  name: 'ShayneArticle',
  props: {
    articleInfo: {
      type: Object as PropType<ArticleInfo>,
      required: true,
    },
  },
  setup: (props) => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    console.log(props.articleInfo);
  },
});
</script>

<style>
pre {
  max-width: 100%;
  max-height: 350px;
  overflow: scroll;
}
</style>
