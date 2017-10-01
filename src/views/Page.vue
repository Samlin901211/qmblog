<template>
  <div class="page">
    <div class='title'>
        <h2>{{title}}</h2>
        <p class="time">发表时间：{{time}}
            便签：<span v-for="tag in tags">
                {{tag}}
            </span></p>
    </div>
    <div>
        <div class="author">作者：{{author}}</div>
        <div id="content" v-html="content"></div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'Vuex'
import * as MarkdownIt from 'markdown-it'

// 处理问题。
var md = new MarkdownIt({
    html: true,
    breaks: true,
    highlight(code, lang) {
        if (languageOverrides[lang]) lang = languageOverrides[lang];
        if (lang && hljs.getLanguage(lang)) {
            try {
                return hljs.highlight(lang, code).value;
            } catch (e) { }
        }
        return '';
    }
});

export default {
    name: 'Page',
    components: {
    },
    computed: {
        ...mapState('page', {
            id: state => state.id,
            title: state => state.title,
            time: state => state.time,
            author: state => state.author,
            tags: state => state.tags,
            content: state => md.render(state.content)  
        })
    },
    methods: {
        ...mapActions('page',[
            'getPage'
        ]),
        test: function () {
            console.log(1);
        }
    },
    created () {
        this.getPage('sdasdfa');
    }
}
</script>

<style lang="less" scoped>
.page {
    background: #f8f8f8
}

.title {
    background: #ffffff;
    padding: 30px 30px 16px;
    h2 {
        font-size: 24px;
    }
    a {
        text-decoration: none;
    }
    .time {
        padding-top: 8px;
        font-size: 14px;
        color: #bbbbbb
    }
    .tags {
        padding-top: 8px;
        font-size: 14px;
        color: #bbbbbb;
        span {
            padding-right: 8px;
        }
    }
}

.author {
    font-size: 16px;
    line-height: 32px;
    text-align: justify;
    text-justify: inter-ideograph;
    word-wrap: break-word;
    padding: 22px 0px 0px 0px;
    color: #666666;
}

#content {
    margin-top: 30px;
    a,
    a:visited {
        text-decoration: underline;
    }

    a[href]:after {
        content: " (" attr(href) ")";
    }

    abbr[title]:after {
        content: " (" attr(title) ")";
    }

    a[href^="#"]:after,
    a[href^="javascript:"]:after {
        content: "";
    }

    pre,
    blockquote {
        // border: 1px solid #999;
        page-break-inside: avoid;
    }

    thead {
        display: table-header-group;
    }

    tr,
    img {
        page-break-inside: avoid;
    }

    img {
        max-width: 100% !important;
    }

    p,
    h2,
    h3 {
        orphans: 3;
        widows: 3;
    }

    h2,
    h3 {
        page-break-after: avoid;
    }

    pre,
    code {
        font-family: Menlo, Monaco, "Courier New", monospace;
    }

    pre {
        padding: .5rem;
        line-height: 1.25;
        overflow-x: scroll;
    }

    a,
    a:visited {
        color: #3498db;
    }

    a:hover,
    a:focus,
    a:active {
        color: #2980b9;
    }

    p,
    .modest-p {
        font-size: 1rem;
        margin-bottom: 1.3rem;
    }

    h1,
    .modest-h1,
    h2,
    .modest-h2,
    h3,
    .modest-h3,
    h4,
    .modest-h4 {
        margin: 1.414rem 0 .5rem;
        font-weight: inherit;
        line-height: 1.42;
    }

    h1,
    .modest-h1 {
        margin-top: 0;
        font-size: 3.998rem;
    }

    h2,
    .modest-h2 {
        font-size: 2.827rem;
    }

    h3,
    .modest-h3 {
        font-size: 1.999rem;
    }

    h4,
    .modest-h4 {
        font-size: 1.414rem;
    }

    h5,
    .modest-h5 {
        font-size: 1.121rem;
    }

    h6,
    .modest-h6 {
        font-size: .88rem;
    }

    small,
    .modest-small {
        font-size: .707em;
    }


    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        font-family: Arimo, Helvetica, sans-serif;
    }

    h1,
    h2,
    h3 {
        border-bottom: 2px solid #f5f5f5;
        margin-bottom: 1.15rem;
        padding-bottom: .5rem;
        text-align: center;
    }

    blockquote {
        border-left: 8px solid #f5f5f5;
        padding: 1rem;
    }

    pre,
    code {
        background-color: #f5f5f5;
    }
}
</style>
