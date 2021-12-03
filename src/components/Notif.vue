<template>
  <div
    class="notification"
    :class="$store.state.status === 'success' ? 'success' : 'error'"
  >
    {{ $store.state.message }}
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Notif extends Vue {}
</script>

<style scoped lang="scss">
.notification {
  position: fixed;
  bottom: 32px;
  left: 50%;
  max-width: 50%;
  transform: translateX(-50%);
  border-radius: 10px;
  color: white;
  z-index: 10;
  padding: 16px 32px;
  animation: fade 1s forwards ease-out;
  &.error {
    background-color: var(--secondary);
  }
  &.success {
    background-color: var(--primary1);
  }
}

@keyframes fade {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
