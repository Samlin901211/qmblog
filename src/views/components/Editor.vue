<template>
    <!-- Bidirectional data binding（双向数据绑定） -->
    <v-layout row wrap>
        <v-flex xs6 class="mr-5">
            <codemirror v-model="code" :options="editorOptions" @ready="onEditorReady" @change="onEditorCodeChange" ref="myEditor"></codemirror>
        </v-flex>
        <v-flex xs5>
            <div id="preview" v-html="preview"></div>
        </v-flex>
    </v-layout>
</template>

<script>
import { codemirror, CodeMirror } from 'vue-codemirror'
// import 'codemirror/addon/mode/overlay.js'
// import 'codemirror/mode/markdown/markdown.js'
import 'codemirror/mode/gfm/gfm.js'
import 'codemirror/mode/javascript/javascript.js'
import 'codemirror/keymap/sublime.js'
// import 'codemirror/mode/css/css.js'
// import 'codemirror/mode/htmlmixed/htmlmixed.js'
// import 'codemirror/mode/meta.js'

import * as MarkdownIt from 'markdown-it'
import * as hljs from 'highlight.js'
import 'highlight.js/styles/vs2015.css'

const languageOverrides = {
    js: 'javascript',
    html: 'xml'
}

var md = new MarkdownIt({
    html: true,
    highlight(code, lang) {
        if (languageOverrides[lang]) lang = languageOverrides[lang];
        if (lang && hljs.getLanguage(lang)) {
            try {
                return hljs.highlight(lang, code).value;
            } catch (e) { }
        }
        return '';
    }
})

export default {
    data() {
        return {
            code: `# markdown title\r\n\`\`\` javascript\r\nconst TYPE = "markdown"\r\n\`\`\``,
            editorOptions: {
                // codemirror options
                indentUnit: 4,
                mode: 'gfm',
                theme: 'base16-dark',
                lineNumbers: true,
                line: true,
                keyMap: 'sublime',
            },
            preview: ''
        }
    },
    components: {
        codemirror
    },
    methods: {
        onEditorReady(editor) {
            this.preview = md.render(editor.getValue())
        },
        onEditorCodeChange(newCode) {
            this.preview = md.render(newCode)
        }
    },
    computed: {
        editor() {
            return this.$refs.myEditor.editor
        }
    },
    mounted() {

    }
}
</script>
<style lang="less">
#preview {
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

