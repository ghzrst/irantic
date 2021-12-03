<template>
  <div class="home">
    <div class="top-section">
      <div class="text">
        <h1 class="title">More than just<br />shorter links</h1>
        <p class="description">
          Build your brand's recognition and get detailed<br />
          insights on how your links are performing.
        </p>
        <BoostBtn />
      </div>
      <img class="image" src="../assets/images/illustration-working.svg" />
    </div>
    <div class="middle-section">
      <div class="link-input-container">
        <input
          class="link-input"
          placeholder="Shorten a link here.."
          v-model="link"
        />
        <button class="link-btn" @click="shorten">
          <Loading v-if="loading" /> <span v-else>Shorten It!</span>
        </button>
      </div>
      <div class="details">
        <h2 class="title">Advanced Statistics</h2>
        <p class="description">
          Track how your links are performing accross the web with<br />our
          advanced statistics dashboard.
        </p>
        <div class="cards">
          <Card
            v-for="(item, index) in cards"
            :key="index"
            :data="item"
            :index="index"
          />
        </div>
      </div>
    </div>

    <Notif v-if="$store.state.hasNotif" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import axios from "axios";

import { delay } from "../helpers/functionality";
import notification from "../mixins/notifMixin";

import BoostBtn from "../components/BoostBtn.vue";
import Card from "../components/Card.vue";
import Notif from "../components/Notif.vue";
import Loading from "../components/Loading.vue";
import router from "@/router";

@Component({
  components: { BoostBtn, Card, Notif, Loading },
  mixins: [notification],
})
export default class Home extends Vue {
  // eslint-disable-next-line no-undef
  [x: string]: any;
  private link: string = "";
  private cards = [
    {
      title: "Brand Recognition",
      description:
        "Boost your brand recognition with each click.Generic links don't mean a thing.Branded links help instil confidence in your content",
      image: require("../assets/images/icon-brand-recognition.svg"),
    },
    {
      title: "Detailed Records",
      description:
        "Gain insights into who is clicking your links.knowing when and where people engage with your content helps inform better decisions",
      image: require("../assets/images/icon-detailed-records.svg"),
    },
    {
      title: "Fully Customizable",
      description:
        "Improve brand awareness and content discoveribility through customizable links,supercharging audience engagements",
      image: require("../assets/images/icon-fully-customizable.svg"),
    },
  ];

  private loading: boolean = false;

  private async shorten() {
    this.loading = true;
    await axios
      .get(`https://api.shrtco.de/v2/shorten?url=${this.link}`)
      .then((response) => {
        router.push({
          name: "ShortenedLink",
          params: { link: response.data.result.code },
        });
      })
      .catch(async (error) => {
        this.notification({
          status: "error",
          message: error.response.data.error,
        });
      })
      .finally(async () => {
        await delay(1000);
        this.loading = false;
      });
  }
}
</script>
<style lang="scss">
.home {
  .top-section {
    padding: 32px;
    padding-bottom: 128px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    .text {
      width: 50%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      .title {
        color: var(--neutral4);
        font-size: 4.44vmax;
        margin: 0;
      }
      .description {
        color: var(--neutral2);
      }
    }
    .image {
      width: 50%;
    }
  }
  .middle-section {
    background-color: rgba(191, 191, 191, 0.4);
    padding: 64px 32px;
    position: relative;
    .link-input-container {
      position: absolute;
      top: 0;
      left: 15%;
      right: 15%;
      transform: translateY(-50%);
      border-radius: 10px;
      background-color: var(--primary2);
      background-image: url("../assets/images/bg-shorten-desktop.svg");
      background-size: cover;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: stretch;
      padding: 32px;
      .link-input {
        flex-grow: 1;
        padding: 16px;
        border-radius: 10px;
        margin-right: 16px;
        border: none;
      }
      .link-btn {
        border-radius: 10px;
        color: white;
        background-color: var(--primary1);
        padding: 14px 32px;
        font-size: 0.97vmax;
        cursor: pointer;
        border: none;
        &:hover {
          opacity: 0.8;
        }
      }
    }
    .details {
      padding: 64px;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
      .title {
        color: var(--neutral4);
        font-size: 36px;
        margin-top: 32px;
        margin-bottom: 16px;
      }
      .description {
        color: var(--neutral2);
        text-align: center;
      }
    }
    .cards {
      margin-top: 64px;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: stretch;
      position: relative;
      &::after {
        content: "";
        width: 100%;
        border-bottom: solid 5px var(--primary1);
        position: absolute;
        left: 0px;
        right: 0px;
        top: 50%;
        z-index: 0;
      }
    }
  }
}
</style>
