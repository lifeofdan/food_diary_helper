import { readonly } from "vue";

export const useAuth = () => {
  const token = useState("token", () => useCookie("_pb_token"));

  const clearToken = () => (useState("token").value = null);

  const logout = (): void => {
    clearToken();
    navigateTo("/");
    return;
  };

  watch(
    () => token.value,
    () => {
      if (!token.value) return (useCookie("_pb_token").value = null);
    }
  );

  return {
    setToken: (token: string) => (useState("token").value = token),
    getToken: () => readonly(token),
    logout,
  };
};
