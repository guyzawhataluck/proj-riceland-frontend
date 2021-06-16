<template>
  <div class="main-content bg">
    <div>
      <b-container class="pt-5 text-center">
        <b-row class="justify-content-xl-between">
          <b-col>
            <router-link class="navbar-brand" to="/">
              <img
                src="@/assets/adminlogo.svg"
                class="navbar-brand-img"
                alt="..."
              />
            </router-link>
          </b-col>
        </b-row>
      </b-container>
      <zoom-center-transition :duration="pageTransitionDuration" mode="out-in">
        <router-view></router-view>
      </zoom-center-transition>
    </div>
  </div>
</template>
<script>
import {BaseNav} from "@/components";
import {ZoomCenterTransition} from "vue2-transitions";

export default {
  components: {
    BaseNav,
    ZoomCenterTransition,
  },
  props: {
    backgroundColor: {
      type: String,
      default: "black",
    },
  },
  data() {
    return {
      showMenu: false,
      menuTransitionDuration: 250,
      pageTransitionDuration: 200,
      year: new Date().getFullYear(),
      pageClass: "login-page",
    };
  },
  computed: {
    title() {
      return `${this.$route.name} Page`;
    },
  },
  methods: {
    toggleNavbar() {
      document.body.classList.toggle("nav-open");
      this.showMenu = !this.showMenu;
    },
    closeMenu() {
      document.body.classList.remove("nav-open");
      this.showMenu = false;
    },
    setBackgroundColor() {
      document.body.classList.add("bg-default");
    },
    removeBackgroundColor() {
      document.body.classList.remove("bg-default");
    },
    updateBackground() {
      if (!this.$route.meta.noBodyBackground) {
        this.setBackgroundColor();
      } else {
        this.removeBackgroundColor();
      }
    },
  },
  beforeDestroy() {
    this.removeBackgroundColor();
  },
  beforeRouteUpdate(to, from, next) {
    // Close the mobile menu first then transition to next page
    if (this.showMenu) {
      this.closeMenu();
      setTimeout(() => {
        next();
      }, this.menuTransitionDuration);
    } else {
      next();
    }
  },
  watch: {
    $route: {
      immediate: true,
      handler: function() {
        this.updateBackground();
      },
    },
  },
};
</script>
<style lang="scss">
$scaleSize: 0.8;
@keyframes zoomIn8 {
  from {
    opacity: 0;
    transform: scale3d($scaleSize, $scaleSize, $scaleSize);
  }
  100% {
    opacity: 1;
  }
}

.main-content .zoomIn {
  animation-name: zoomIn8;
}

@keyframes zoomOut8 {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
    transform: scale3d($scaleSize, $scaleSize, $scaleSize);
  }
}

.main-content .zoomOut {
  animation-name: zoomOut8;
}

.bg {
  font-family: "Mitr", sans-serif;
  font-weight: 300;
  background-color: #0f1f1e;
  color: white;
}
.main-content{  
  height:100vh;
}
</style>
