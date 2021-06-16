<template>
  <div>
    <base-header class="pr-8 pb-5 pt-2">
      <!-- Card stats -->
    </base-header>
    <div id="wrapper" style="background-color: #0f1f1e; color: white;">
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
        <div style="height:20px;">
          <div class="form-row text-light">
            <div class="form-group col-sm-6">
              <div>
                <label class="text-left text-light" for="x"
                  >SPECIFICATION(EN)</label
                >
              </div>
            </div>
            <div class="form-group col-6">
              <div class="form-row">
                <div class="form-group col-8">
                  <label class="text-left text-light" for="x"
                    >SPECIFICATION(CH)</label
                  >
                </div>
                <div
                  class="text-right form-group col-3"
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
              id="DescriptionEng"
              placeholder="Description"
            />
          </div>
          <div class="form-group col-3">
            <input
              v-model="speci.ThaiRiceEng"
              type="text"
              class="form-control"
              id="ThaiRiceEng"
              placeholder="Thai Rice Standard"
            />
          </div>
          <div class="form-group col-2">
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
          <div class="form-group col-1 pt-2" @click="delSpecification(index)">
            <svg
              width="14"
              height="15"
              viewBox="0 0 14 15"
              fill="red"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.5 1C1.23478 1 0.98043 1.10536 0.792893 1.29289C0.605357 1.48043 0.5 1.73478 0.5 2V3C0.5 3.26522 0.605357 3.51957 0.792893 3.70711C0.98043 3.89464 1.23478 4 1.5 4H2V13C2 13.5304 2.21071 14.0391 2.58579 14.4142C2.96086 14.7893 3.46957 15 4 15H10C10.5304 15 11.0391 14.7893 11.4142 14.4142C11.7893 14.0391 12 13.5304 12 13V4H12.5C12.7652 4 13.0196 3.89464 13.2071 3.70711C13.3946 3.51957 13.5 3.26522 13.5 3V2C13.5 1.73478 13.3946 1.48043 13.2071 1.29289C13.0196 1.10536 12.7652 1 12.5 1H9C9 0.734784 8.89464 0.48043 8.70711 0.292893C8.51957 0.105357 8.26522 0 8 0L6 0C5.73478 0 5.48043 0.105357 5.29289 0.292893C5.10536 0.48043 5 0.734784 5 1H1.5ZM4.5 5C4.63261 5 4.75979 5.05268 4.85355 5.14645C4.94732 5.24021 5 5.36739 5 5.5V12.5C5 12.6326 4.94732 12.7598 4.85355 12.8536C4.75979 12.9473 4.63261 13 4.5 13C4.36739 13 4.24021 12.9473 4.14645 12.8536C4.05268 12.7598 4 12.6326 4 12.5V5.5C4 5.36739 4.05268 5.24021 4.14645 5.14645C4.24021 5.05268 4.36739 5 4.5 5ZM7 5C7.13261 5 7.25979 5.05268 7.35355 5.14645C7.44732 5.24021 7.5 5.36739 7.5 5.5V12.5C7.5 12.6326 7.44732 12.7598 7.35355 12.8536C7.25979 12.9473 7.13261 13 7 13C6.86739 13 6.74021 12.9473 6.64645 12.8536C6.55268 12.7598 6.5 12.6326 6.5 12.5V5.5C6.5 5.36739 6.55268 5.24021 6.64645 5.14645C6.74021 5.05268 6.86739 5 7 5ZM10 5.5V12.5C10 12.6326 9.94732 12.7598 9.85355 12.8536C9.75979 12.9473 9.63261 13 9.5 13C9.36739 13 9.24021 12.9473 9.14645 12.8536C9.05268 12.7598 9 12.6326 9 12.5V5.5C9 5.36739 9.05268 5.24021 9.14645 5.14645C9.24021 5.05268 9.36739 5 9.5 5C9.63261 5 9.75979 5.05268 9.85355 5.14645C9.94732 5.24021 10 5.36739 10 5.5Z"
                fill="#FF5151"
              />
            </svg>
          </div>
        </div>
        <div class="text-right">
          <router-link to="../products" class="pr-2">
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
    };
  },
  methods: {
    delSpecification(index){
      this.specification.splice(index,1);
    },
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
  font-family: "Mitr", sans-serif;
  font-weight: 300;
}
.image-upload > input {
  display: none;
}
img {
  height: 505px;
  width: 505px;
}
.container {
  width: 600px;
}
.form-group > input {
  border-radius: 16px;
  font-family: "Mitr", sans-serif;
  font-weight: 300;
}
.btn {
  border-radius: 16px;
}
.form-control {
  background-color: #0f1f1e;
}
.text-light {
  color: white;
}
</style>
