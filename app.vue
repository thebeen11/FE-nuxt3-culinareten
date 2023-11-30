<template>
  <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
</template>

<script setup lang="ts">
import { useScrollClient } from './composables/state';

const scroll = useScrollClient()

const handleScroll = (event: any) => {
    const scrollTop = window.scrollY
    scroll.value = scrollTop
};

if (process.client) {
  window.addEventListener('scroll', handleScroll);
} 

</script>