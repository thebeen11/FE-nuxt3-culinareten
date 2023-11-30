<template>
  <div
    class="w-full aspect-video rounded-xl overflow-clip border-4 border-secondary flex items-center justify-center relative hover:cursor-pointer"
   >
    <img
      class="w-full  aspect-video hover:scale-125 transition duration-300 ease-in-out absolute top-0 left-0 object-cover"
      :src="province?.imageUrl"
      alt=""
      srcset=""
    />
    <h4 class="z-10 lg:text-3xl text-5xl text-white">{{province?.name}}</h4>
  </div>
</template>

<script setup lang="ts">
defineProps({
  province: {
   type: Object
  }
});
</script>
