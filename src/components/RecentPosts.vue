<template>
  <div style="min-width: 400px; max-width: 100%">
    <div>
      <h4 style="text-align: center">Recent Posts</h4>
    </div>
    <div v-for="post in posts" :key="post.title">
      <span style="width: 130px; text-align: left"
        >{{ formatDate(post.date) }} -
      </span>
      <router-link :to="`/blog/${post.slug}`"
        ><span v-html="post.title"
      /></router-link>
    </div>
  </div>
</template>

<script lang="ts">
import RemoteBlog, { IPost } from 'src/data/Blog';
import { defineComponent } from 'vue';
import dateFormatter from 'src/data/DateFormatter';

export default defineComponent({
  name: 'BlogPost',

  data(): { posts: IPost[] } {
    return { posts: [] };
  },
  beforeMount() {
    void RemoteBlog.GetRecentPosts()
      .then((posts) => {
        this.posts = posts;
      })
      .catch((err) => {
        console.log(err);
      });
  },
  setup: () => {
    return dateFormatter;
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
