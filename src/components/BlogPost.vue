<template>
  <div style="padding-bottom: 100px">
    <h1 v-html="title"></h1>
    <h4 v-if="date !== undefined">{{ formatDate(date) }}</h4>
    <div class="post-content" v-html="content"></div>
    <router-view />
  </div>
</template>

<script lang="ts">
import DefaultBlog from 'src/data/Blog';
import { defineComponent, PropType, onBeforeMount } from 'vue';

const longEnUSFormatter = new Intl.DateTimeFormat('en-US', {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
});

interface BlogPostData {
  title: string;
  content: string;
  date?: Date;
}

export default defineComponent({
  name: 'BlogPost',

  data(): BlogPostData {
    return {
      title: '',
      content: '',
      date: undefined,
    };
  },
  beforeRouteUpdate(to, from, next) {
    this.title = '';
    this.content = '';
    this.date = undefined;

    void DefaultBlog.GetPostByName(this.$route.params.id as string)
      .then((post) => {
        console.log(post);
        this.title = post.title;
        this.content = post.content;
        this.date = new Date(post.date);
      })
      .catch((err) => {
        console.log(err);
        this.content = '<b>Unable to locate blog post</b>';
      });

    next();
    // react to route changes...
    // don't forget to call next()
  },
  beforeMount() {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    console.log(this.$route.params.id);
    void DefaultBlog.GetPostByName(this.$route.params.id as string)
      .then((post) => {
        console.log(post);
        this.title = post.title;
        this.content = post.content;
        this.date = new Date(post.date);
      })
      .catch((err) => {
        console.log(err);
        this.content = '<b>Unable to locate blog post</b>';
      });
  },
  setup: (props) => {
    return { formatDate: (date: Date) => longEnUSFormatter.format(date) };
  },
});
</script>

<style scoped>
/*
hard coded width and height attributes screw with the proportions.
*/
.post-content >>> img[class*='wp-image-'] {
  width: 100%;
  height: 100%;
}
</style>
