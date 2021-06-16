<template>
  <div>
    <!-- Header -->
    <!-- Page content -->
    <b-container fluid class="mt--7 pt-md-8">
      <b-row class="justify-content-center">
        <b-col lg="5" md="7">
          <b-card no-body class="border-0 mb-0">
            <b-card-body class="px-lg-5 py-lg-5">
              <validation-observer v-slot="{handleSubmit}" ref="formValidator">
                <b-form role="form" @submit.prevent="handleSubmit(onSubmit)">
                  <label>Sign in</label>
                  <base-input
                    class="mb-3"
                    name="email"
                    prepend-icon="ni ni-email-83"
                    placeholder="Username"
                    v-model="user"
                  >
                  </base-input>

                  <base-input
                    class="mb-3"
                    name="Password"
                    prepend-icon="ni ni-lock-circle-open"
                    type="password"
                    placeholder="Password"
                    v-model="password"
                  >
                  </base-input>
                  <div class="text-center black">
                    <base-button @click="login" class="my-4"
                      >Sign in</base-button
                    >
                  </div>
                </b-form>
              </validation-observer>
            </b-card-body>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
export default {
  data() {
    return {
      user: "",
      password: "",
    };
  },
  methods: {
    login() {
      (this.user === "admin" && this.password === "1212312121")
        ? this.$router.push("./customerlist")
        : alert("ล็อกอินใหม่");
    },
  },
};
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Mitr:wght@300;500&family=Prompt:wght@200;300&display=swap");

* {
  font-family: "Mitr", sans-serif;
  font-weight: 300;
  width: 100%;
}
.black {
  color: black;
}
</style>
