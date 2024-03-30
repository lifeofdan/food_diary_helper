<template>
  <div>
    <h1>Dashboard</h1>

    <input type="text" name="field1" v-model="inputValue" />
    <button class="btn btn-primary" @click="onSend">Send</button>

    {{ chatBotResponse }}
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
const inputValue = ref("");
const chatBotResponse = ref("");

const onSend = async () => {
  const { data } = await useFetch("/api/v1/food", {
    method: "POST",
    body: JSON.stringify(inputValue.value),
  });

  if (!data.value) return;

  if (data.value?.payload && data.value.payload.data) {
    chatBotResponse.value = data.value.payload.data;
    return;
  }
  if (data.value?.payload && data.value.payload.error) {
    chatBotResponse.value = data.value.payload.error;
    return;
  }
};
</script>

<style scoped></style>
