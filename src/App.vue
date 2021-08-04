<template>
  <router-view />
</template>
<script lang="ts">
import { defineComponent } from 'vue';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import hljs from 'highlight.js';
import 'highlight.js/styles/github.css';
import typescript from 'highlight.js/lib/languages/typescript';
hljs.registerLanguage('typescript', typescript);
hljs.configure({ ignoreUnescapedHTML: true });

setInterval(() => {
  var blocks = document.querySelectorAll('pre code:not(.hljs)');
  Array.prototype.forEach.call(blocks, hljs.highlightElement);
}, 500);

export default defineComponent({
  name: 'App',
});
</script>
