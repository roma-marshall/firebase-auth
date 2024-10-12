<template>
  <div>
    <p>this page only for login users</p>
    <p>emailVerified: {{ auth.currentUser.emailVerified }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { getAuth } from 'firebase/auth'

const auth = getAuth()
</script>