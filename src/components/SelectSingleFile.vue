<template>
    <div class="container">
        <div class="large-12 medium-12 small-12 cell">
            <label>
                <input type="file" id="file" ref="file" v-on:change="handleFileUpload()"/>
            </label>
            <div class="large-6 medium-3 small-2">
                <v-btn name="addFile" v-on:click="addFile()" color="info">选择上传文件</v-btn>
                <v-btn name="submitFile" v-on:click="submitFile()" color="info">上传图片</v-btn>
            </div>
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
                file: ''
            }
        },

        methods: {
            addFile(){
                this.$refs.file.click();
            },


            /*
              Submits the file to the server
            */
            submitFile(){
                /*
                        Initialize the form data
                    */
                let formData = new FormData();

                /*
                    Add the form data we need to submit
                */
                formData.append('file', this.file);

                /*
                  Make the request to the POST /single-file URL
                */
                api.request('post', '/uploadSingleFile',
                    formData,
                    {
                        headers: {
                            'Content-Type': 'multipart/form-data'
                        }
                    }
                ).then(function(response){
                    console.log('SUCCESS!!');
                    store.commit('setSingleUploadFile', response.data);
                })
                    .catch(function(){
                        console.log('FAILURE!!');
                    });
            },

            /*
              Handles a change on the file upload
            */
            handleFileUpload(){
                this.file = this.$refs.file.files[0];
            }
        }
    }
</script>

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