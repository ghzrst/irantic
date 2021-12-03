<template>
  <div class="link">
    <h2 class="title">Your shorten link:</h2>
    <div class="link-container">
      <input
        class="link-input"
        placeholder="Shorten a link here.."
        v-model="link"
      />

      <span class="short-link">{{ shortLink }}</span>
      <button class="copy-btn" @click="copy">
        <Loading v-if="loading" />
        <span v-else>Copy</span>
        {{ $store.hasNotif }}
      </button>
    </div>
    <Notif v-if="$store.state.hasNotif" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import axios from "axios";

import { delay } from "../helpers/functionality";
import notification from "../mixins/notifMixin";

import Loading from "../components/Loading.vue";
import Notif from "../components/Notif.vue";

@Component({
  components: { Loading, Notif },
  mixins: [notification],
})
export default class Home extends Vue {
  // eslint-disable-next-line no-undef
  [x: string]: any;
  private link: string = "example.org/very/long/link.html/";
  private loading: boolean = false;
  private shortLink: string = "";

  private mounted() {
    this.getLink();
  }

  private async getLink() {
    this.loading = true;
    await axios
      .post(`https://api.shrtco.de/v2/info?code=${this.$route.params.link}`)
      .then(async (response) => {
        await axios
          .get(
            `https://api.shrtco.de/v2/shorten?url=${response.data.result.url}`
          )
          .then((response) => {
            this.shortLink = response.data.result.short_link;
          })
          .catch(async (error) => {
            this.notification({
              status: "error",
              message: error.response.data.error,
            });
          })
          .finally(async () => {
            await delay(100);
            this.loading = false;
          });
      })
      .catch(async (error) => {
        this.notification({
          status: "error",
          message: error.response.data.error,
        });
      })
      .finally(async () => {
        await delay(100);
        this.loading = false;
      });
  }

  private async copy() {
    if (!this.loading) {
      const el = document.createElement("textarea");
      el.addEventListener("focusin", (e) => e.stopPropagation());
      el.value = this.shortLink;
      document.body.appendChild(el);
      el.select();
      document.execCommand("copy");
      document.body.removeChild(el);
      this.notification({
        status: "success",
        message: "Link has been copied to clipboard",
      });
    }
  }
}
</script>
<style lang="scss">
.link {
  background-color: rgba(191, 191, 191, 0.4);
  padding: 32px;
  height: 70%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  .title {
    text-align: center;
    color: var(--neutral4);
    font-size: 36px;
    margin-top: 32px;
    margin-bottom: 32px;
  }
  .link-container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: white;
    padding: 8px;
    border-radius: 10px;
    .link-input {
      flex-grow: 1;
      padding: 16px;
      border-radius: 10px;
      margin-right: 16px;
      border: none;
      color: var(--neutral4);
    }
    .short-link {
      color: var(--primary1);
      font-size: 12px;
      margin: auto 8px;
    }
    .copy-btn {
      border-radius: 10px;
      color: white;
      background-color: var(--primary1);
      padding: 12px 24px;
      font-size: 14px;
      cursor: pointer;
      border: none;
      &:hover {
        opacity: 0.8;
      }
    }
  }
}
</style>
