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
            <img class="img" src="./img/addproduct.png" />
          </label>
          <input
            id="file-input"
            type="file"
            @change="previewImage"
            accept="image/*"
          />
        </div>
        <!-- <div class="form-group image-upload text-center">
          <img class="preview" :src="imageData" />
        </div> -->
        <div class="form-group text-light">
          <label>ADD TITLE (EN)</label>
          <input
            type="title"
            class="form-control"
            id="productstitle"
            aria-describedby="product"
            placeholder="Add title"
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
            placeholder="Add title"
            v-model="body.pd_title_ch"
          />
        </div>
        <div class="form-group text-light">
          <label for="x">ADD CONTENT (EN)</label>
          <textarea
            class="form-control"
            id="x"
            rows="6"
            placeholder="Add content"
            v-model="body.pd_content_en"
          ></textarea>
        </div>
        <div class="form-group text-light">
          <label for="x">ADD CONTENT (CH)</label>
          <textarea
            class="form-control"
            id="x"
            rows="6"
            placeholder="Add content"
            v-model="body.pd_content_ch"
          ></textarea>
        </div>
​
        <!-- Add Svg Icon-->
        <div style="height:50px;">
          <div class="form-row text-light">
            <div class="form-group col-md-6">
              <div>
                <label class="text-left text-light" for="x"
                  >SPECIFICATION(EN)</label
                >
              </div>
            </div>
            <div class="form-group col-md-6">
              <div class="form-row">
                <div class="form-group col-sm-8">
                  <label class="text-left text-light" for="x"
                    >SPECIFICATION(CH)</label
                  >
                </div>
                <div
                  class="text-right form-group col-sm-4"
                  @click="addSpecification"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    class="ml-2 cursor-pointer"
                  >
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path
                      fill="white"
                      d="M11 11V7h2v4h4v2h-4v4h-2v-4H7v-2h4zm1 11C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16z"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          class="form-row text-light"
          v-for="(speci, index) in specification"
          :key="index"
        >
          <div class="form-group col-3">
            <input
              v-model="speci.DescriptionEng"
              type="text"
              class="form-control"
              id="inputEmail4"
              placeholder="Description"
            />
          </div>
          <div class="form-group col-3">
            <input
              v-model="speci.ThaiRiceEng"
              type="text"
              class="form-control"
              id="inputPassword4"
              placeholder="Thai Rice Standard"
            />
          </div>
          <div class="form-group col-3">
            <input
              v-model="speci.DescriptionCh"
              type="text"
              class="form-control"
              id="inputEmail4"
              placeholder="Description"
            />
          </div>
          <div class="form-group col-3">
            <input
              v-model="speci.ThaiRiceCh"
              type="text"
              class="form-control"
              id="inputPassword4"
              placeholder="Thai Rice Standard"
            />
          </div>
        </div>
        <div class="text-right">
          <router-link to="../Products">
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
        specifications: [],
      },
      specification: [
        {
          DescriptionEng: "",
          ThaiRiceEng: "",
          DescriptionCh: "",
          ThaiRiceCh: "",
        },
      ],
      imageData: "",
      imageShow: false,
      myStyle: {
        backgroundColor: "#0F1F1E"
      }
    };
  },
  methods: {
    addSpecification() {
      this.specification.push({
        DescriptionEng: "",
        ThaiRiceEng: "",
        DescriptionCh: "",
        ThaiRiceCh: "",
      });
      console.log(this.specification);
    },
    publish() {
      const data = {
        specification: this.specification,
      };
      alert(JSON.stringify(data, null, 2));
    },
    previewImage: function(event) {
      // Reference to the DOM input element
      var input = event.target;
      // Ensure that you have a file before attempting to read it
      if (input.files && input.files[0]) {
        // create a new FileReader to read this image and convert to base64 format
        var reader = new FileReader();
        // Define a callback function to run, when FileReader finishes its job
        reader.onload = (e) => {
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
      this.body.specifications = this.specification;
      await axios
        .post("http://localhost:3000/api/products", this.body)
        .then(
          response => console.log(response.data),
          this.$router.push("/products")
        )
        .catch(error => {
          console.error(error);
          return error.response.data;
        });
    }
  },
};
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Mitr:wght@300;500&family=Prompt:wght@200;300&display=swap");
​
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