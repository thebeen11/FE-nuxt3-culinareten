
export default defineEventHandler(async (event) => {
    const server = useRuntimeConfig().baseUrl
    const res = await $fetch(`${server}/api/province`, {
        method: 'get',
    });
    
    return res;
  });
  