<template>
  <div
    class="card"
    :style="
      index === 1
        ? { transform: 'translateY(30px)' }
        : index === 2
        ? { transform: 'translateY(60px)' }
        : ''
    "
  >
    <div class="card-icon">
      <img :src="data.image" />
    </div>
    <h3 class="title">{{ data.title }}</h3>
    <p class="desc">{{ data.description }}</p>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Card extends Vue {
  @Prop() data!: any;
  @Prop() index!: number;
}
</script>

<style lang="scss">
.card {
  background-color: white;
  border-radius: 10px;
  padding: 16px;
  z-index: 2;
  &:nth-child(2) {
    margin: 0 15px;
  }
  .card-icon {
    background-color: var(--primary2);
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 16px;
    position: absolute;
    top: 0;
    left: 10%;
    transform: translateY(-50%);
    border-radius: 100%;
  }
  .title {
    font-weight: 800;
    font-size: 20px !important;
    color: var(--neutral4);
    margin-bottom: 16px !important;
    margin-top: 32px !important;
  }
  .desc {
    color: var(--neutral2);
    text-align: start;
    font-size: 14px;
    line-height: 22px;
  }
}
</style>
