<template>
  <span class="boost-btn font-bold">Get Started</span>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class BoostBtn extends Vue {}
</script>

<style scoped lang="scss">
.boost-btn {
  background-color: var(--primary1);
  border: none;
  border-radius: 32px;
  padding: 14px 32px;
  color: white;
  font-size: 14px;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
}
</style>
