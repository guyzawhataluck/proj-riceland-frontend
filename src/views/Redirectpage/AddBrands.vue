<template>
  <div>
    <base-header class="pr-8 pb-5 pt-2">
      <!-- Card stats -->
    </base-header>
    <div style="myStyle" id="wrapper">
      <form class="container py-6">
        <div class="form-group text-light">
          <label>BRAND (EN)</label>
          <input
            type="title"
            class="form-control"
            id="productstitle"
            aria-describedby="product"
            placeholder="Add Title"
          />
        </div>
        <div class="form-group text-light">
          <label>BRAND (CH)</label>
          <input
            type="title"
            class="form-control"
            id="productstitle"
            aria-describedby="product"
            placeholder="Add Title"
          />
        </div>

        <div class="text-right">
          <router-link to="../settingbrands" class="pr-2">
            <button type="cancel" class="btn btn-outline-white">
              CANCEL
            </button>
          </router-link>
          <button type="submit" class="btn btn-gold" @click="publish">
            PUBLISH
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      myStyle: {
        backgroundColor: "#0F1F1E",
        height: "100%",
      },
    };
  },
};
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Mitr:wght@300;500&family=Prompt:wght@200;300&display=swap");

* {
  font-family: "Mitr", sans-serif;
  font-weight: 300;
  background-color: #0f1f1e;
  color: white;
}
#wrapper {
  height: 100vh;
}
.btn-gold {
  background-color: #cc9833;
  border-color: white;
  color: white;
}
.container {
  width: 545px;
}
.form-group > input {
  border-radius: 16px;
}
.btn {
  border-radius: 16px;
}
</style>
