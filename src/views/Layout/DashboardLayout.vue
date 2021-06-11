<template>
  <div class="wrapper">
    <side-bar>
      <div class="text-center pt-4">
        <h1>RICELAND ADMIN</h1>
      </div>
      <router-link class="navbar-brand" to="/">
                <img src="@/assets/adminlogo.svg" class="navbar-brand-img" alt="...">
            </router-link>
      <div class="text-center pt-3">
        ADMIN01
      </div>
      <template slot="links" class="dark">
        <sidebar-item
          :link="{
            name: 'CUSTOMER LISTS',
            path: '/customerlist'
          }"
        >
        </sidebar-item>

        <sidebar-item
          :link="{
            name: 'OUR PRODUCTS'
          }"
        >
          <sidebar-item
            :link="{ name: 'OUR PRODUCTS', path: '/products' }"
          ></sidebar-item>
          <sidebar-item
            :link="{ name: 'OUR RELATED PRODUCTS', path: '/relatedproducts' }"
          ></sidebar-item>
        </sidebar-item>

        <sidebar-item
          :link="{
            name: 'OUR BRANDS'
          }"
        >
          <sidebar-item
            :link="{ name: 'OUR BRANDS', path: '/brands' }"
          ></sidebar-item>
          <sidebar-item
            :link="{ name: 'SETTING BRANDS', path: '/settingbrands' }"
          ></sidebar-item>
        </sidebar-item>

        <sidebar-item
          :link="{
            name: 'NEWS & CSR',
            path: '/news'
          }"
        >
        </sidebar-item>

        <sidebar-item
          :link="{
            name: 'Login',
            path: '/login'
          }"
        >
        </sidebar-item>
        <sidebar-item
          :link="{
            name: 'Register',
            path: '/register'
          }"
        >
        </sidebar-item>
      </template>
    </side-bar>
    <div class="main-content">
      <dashboard-navbar :type="$route.meta.navbarType"></dashboard-navbar>

      <div @click="$sidebar.displaySidebar(false)">
        <fade-transition :duration="200" origin="center top" mode="out-in">
          <!-- your content here -->
          <router-view></router-view>
        </fade-transition>
      </div>
      <content-footer v-if="!$route.meta.hideFooter"></content-footer>
    </div>
  </div>
</template>
<script>
/* eslint-disable no-new */
import PerfectScrollbar from "perfect-scrollbar";
import "perfect-scrollbar/css/perfect-scrollbar.css";

function hasElement(className) {
  return document.getElementsByClassName(className).length > 0;
}

function initScrollbar(className) {
  if (hasElement(className)) {
    new PerfectScrollbar(`.${className}`);
  } else {
    // try to init it later in case this component is loaded async
    setTimeout(() => {
      initScrollbar(className);
    }, 100);
  }
}

import DashboardNavbar from "./DashboardNavbar.vue";
import DashboardContent from "./Content.vue";
import { FadeTransition } from "vue2-transitions";

export default {
  components: {
    DashboardNavbar,
    DashboardContent,
    FadeTransition
  },
  methods: {
    initScrollbar() {
      let isWindows = navigator.platform.startsWith("Win");
      if (isWindows) {
        initScrollbar("sidenav");
      }
    }
  },
  mounted() {
    this.initScrollbar();
  }
};
</script>
<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Mitr:wght@300;500&family=Prompt:wght@200;300&display=swap");
h1{
  font-size: 24px;
  font-weight:500;
  color:white;
}
</style>
