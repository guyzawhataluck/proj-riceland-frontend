<template>
  <div>
    <base-header class="pr-8 pb-5 pt-2">
      <!-- Card stats -->
    </base-header>
    <div :style="myStyle" id="wrapper">
      <form class="container py-6">
        <div class="form-group image-upload text-center">
          <label for="file-input">
            <img class="img"
              src="./img/addpostprofile.png"
            />
          </label>

          <input id="file-input" type="file" />
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
          />
        </div>
        <div class="form-group text-light">
          <label for="x">ADD CONTENT (EN)</label>
          <textarea
            class="form-control"
            id="x"
            rows="6"
            placeholder="Add Content"
          ></textarea>
        </div>
        <div class="form-group text-light">
          <label for="x">ADD CONTENT (CH)</label>
          <textarea
            class="form-control"
            id="x"
            rows="6"
            placeholder="Add Content"
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

export default {
  data() {
    return {
      myStyle: {
        backgroundColor: "#0F1F1E",
        height: "100%",
      },
      value: "",
    };
  },
  components: {DatePicker},
  data() {
    return {
      time1: null,
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
.btn-gold {
  background-color: #cc9833;
  border-color: white;
  color: white;
}
.image-upload > input {
  display: none;
}
.img{
    height:505px;
    width: 505px;
}
.container{
    width: 545px;
}
.form-group > input{
    border-radius: 16px;
}
.btn{
    border-radius: 16px;
}
</style>
