/* eslint-disable @typescript-eslint/no-unsafe-member-access */
<template>
  <q-card style="max-width: 500px">
    <q-card-section style="text-align: center">
      <div class="text-h6">{{ info.title }}</div>
      <div><img class="project-info-image" :src="info.image" /></div>
    </q-card-section>
    <q-card-section style="text-align: center">
      <div v-if="info.github !== undefined">Github: {{ info.github }}</div>
      <div v-if="info.url !== undefined">
        <a :href="info.url">Click here to view online</a>
      </div>
    </q-card-section>
    <q-card-section>
      <div v-if="info.endDate !== undefined">
        Development Period:
        {{
          info.startDate.toLocaleString('default', {
            month: 'long',
            year: 'numeric',
          })
        }}
        -
        {{
          info.endDate?.toLocaleString('default', {
            month: 'long',
            year: 'numeric',
          })
        }}
      </div>
      <div v-else>Work In Progress</div>
    </q-card-section>
    <q-card-section>
      <div>{{ info.description }}</div>
    </q-card-section>
    <q-card-section>
      <div>
        Technologies Used :
        <ul>
          <li :key="tech" v-for="tech in info.techUsed">{{ tech }}</li>
        </ul>
      </div>
    </q-card-section>
    <q-card-section>
      <div v-if="articles !== undefined && articles.length > 0">
        <div>Posts Related to this Project :</div>
        <br />
        <div v-for="article in articles" :key="{ article }">
          <router-link
            v-html="article.title"
            :to="`/blog/${article.slug}`"
          ></router-link>
        </div>
      </div>
    </q-card-section>
  </q-card>
</template>

<script lang="ts">
import { defineComponent, PropType, ref } from 'vue';
import { ProjectInfo } from 'src/data/ProjectInfo';
import Blog from 'src/data/Blog';
import { IPost } from 'src/data/Blog';

//TODO - grab our articles based on the tag.

export default defineComponent({
  name: 'ProjectInfoCard',
  props: {
    info: {
      type: Object as PropType<ProjectInfo>,
      required: true,
    },
  },
  setup(props) {
    const articles = ref<IPost[]>([]);
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    console.log(props.info.startDate);
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    console.log(props.info.endDate);

    return {
      articles,
    };
  },
  async beforeMount() {
    const fetchArticleSlugs = async () => {
      if (this.info.articleTag == undefined) {
        return;
      }
      const postsForProject = await Blog.GetPostsByTagType(
        this.info.articleTag
      );
      // eslint-disable-next-line vue/no-mutating-props
      this.articles = postsForProject;
    };
    console.log('fetching article slugs');
    await fetchArticleSlugs();
  },
});
</script>

<style scoped>
.project-info-image {
  max-width: 300px;
  object-fit: contain;
}
</style>
