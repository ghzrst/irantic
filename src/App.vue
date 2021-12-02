<template>
  <div id="app">
    <div class="navbar">
      <img src="./assets/images/logo.svg" />
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
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HelloWorld from "./components/HelloWorld.vue";

@Component({
  components: {
    HelloWorld,
  },
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
}
</script>

<style lang="scss">
#app {
  position: relative;
  background: white;
  height: 100%;
  .navbar {
    position: sticky;
    top: 0;
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
      justify-content: start;
      align-items: center;
      .nav-item {
        margin: auto 16px;
        text-decoration: none;
        color: var(--neutral2);
        font-size: 12px;
      }
    }
    .login-btn {
      background-color: transparent;
      border: none;
      border-radius: 20px;
      padding: 8px 16px;
      color: var(--neutral2);
      cursor: pointer;
      font-size: 12px;
      margin: auto 16px;
    }
    .sign-up-btn {
      background-color: var(--primary1);
      border: none;
      border-radius: 20px;
      padding: 8px 16px;
      color: white;
      font-size: 12px;
      cursor: pointer;
    }
  }
}
</style>
