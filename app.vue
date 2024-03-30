<template>
  <div>
    <NuxtLayout :name="token ? 'dashboard' : 'default'">
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
const token = useState("token");
</script>
