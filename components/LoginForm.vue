<template>
  <div class="prose">
    <h1>Login</h1>
    <FormKit
      :errors="errors"
      type="form"
      :submit-attrs="{
        inputClass: 'btn btn-primary mt-4',
      }"
      @submit="onSubmit"
    >
      <FormKit
        :classes="{
          input: 'input input-bordered input-primary w-full max-w-xs mb-2',
        }"
        type="text"
        name="email"
        id="email"
        label="Email"
        placeholder="johndoe@email.com"
      />
      <FormKit
        :classes="{
          input: 'input input-bordered input-primary w-full max-w-xs',
        }"
        type="password"
        name="password"
        id="password"
        label="Password"
        placeholder="********"
      />
    </FormKit>
  </div>
</template>

<script setup lang="ts">
const errors = useState("errors", () => [] as string[]);
const onSubmit = async (credentials: { email: string; password: string }) => {
  const { data } = await useFetch("/api/v1/login", {
    method: "POST",
    body: JSON.stringify(credentials),
  });

  if (data.value) {
    if (!data.value.payload.token) {
      errors.value.push("Invalid credentials");
      return;
    }

    errors.value = [];
    useAuth().setToken(data.value.payload.token);
    return void useRouter().push("/dashboard");
  }
};
</script>

<style scoped></style>
