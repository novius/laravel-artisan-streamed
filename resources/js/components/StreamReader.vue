<template>
    <div class="py-8">
        <div ref="viewer" class="bg-white"></div>
    </div>
</template>

<script setup>
import {ref, onMounted} from 'vue'
import {EditorView} from "codemirror"
import {lineNumbers} from '@codemirror/view'
import {EditorState} from "@codemirror/state"

const viewer = ref(null)

const props = defineProps({
    commandId: String,
    fetchUrl: String,
})

const content = ref('')
const lineNumber = ref(0)
let editorView = null;
let intervalId = null;

onMounted(() => {

    let state = EditorState.create({
        extensions: [
            //basicSetup,
            lineNumbers(),
            EditorState.readOnly.of(true),
        ]
    })

    editorView = new EditorView({
        state,
        parent: viewer.value,
        editable: false,
    })


    fetchContent();
    intervalId = setInterval(() => {
        fetchContent();
    }, 2000)
})

async function postData(url = "", data = {}) {
    // Default options are marked with *
    const response = await fetch(url, {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, *cors, same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "same-origin", // include, *same-origin, omit
        headers: {
            "Content-Type": "application/json",
            "X-CSRF-TOKEN": document.head.querySelector("[name~=csrf-token][content]").content,
        },
        redirect: "follow", // manual, *follow, error
        referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify(data), // body data type must match "Content-Type" header
    });

    return response.json();
}

function fetchContent() {
    postData(props.fetchUrl, {line: lineNumber.value}).then((data) => {
        editorView.dispatch({
            changes: {
                from: editorView.state.doc.length,
                insert: data['content']
            }
        })

        lineNumber.value = data['currentLine'];
    });
}

</script>
