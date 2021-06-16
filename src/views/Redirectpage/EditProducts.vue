<template>
  <div>
    <base-header class="pr-8 pb-5 pt-2">
      <!-- Card stats -->
    </base-header>
    <div :style="myStyle" id="wrapper">
      <form class="container py-6">
        <div class="form-group image-upload text-center">
          <label for="file-input">
            <img class="img" src="./img/addproduct.png" />
          </label>

          <input id="file-input" type="file" />
        </div>
        <div class="form-group text-light">
          <label>ADD TITLE (EN)</label>
          <input
            type="title"
            class="form-control"
            id="productstitle"
            aria-describedby="product"
            placeholder="Add title"
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
          />
        </div>
        <div class="form-group text-light">
          <label for="x">ADD CONTENT (EN)</label>
          <textarea
            class="form-control"
            id="x"
            rows="6"
            placeholder="Add content"
          ></textarea>
        </div>
        
        <div class="form-group text-light">
          <label for="x">ADD CONTENT (CH)</label>
          <textarea
            class="form-control"
            id="x"
            rows="6"
            placeholder="Add content"
          ></textarea>
        </div>

        <!-- Add Svg Icon-->
        <div>
          <div class="form-row text-light">
            <div>
              <label class="text-left text-light" for="x">SPECIFICATION</label>
            </div>
            <div class="text-right">
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
        <div class="form-row text-light">
          <div class="form-group col-md-6">
            <input
              type="email"
              class="form-control"
              id="inputEmail4"
              placeholder="Description"
            />
          </div>
          <div class="form-group col-md-6">
            <input
              type="password"
              class="form-control"
              id="inputPassword4"
              placeholder="Thai Rice Standard"
            />
          </div>
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
export default {
  data() {
    return {
      myStyle: {
        backgroundColor: "#0F1F1E",
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
