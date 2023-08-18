<!-- 
  <template>
    <div class="markdown">
      <div v-html="compiledMarkdown" />
    </div>
  </template>
  
  <script>
  import MarkdownIt from 'markdown-it';
  import hljs from 'highlight.js';
  
  export default {
    props: {
      content: String, // Markdown 文本内容
    },
    computed: {
      compiledMarkdown() {
        const md = new MarkdownIt({
          highlight: (str, lang) => {
            if (lang && hljs.getLanguage(lang)) {
              try {
                return '<pre class="hljs"><code>' +
                       hljs.highlight(lang, str, true).value +
                       '</code></pre>';
              } catch (__) {}
            }
    
            return '<pre class="hljs"><code>' + md.utils.escapeHtml(str) + '</code></pre>';
          },
        });
    
        return md.render(this.content);
      },
    },
  };
  </script>
  
  <style scoped>
  /* 样式可根据需要进行自定义 */
  /* .markdown {
    padding: 16px;
    border: 1px solid #ccc;
    border-radius: 4px;
  } */
  </style> -->
  




  <template>
    <div class="markdown">
      <div v-html="compiledMarkdown" />
    </div>
  </template>
  <!-- <template>
    <div class="markdown">
      <div class="markdown-content" v-html="compiledMarkdown" />
    </div>
  </template> -->
  
  
  <script>
  import MarkdownIt from 'markdown-it';
  import hljs from 'highlight.js';
  
  export default {
    props: {
      content: String, // Markdown 文本内容
    },
    computed: {
      compiledMarkdown() {
        const md = new MarkdownIt({
          highlight: (str, lang) => {
            if (lang && hljs.getLanguage(lang)) {
              try {
                // 使用 hljs.highlight 自带的行号功能
                const highlighted = hljs.highlight(lang, str, true);
                return '<pre class="hljs"><code>' +
                       highlighted.value +
                       '</code></pre>';
              } catch (__) {}
            }
    
            return '<pre class="hljs"><code>' + md.utils.escapeHtml(str) + '</code></pre>';
          },
        });
    
        return md.render(this.content);
      },
    },
  };
  </script>
  
  <style scoped>
  /* 样式可根据需要进行自定义 */
  /* .markdown {
    padding: 16px;
    border: 1px solid #ccc;
    border-radius: 4px;
  } */
  .hljs {
    position: relative;
  }
  .hljs::before {
    content: attr(data-line-number);
    position: absolute;
    top: 0;
    left: -2.5em;
    padding-right: 0.5em;
    text-align: right;
    opacity: 0.5;
    user-select: none;
  }
  .markdown {
  max-width: 100%; /* 限制 Markdown 区域的最大宽度 */
}
::v-deep img{
     max-width:100%;
 }


  </style>
  
   