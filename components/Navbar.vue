<template>
    <div class="h-20 w-full flex justify-between items-center px-10 md:px-20 fixed top-0 z-50" :class="y<50 || `bg-white transition duration-300 ease-in-out`">
        <div class=" text-2xl md:text-4xl font-bold text-primary">
            CULINARETEN 
        </div>
        <button class=" px-6 py-2 rounded-md  bg-primary text-dark-bg">Vote</button>
    </div>
</template>

<script lang="ts" setup>
import { useScrollClient } from '~/composables/state';

const y = useScrollClient()

</script>