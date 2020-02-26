<template>
  <div class="container">
    <div class="button_set">
        <button class="button is-lovely is-centered" @click="newForm()">New</button>
    </div>
        <!-- <div class="button_set">
            <button class="button is-lovely" @click="editForm()">Edit</button>
        </div>
        <div class="button_set">
            <button class="button is-lovely" @click="deleteForm()">Delete</button>
        </div> -->

    <div>
        <DisplayForms/>
        <!-- <DisplayForms/> -->
    </div>

  </div>
</template>

<script>
import DisplayForms from './displayForms.vue'
export default {
    components: {
        DisplayForms
    },
    data() {
        return {
            
        }
    },
    methods: {
        newForm() {
             this.$router.push("/NewForm");
        },
        editForm() {

        },
        deleteForm() {

        }
    }
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/main.scss';

.button_set {
    display: flex;
    margin: 5px;
    padding: 5px;
}

// .container {
//     text-align: center;
// }
</style>