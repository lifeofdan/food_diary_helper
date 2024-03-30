export default defineNuxtRouteMiddleware(async (to, _from) => {
  const runtimeConfig = useRuntimeConfig();
  const cookie = useCookie("_pb_token");

  if (!cookie.value && to.path !== "/") return navigateTo("/");
});
