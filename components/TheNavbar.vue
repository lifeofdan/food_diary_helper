<template>
  <div bg-blue rounded text-white font-bold pa-1rem flex justify-between>
    <a href="/">fd_assitant!</a>

    <button v-show="cookie" class="btn btn-primary" @click="auth.logout">
      Logout
    </button>
  </div>
</template>

<script setup lang="ts">
const auth = useAuth();
const cookie = useState("token");
</script>

<style scoped></style>
