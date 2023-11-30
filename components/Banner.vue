<template>
  <div
    class="w-full lg:h-screen flex flex-col items-center justify-center md:px-36 px-10 relative"
  >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" class=" absolute top-0 rotate-180 z-0">
        <path
          fill="#C8C6F7"
          fill-opacity="0.2"
          d="M0,288L26.7,256C53.3,224,107,160,160,160C213.3,160,267,224,320,229.3C373.3,235,427,181,480,133.3C533.3,85,587,43,640,74.7C693.3,107,747,213,800,261.3C853.3,309,907,299,960,261.3C1013.3,224,1067,160,1120,122.7C1173.3,85,1227,75,1280,80C1333.3,85,1387,107,1413,117.3L1440,128L1440,320L1413.3,320C1386.7,320,1333,320,1280,320C1226.7,320,1173,320,1120,320C1066.7,320,1013,320,960,320C906.7,320,853,320,800,320C746.7,320,693,320,640,320C586.7,320,533,320,480,320C426.7,320,373,320,320,320C266.7,320,213,320,160,320C106.7,320,53,320,27,320L0,320Z"
        ></path>
      </svg>
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
export type Province = {
  id: string;
  name: string;
}
const { data } = await useFetch<Province[]>('/api/province/get')

const router = useRouter()

const redirect = (code:string) => {
  router.push({path: `/chart/${code}`})
}
</script>
