export default defineEventHandler(async (event) => {
  const repo = await $fetch(
    "https://livescore6.p.rapidapi.com/matches/v2/list-live",
    {
      params: {
        Category: "soccer",
        Timezone: "+7",
      },
      headers: {
        'X-RapidAPI-Key': '0558395c17mshac1b01f1f41ef58p1f8084jsnb9e84bc0ea7f',
        'X-RapidAPI-Host': 'livescore6.p.rapidapi.com'
      }
    }
  );

  return repo;
});
