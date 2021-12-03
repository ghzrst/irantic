<template>
  <div class="notification">{{ message }}</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Notif extends Vue {
  @Prop() message!: string;
}
</script>

<style scoped lang="scss">
.notification {
  position: fixed;
  bottom: 32px;
  left: 50%;
  max-width: 50%;
  transform: translateX(-50%);
  border-radius: 10px;
  background-color: var(--secondary);
  color: white;
  z-index: 10;
  padding: 16px 32px;
  animation: fade 1s forwards ease-out;
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
