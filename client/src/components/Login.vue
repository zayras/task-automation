<template>
  <div class="container">
    <h2 class="title is-2" style="padding: 5px; margin-top:10px; text-align:center;">Welcome</h2>
    <form action="submit">
      <div class="input_boxes">
        <label>Username: </label>
        <input class="input" size="small" type="text" placeholder="Username" v-model="input.username">
      </div>
      <div class="input_boxes">
        <label>Password: </label>
        <input class="input is-center" type="password" placeholder="Password" v-model="input.password">
      </div>
    </form>
    <div class="button_set">
      <button class="button is-lovely" @click.stop.prevent="submit()">Submit</button>
    </div>
  </div>
</template>

<script>
// import displayForm from './DisplayForm.vue';

export default {
  data() {
    return {
      input: {
        username: "",
        password: ""
      }
    }
  },
  components: {
    // displayForm
  },
  methods: {
    submit() {
      this.$router.push("/MainPage");
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/main.scss';
.container {
  max-width: 400px;
}

.input_boxes {
  max-width: 400px;
  // text-align: center;
  //  padding: 10px;
   margin: 10px; 
}

label {
  margin: 2px;
  padding: 5px;
}

.button_set {
  padding: 10px;
  margin: 10px;
  // display: inherit;
  text-align: center;
}
</style>