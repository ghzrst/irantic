<template>
  <div id="app">
    <!-- Navbar -->
    <div class="navbar">
      <img
        src="./assets/images/logo.svg"
        @click="goToHome"
        style="cursor: pointer"
      />
      <div class="nav-items">
        <a
          v-for="(item, index) in navItems"
          :key="index"
          class="nav-item font-bold"
          :href="item.link"
        >
          {{ item.title }}
        </a>
      </div>
      <span class="login-btn font-bold">Login</span>
      <span class="sign-up-btn font-bold">Sign Up</span>
    </div>
    <!-- Pages -->
    <router-view></router-view>
    <div class="boost">
      <span class="title">Boost Your Links Today</span>
      <BoostBtn />
    </div>
    <!-- Footer -->
    <footer class="footer">
      <img
        src="./assets/images/white-logo.svg"
        class="logo"
        @click="goToHome"
      />
      <div v-for="(item, i) in footerItems" :key="'cat' + i">
        <span class="category">{{ item.category }}</span>
        <div class="sub-categories">
          <span
            v-for="(item, i) in item.subcategory"
            :key="'sub' + i"
            class="sub-category"
            >{{ item }}</span
          >
        </div>
      </div>
      <div class="icons">
        <img
          v-for="(item, index) in icons"
          :key="'icon' + index"
          :src="item.icon"
          :class="index !== icons.length - 1 ? 'icon' : ''"
        />
      </div>
    </footer>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import BoostBtn from "./components/BoostBtn.vue";

@Component({
  components: { BoostBtn },
})
export default class App extends Vue {
  private navItems = [
    {
      title: "Features",
      link: "",
    },
    {
      title: "Pricing",
      link: "",
    },
    {
      title: "Resources",
      link: "",
    },
  ];

  private footerItems = [
    {
      category: "Features",
      subcategory: ["Link Shortening", "Branded Links", "Analytics"],
    },
    { category: "Resources", subcategory: ["Blog", "Developers", "Support"] },
    {
      category: "Company",
      subcategory: ["About", "Our Team", "Careers", "Contact"],
    },
  ];

  private icons = [
    { icon: require("./assets/images/icon-facebook.svg") },
    { icon: require("./assets/images/icon-twitter.svg") },
    { icon: require("./assets/images/icon-pinterest.svg") },
    { icon: require("./assets/images/icon-instagram.svg") },
  ];

  private goToHome() {
    this.$router.push({ name: "Home" });
  }
}
</script>

 <style lang="scss">
#app {
  position: relative;
  background: white;
  height: 100vh;
  overflow-y: auto;
  .navbar {
    position: sticky;
    top: 0;
    z-index: 10;
    background: white;
    padding: 32px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    .nav-items {
      flex-grow: 1;
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;
      .nav-item {
        margin: auto 16px;
        text-decoration: none;
        color: var(--neutral2);
        font-size: 0.83vmax;
      }
    }
    .login-btn {
      background-color: transparent;
      border: none;
      border-radius: 20px;
      padding: 8px 16px;
      color: var(--neutral2);
      cursor: pointer;
      font-size: 0.83vmax;
      margin: auto 16px;
      &:hover {
        opacity: 0.8;
      }
    }
    .sign-up-btn {
      background-color: var(--primary1);
      border: none;
      border-radius: 20px;
      padding: 8px 16px;
      color: white;
      font-size: 0.83vmax;
      cursor: pointer;
      &:hover {
        opacity: 0.8;
      }
    }
  }
  .boost {
    background-color: var(--primary2);
    background-image: url("./assets/images/bg-boost-desktop.svg");
    background-size: cover;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 64px;
    .title {
      font-weight: 800;
      color: white;
      font-size: 2.22vmax;
      margin-bottom: 16px;
    }
  }
  .footer {
    padding: 64px;
    background-color: var(--neutral3);
    color: white;
    font-size: 0.83vmax;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: flex-start;
    .logo {
      margin-right: 64px;
      cursor: pointer;
    }
    .category {
      font-weight: 800;
    }
    .sub-categories {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      margin-top: 24px;

      .sub-category {
        margin-bottom: 16px;
      }
    }
    .icons {
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: flex-start;
      .icon {
        margin-right: 16px;
        cursor: pointer;
      }
    }
  }
}
</style>
