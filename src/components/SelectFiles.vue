<style>
    input[type="file"]{
        position: absolute;
        top: -2500px;
    }

    div.file-listing{
        width: 800px;
    }

    span.remove-file{
        color: red;
        cursor: pointer;
        float: right;
    }
</style>

<template>
    <div class="container">
        <div class="large-12 medium-12 small-12 cell">
            <label>文件清单
                <input type="file" id="files" ref="files" name="files" multiple v-on:change="handleFilesUpload()"/>
            </label>
        </div>
        <div class="large-12 medium-12 small-12 cell">
            <div v-for="(file, key) in files" class="file-listing">{{ file.name }} <span class="remove-file" v-on:click="removeFile( key )">删除</span></div>
        </div>
        <br>
        <div class="large-6 medium-3 small-2">
            <v-btn name="addFiles" v-on:click="addFiles()" color="info">选择上传文件</v-btn>
            <v-btn name="uploadFiles" v-on:click="submitFiles()" color="info">上传文件</v-btn>
        </div>
    </div>
</template>

<script>
    import api from '../api'
    import store from '../store'

    export default {
        /*
          Defines the data used by the component
        */
        data(){
            return {
                files: []
            }
        },

        /*
          Defines the method used by the component
        */
        methods: {
            /*
              Adds a file
            */
            addFiles(){
                this.$refs.files.click();
            },

            /*
              Submits files to the server
            */
            submitFiles(){
                /*
                  Initialize the form data
                */
                let formData = new FormData();

                /*
                  Iteate over any file sent over appending the files
                  to the form data.
                */
                for( var i = 0; i < this.files.length; i++ ){
                    let file = this.files[i];

                    formData.append('files'/*[' + i + ']'*/, file);
                }

                /*
                  Make the request to the POST /select-files URL
                */
                api.request( 'post','/uploadFiles',
                    formData,
                    {
                        headers: {
                            'Content-Type': 'multipart/form-data'
                        }
                    }
                ).then(function(response){
                    console.log('SUCCESS!!');
                    store.commit('setLoanGuideAppFiles', response.data);
                })
            },

            /*
              Handles the uploading of files
            */
            handleFilesUpload(){
                let uploadedFiles = this.$refs.files.files;

                /*
                  Adds the uploaded file to the files array
                */
                for( var i = 0; i < uploadedFiles.length; i++ ){
                    this.files.push( uploadedFiles[i] );
                }
            },

            /*
              Removes a select file the user has uploaded
            */
            removeFile( key ){
                this.files.splice( key, 1 );
            }
        }
    }
</script>