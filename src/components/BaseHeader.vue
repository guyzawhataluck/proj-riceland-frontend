<template>
  <div class="header head" :class="{[`bg-${type}`]: type}">
     <b-container fluid>
      <div class="header-body">
        <slot></slot>
      </div>
     </b-container>
  </div>
</template>
<script>
  export default {
    name: 'base-header',
    props: {
      type: {
        type: String,
        default: 'light',
        description: 'background type'
      }
    }
  }
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Mitr:wght@200;300;500&family=Prompt:wght@200;300&display=swap");
.head{
    font-family: 'Mitr', sans-serif;
    font-weight: 200;
}
</style>
