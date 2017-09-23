<template>
    <!-- Bidirectional data binding（双向数据绑定） -->
    <codemirror v-model="code" :options="editorOptions" ref="myEditor"></codemirror>
</template>

<script>
import { codemirror } from 'vue-codemirror'
export default {
    data() {
        return {
            code: 'const a = 10',
            editorOptions: {
                // codemirror options
                tabSize: 4,
                mode: 'text/javascript',
                theme: 'base16-dark',
                lineNumbers: true,
                line: true
            }
        }
    },
    components: {
        codemirror
    },
    methods: {
        onEditorReady(editor) {
            console.log('the editor is readied!', editor)
        },
        onEditorFocus(editor) {
            console.log('the editor is focus!', editor)
        },
        onEditorCodeChange(newCode) {
            console.log('this is new code', newCode)
            this.code = newCode
        }
    },
    computed: {
        editor() {
            return this.$refs.myEditor.editor
        }
    },
    mounted() {
        console.log('this is current editor object', this.editor)
        // you can use this.editor to do something...
    }
}
</script>
