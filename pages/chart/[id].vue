<template>
  <div class="py-28 px-20">
  <Filter/>
    <TopChart :data="data"/>
  </div>
</template>

<script lang="ts" setup>
type Court = {
  name: string;
  totalVote: number;
  imgUrl: string;
}
const data:Court[] = [
  { name: "Kintan", totalVote: 80, imgUrl: "https://images.tokopedia.net/img/JFrBQq/2023/3/14/f13f3334-c4bf-4352-bc9b-31808d7f5733.png" },
  { name: "Gyukaku", totalVote: 230,  imgUrl: "https://images.tokopedia.net/img/JFrBQq/2023/3/14/f13f3334-c4bf-4352-bc9b-31808d7f5733.png" },
  { name: "Hanamasa", totalVote: 30,  imgUrl: "https://images.tokopedia.net/img/JFrBQq/2023/3/14/f13f3334-c4bf-4352-bc9b-31808d7f5733.png" },
  { name: "Tucanos", totalVote: 20,  imgUrl: "https://images.tokopedia.net/img/JFrBQq/2023/3/14/f13f3334-c4bf-4352-bc9b-31808d7f5733.png" },
  { name: "Fogo", totalVote: 10,  imgUrl: "https://images.tokopedia.net/img/JFrBQq/2023/3/14/f13f3334-c4bf-4352-bc9b-31808d7f5733.png" },
];
</script>
