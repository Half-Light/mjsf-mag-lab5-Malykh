<template>
  <div class="editable-text">
    <template v-if="!editMode">
      <div v-html="text"></div>
    <a class="edit-link" @click.stop="editMode=!editMode">Edit</a>
    </template>
    <template v-else >
      <div class="row">
        <div class="col">
          <div class="form-group">
            <ckeditor :editor="editor" v-model="text" :config="editorConfig"></ckeditor>
          </div>
          <div>
            <button class="brn btn-primary" @click="save">Save</button>
          </div>

        </div>
      </div>
    </template>
  </div>
</template>
<script>
  import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
  export default {
    name: "Editable",
    props: {
      storageKey: {
        type: String,
        default: "editableText",
      }
    },
    data(){
      return {
        text: "",
        editMode: false,
        editor: ClassicEditor,
        editorConfig: {
          // The configuration of the rich-text editor.
        }
      }
    },
    mounted() {
      this.fetch();
    },
    methods: {
      save(){
        localStorage.setItem(this.storageKey, this.text);
        this.editMode = false;
      },
      fetch(){
        this.text = localStorage.getItem(this.storageKey) || "";
      }
    }

  }
</script>

<style scoped>
  .editable-text {
    position: relative;
  }
  .edit-link {
    position: absolute;
    display: block;
    right: 0px;
    top: 0px;
  }

</style>
