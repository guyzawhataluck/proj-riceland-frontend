<template>
  <div>
    <base-header class="pr-8 pb-5 pt-2">
      <!-- Card stats -->
    </base-header>
    <div id="wrapper">
      <form class="container py-6" v-on:submit.prevent="submitForm">
        <input
          v-if="imageShow == true"
          id="file-input"
          type="file"
          @change="previewImage"
          accept="image/*"
        />
        <img class="preview" :src="imageData" v-if="imageShow == true" />
        <div class="form-group image-upload text-center">
          <label for="file-input" v-if="imageShow == false">
            <img class="img" src="./img/addrelated.png" />
          </label>
          <input
            id="file-input"
            type="file"
            @change="previewImage"
            accept="image/*"
          />
        </div>
        <div class="form-group text-light">
          <label>ADD TITLE (EN)</label>
          <input
            type="title"
            class="form-control"
            id="productstitle"
            aria-describedby="product"
            placeholder="Add Title"
            v-model="body.pd_title_en"
          />
        </div>
        <div class="form-group text-light">
          <label>ADD TITLE (CH)</label>
          <input
            type="title"
            class="form-control"
            id="productstitle"
            aria-describedby="product"
            placeholder="Add Title"
            v-model="body.pd_title_ch"
          />
        </div>
        <div class="form-group text-light">
          <label for="x">ADD CONTENT (EN)</label>
          <textarea
            class="form-control"
            id="x"
            rows="6"
            placeholder="Add Content"
            v-model="body.pd_content_en"
          ></textarea>
        </div>
        <div class="form-group text-light">
          <label for="x">ADD CONTENT (CH)</label>
          <textarea
            class="form-control"
            id="x"
            rows="6"
            placeholder="Add Content"
            v-model="body.pd_content_ch"
          ></textarea>
        </div>

        <div class="text-right">
          <router-link to="../relatedproducts" class="pr-2">
            <button type="cancel" class="btn btn-outline-white">
              CANCEL
            </button>
          </router-link>
          <button type="submit" class="btn btn-gold">PUBLISH</button>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import axios from "axios";

export default {
  data: () => {
    return {
      body: {
        pd_title_en: "",
        pd_title_ch: "",
        pd_content_en: "",
        pd_content_ch: "",
        pd_img_url: "",
        is_related_product: true
      },
      imageData: "",
      imageShow: false,
    };
  },
  methods: {
    previewImage: function(event) {
      // Reference to the DOM input element
      var input = event.target;
      // Ensure that you have a file before attempting to read it
      if (input.files && input.files[0]) {
        // create a new FileReader to read this image and convert to base64 format
        var reader = new FileReader();
        // Define a callback function to run, when FileReader finishes its job
        reader.onload = e => {
          // Note: arrow function used here, so that "this.imageData" refers to the imageData of Vue component
          // Read image as base64 and set to imageData
          this.imageData = e.target.result;
          this.imageShow = true;
        };
        // Start the reader job - read file as a data url (base64 format)
        reader.readAsDataURL(input.files[0]);
      }
    },
    async submitForm() {
      this.body.pd_img_url = this.imageData;
      await axios
        .post("http://localhost:3000/api/relatedProducts", this.body)
        .then(
          response => console.log(response.data),
          this.$router.push("/relatedproducts")
        )
        .catch(error => {
          console.error(error);
          return error.response.data;
        });
    }
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
.btn-gold {
  background-color: #cc9833;
  border-color: white;
  color: white;
}
.image-upload > input {
  display: none;
}
img {
  height: 505px;
  width: 505px;
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