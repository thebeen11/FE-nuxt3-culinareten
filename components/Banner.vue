<template>
  <div
    class="w-full lg:h-screen flex flex-col items-center justify-center md:px-36 px-10 relative"
  >
     
    <div class="flex flex-col w-full items-center gap-7 mt-32 lg:mt-0 z-10">
      <h1 class="text-primary">Vote your top 10 culinary</h1>
      <input
        type="text"
        placeholder="search city or province"
        class="text-center w-full h-14 rounded-md outline-none border-none px-8 focus:outline-primary"
      />
    </div>
    <div class=" flex lg:flex-row flex-col gap-7 mt-20 w-full" >

    <ImageThumbnail v-for="prov in data" :province="prov" data-aos="zoom-in-up" @click="redirect(prov.id)"/>
    </div>
  </div>
</template>

<script setup lang="ts">
type Province = {
  id: string;
  name: string;
}
const { data } = await useFetch<Province[]>('/api/province/get')

const router = useRouter()

const redirect = (code:string) => {
  router.push({path: `/chart/${code}`})
}
</script>
