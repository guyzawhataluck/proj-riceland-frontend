<template>
  <div>
    <base-header class="pr-8 pb-5 pt-2">
      <!-- Card stats -->
    </base-header>
    <div :style="myStyle" id="wrapper">
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
            <img class="img" src="./img/addpostprofile.png" />
          </label>
          <input
            id="file-input"
            type="file"
            @change="previewImage"
            accept="image/*"
          />
        </div>
        <div class="form-group text-light">
          <label>CHOOSE DATE</label>
          <div>
            <date-picker v-model="time1" valueType="format"></date-picker>
          </div>
        </div>
        <div class="form-group text-light">
          <label>ADD TITLE (EN)</label>
          <input
            type="title"
            class="form-control"
            id="productstitle"
            aria-describedby="product"
            placeholder="Add Title"
            v-model="body.news_title_en"
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
            v-model="body.news_title_ch"
          />
        </div>
        <div class="form-group text-light">
          <label for="x">ADD CONTENT (EN)</label>
          <textarea
            class="form-control"
            id="x"
            rows="6"
            placeholder="Add Content"
            v-model="body.news_content_en"
          ></textarea>
        </div>
        <div class="form-group text-light">
          <label for="x">ADD CONTENT (CH)</label>
          <textarea
            class="form-control"
            id="x"
            rows="6"
            placeholder="Add Content"
            v-model="body.news_content_ch"
          ></textarea>
        </div>

        <div class="text-right">
          <button type="cancel" class="btn btn-outline-white">CANCEL</button>
          <button type="submit" class="btn btn-gold">PUBLISH</button>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import DatePicker from "vue2-datepicker";
import "vue2-datepicker/index.css";
import axios from "axios";

export default {
    components: {DatePicker},
  data: () => {
    return {
      body: {
        news_title_en: "",
        news_title_ch: "",
        news_content_en: "",
        news_content_ch: "",
        news_img_url: "",
        news_date: ""
      },
      time1: null,
      imageData: "",
      imageShow: false,
      myStyle: {
        backgroundColor: "#0F1F1E",
        height: "100%"
      },
      value: ""
    };
  },
  components: { DatePicker },
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
          console.log(this.imageShow);

          console.log(this.imageData);
        };
        // Start the reader job - read file as a data url (base64 format)
        reader.readAsDataURL(input.files[0]);
      }
    },
    async submitForm() {
      this.body.news_img_url = this.imageData;
      this.body.news_date = this.time1;
      await axios
        .post("http://localhost:3000/api/news", this.body)
        .then(
          response => console.log(response.data),
          this.$router.push("/news")
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
.img {
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