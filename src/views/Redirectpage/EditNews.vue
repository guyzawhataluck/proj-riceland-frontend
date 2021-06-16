<template>
  <div>
    <base-header class="pr-8 pb-5 pt-2">
      <!-- Card stats -->
    </base-header>
    <div :style="myStyle" id="wrapper">
      <form class="container py-6" v-on:submit.prevent="submitForm">
        <input
          
          id="file-input"
          ref="file-input"
          type="file"
          @change="previewImage"
          accept="image/*"
        />
        <img class="preview" :src="imageData" v-if="imageShow == true" />
        <div class="form-group image-upload text-center">
          <label for="file-input" v-if="(notchange == true)&&(imageShow == false)">
            <img class="img" :src="list.news_img_url" />
          </label>
          <input
            id="file-input"
            ref="file-input"
            type="file"
            @change="previewImage"
            accept="image/*"
          />
        </div>
        <div class="form-group text-light">
          <label>CHOOSE DATE</label>
          <div>
            <date-picker 
            id="news_date"
            ref="news_date"
            valueType="format"
            :value="list.news_date">
            </date-picker>
          </div>
        </div>
        <div class="form-group text-light">
          <label>ADD TITLE (EN)</label>
          <input
            type="title"
            class="form-control"
            id="news_title_en"
            ref="news_title_en"
            aria-describedby="product"
            placeholder="Add Title"
            :value="list.news_title_en"
            
          />
        </div>
        <div class="form-group text-light">
          <label>ADD TITLE (CH)</label>
          <input
            type="title"
            class="form-control"
            id="news_title_ch"
            ref="news_title_ch"
            aria-describedby="product"
            placeholder="Add Title"
            :value="list.news_title_ch"
          />
        </div>
        <div class="form-group text-light">
          <label for="x">ADD CONTENT (EN)</label>
          <textarea
            class="form-control"
            id="news_content_en"
            ref="news_content_en"
            rows="6"
            placeholder="Add Content"
            :value="list.news_content_en"
          ></textarea>
        </div>
        <div class="form-group text-light">
          <label for="x">ADD CONTENT (CH)</label>
          <textarea
            class="form-control"
            id="news_content_ch"
            ref="news_content_ch"
            rows="6"
            placeholder="Add Content"
            :value="list.news_content_ch"
          ></textarea>
        </div>

        <div class="text-right">
           <router-link to="../settingbrands">
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
import DatePicker from "vue2-datepicker";
import "vue2-datepicker/index.css";
import axios from "axios";

export default {
  data() {
    return {
      body: {
        news_title_en: "",
        news_title_ch: "",
        news_content_en: "",
        news_content_ch: "",
        news_img_url: "",
        news_date: ""
      },
      list:[],
      time1: null,
      imageData: "",
      imageShow: false,
      notchange: true,
      myStyle: {
        backgroundColor: "#0F1F1E",
        height: "100%"
      },
      value: ""
    };
  },
  components: { DatePicker },
  created: function() {
    console.log(this.$route.params.id);
    const id = this.$route.params.id;
    axios.get(`http://localhost:3000/api/news/${id}`).then(response => {
      this.list = response.data.data;
    });
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
          console.log(this.imageShow);
          this.notchange = false;
          console.log(this.imageData);
        };
        // Start the reader job - read file as a data url (base64 format)
        reader.readAsDataURL(input.files[0]);
      }
    },
    async submitForm() {
      this.body.news_title_en = this.$refs["news_title_en"].value;
      this.body.news_title_ch = this.$refs["news_title_ch"].value;
      this.body.news_content_en = this.$refs["news_content_en"].value;
      this.body.news_content_ch = this.$refs["news_content_ch"].value;
      if(this.notchange){
        this.body.news_img_url = this.list.news_img_url;
      }
      else{this.body.news_img_url = this.imageData;}
      
      this.body.news_date = this.$refs["news_date"].value;
      console.log(this.body);
      // this.body.news_img_url = this.imageData;
      // this.body.news_date = this.time1;
      const id = this.$route.params.id;
      await axios
        .put(`http://localhost:3000/api/news/${id}`, this.body)
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
.preview {
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