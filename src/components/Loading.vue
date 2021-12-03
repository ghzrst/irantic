<template>
  <div class="loading"></div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Loading extends Vue {}
</script>

<style lang="scss">
.loading {
  border: 2px solid white;
  border-top: 2px solid var(--primary1);
  border-radius: 50%;
  width: 10px;
  height: 10px;
  margin: auto 8px;
  animation: spin 2s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
