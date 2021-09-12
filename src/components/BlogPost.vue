<template>
  <router-view :key="$route.fullPath">
    <div style="padding-bottom: 100px; margin-left: 10px; margin-right: 10px">
      <h2 v-html="title"></h2>
      <h4 style="text-align: center" v-if="date !== undefined">
        {{ formatDate(date) }}
      </h4>
      <div class="post-content" v-html="content"></div>
    </div>
  </router-view>
</template>

<script lang="ts">
import RemoteBlog from 'src/data/Blog';
import { defineComponent } from 'vue';

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

    void RemoteBlog.GetPostByName(to.params.id as string)
      .then((post) => {
        console.log(post);
        this.title = post.title;
        this.content = post.content;
        this.date = new Date(post.date);
        next();
      })
      .catch((err) => {
        console.log(err);
        this.content = '<b>Unable to locate blog post</b>';
      });

    // react to route changes...
    // don't forget to call next()
  },
  beforeMount() {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access

    console.log(this.$route.params);

    void RemoteBlog.GetPostByName(this.$route.params.id as string)
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
  setup: () => {
    return { formatDate: (date: Date) => longEnUSFormatter.format(date) };
  },
});
</script>

<style scoped>
.post-content >>> pre {
  max-width: 100%;
  max-height: 350px;
  overflow: auto;
}

.post-content >>> figcaption {
  text-align: center;
}
/*
hard coded width and height attributes screw with the proportions.
*/
.post-content >>> img[class*='wp-image-'] {
  max-width: 100%;
  height: 100%;
  margin: 0 auto;
  display: block;
}
</style>
