<template>
  <div>
      <section>
          <!-- <div class="field is-grouped">
            <button class="button is-small is-danger">
                <span class="icon is-small">
                    <i class="fas fa-trash-alt"></i>
                </span>
            </button>
            <button class="button is-small"> 
                <span class="icon is-small">
                    <i class="fas fa-edit"></i>
                </span></button>
          </div> -->
          <div class="section"> 
              <div class="field is-grouped">
            <button class="button is-small"> 
                <span class="icon is-small">
                    
                    <i class="fas fa-edit"></i>
                </span>
            </button>
            <button class="button is-small is-danger">
                <span class="icon is-small">
                    <i class="fas fa-trash-alt"></i>
                </span>
            </button>
          </div>
          <ul>
             <li>Name: </li> 
             <li>Username: </li>
             <li>Commands:</li>
             <li>Host: </li>
             <li>Port: </li>
             <li>Wait: </li>
             <li>Criteria: </li>
          </ul>
          </div>
      </section>
  </div>
</template>

<script>
export default {

}
</script>

<style lang ="scss" scoped>
.section {
    border: 2px #000 solid;
    margin: 10px;
    padding: 10px 5px 10px 50px;
}

button {
    float: right;
    margin: 5px;
    width: 35px;
    padding: 5px;
    margin-right: 15px;
}

.field {
    float: right;
}

li {
    margin: 5px;
}
</style>