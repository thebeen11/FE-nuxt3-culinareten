<template>
  <div class="flex relative">
    <div
      class="top-0 left-0 z-10 absolute w-1/3 h-full bg-primary drop-shadow-2xl flex py-10 px-5 justify-center"
    >
      <h2 class="text-secondary">TOP AYCE</h2>

      <div class=""></div>
    </div>
    <div
      class="w-full min-h-[100px] bg-white rounded-xl drop-shadow-2xl my-10 flex"
    >
      <div class="basis-1/3"></div>
      <div class="basis-2/3 p-8">
        <div
          v-for="(court, i) in data"
          class="flex-col flex"
          data-aos="fade-up"
          :data-aos-delay="`${i}00`"
        >
          <div
            class="pt-3 my-1 rounded-lg hover:bg-slate-50 cursor-pointer z-0"
            v-if="Number(i) > 0"  @click="vote('court')"
          >
            <div class="flex items-center space-x-10 px-6 w-full">
              <div class="relative">
                <div
                  class="w-16 aspect-square rounded-full flex items-center justify-center overflow-hidden drop-shadow-xl"
                >
                  <img
                    :src="court.imgUrl"
                    alt=""
                    srcset=""
                    class="w-full aspect-square object-cover"
                  />
                </div>
                <h1
                  class="absolute -bottom-1 -right-1 font-outline-white text-primary"
                >
                  {{ i + 1 }}
                </h1>
              </div>
              <div class="flex justify-between w-full">
                <h2 class="text-secondary">{{ court.name }}</h2>
                <div class=" flex gap-4">
                    <div
                  class="bg-yellow-100 w-12 flex items-center justify-center aspect-square rounded-full"
                >
                  {{ court.totalVote }}
                </div>
                <button @click="vote('vote')" class="px-4 py-1 rounded-md bg-primary text-dark-bg z-20">
                  Vote
                </button>
                </div>
              </div>
            </div>
            <div class="mt-4 w-full h-px bg-secondary"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  data: {
    type: Object,
  },
});

const vote = (code: string) => {
    console.log(code);
    
}
</script>
