<template>
    <div class="container">
        <h3 class="title is-4">New form</h3>
        <div class="input_boxes">
            <label>Name:</label>
            <input class="input is-small" type="text" placeholder="Name">
            </div>
        <div class="input_boxes">
            <label>Username:</label>
            <input class="input is-small" type="text" placeholder="Username">
        </div>
        <div class="input_boxes">
            <label>Password:</label>
            <input class="input is-small" type="password" placeholder="Password">
        </div>
        <div class="input_boxes">
            <label>Host:</label>
            <input class="input is-small" type="text" placeholder="Host">
        </div>
        <div class="input_boxes">
            <label>Port:</label>
            <input class="input is-small" type="text" placeholder="Port">
        </div>
        <div class="input_boxes">
            <label>Commands:</label>
            <input class="input is-small" type="text" placeholder="Commands">
        </div>
        <div class="input_boxes">
            <label>Wait:</label>
            <input class="input is-small" type="text" placeholder="Wait">
        </div>
        <div class="input_boxes">
            <label>Criteria:</label>
            <input class="input is-small" type="text" placeholder="Criteria">
        </div>
        <div class="field is-grouped">
            <div class="button_set">
                <button class="button" @click="cancelForm()">Cancel</button>
            </div>
            <div class="button_set">
                <button class="button" @click="saveForm()">Save</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            input: {
                name: "",
                password: ""
            },
            showModal: false
        }
    },
    methods: {
        saveForm() {

        },
        cancelForm() {
            this.$router.push('/MainPage');
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/main.scss';

.input_boxes {
  max-width: 400px;
  // text-align: center;
  //  padding: 10px;
   margin: 10px; 
   display: flex;
   flex-direction: row;
   justify-content: flex-end, center, space-between, space-around;
}

input {
    margin-left: 10px;
}
.button_set {
    padding: 5px;
    margin: 5px;
}
</style>