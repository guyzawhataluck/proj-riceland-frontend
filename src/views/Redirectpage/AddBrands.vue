<template>
  <div>
    <base-header class="pr-8 pb-5 pt-2">
      <!-- Card stats -->
    </base-header>
    <div :style="myStyle" id="wrapper">
      <form class="container py-6" v-on:submit.prevent="submitForm">
        <div class="form-group text-light">
          <label>BRAND (EN)</label>
          <input
            type="title"
            class="form-control"
            id="brand_name_en"
            aria-describedby="product"
            placeholder="Add Title"
            v-model="body.brand_name_en"
          />
        </div>
        <div class="form-group text-light">
          <label>BRAND (CH)</label>
          <input
            type="title"
            class="form-control"
            id="brand_name_ch"
            aria-describedby="product"
            placeholder="Add Title"
            v-model="body.brand_name_ch"
          />
        </div>

        <div class="text-right">
          <router-link to="../settingbrands" class="pr-2">
            <button type="cancel" class="btn btn-outline-white">
              CANCEL
            </button>
          </router-link>
          <button type="submit" class="btn btn-gold" >PUBLISH</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: 'addBrands',
  data() {
    return {
      myStyle: {
        backgroundColor: "#0F1F1E",
        height: "100%",
      },
      body: {
        brand_name_en: "",
        brand_name_ch: ""
      }
    };
  },
  methods: {
    async submitForm() {
      await axios.post('http://localhost:3000/api/brands', this.body)
        .then((response) => response.data, this.$router.push("/settingbrands")) 
        .catch((error) => {
          console.error(error);
          return error.response.data;
        });
    },   
  }
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
