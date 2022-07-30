<script lang="ts" setup>
  import { ref } from 'vue';

  const shaped = ref(false);
</script>

<template>
  <button @click="shaped = !shaped">toggle shaped prop</button>
  <sbg-button color="accent" :shaped="shaped">
    SBG Button
  </sbg-button>
</template>
