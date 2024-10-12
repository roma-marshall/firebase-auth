<template>
  <div>
    <p>This page only registered users</p>
    <p>emailVerified: {{ auth.currentUser.emailVerified }}</p>
  </div>
</template>

<script setup>
import { getAuth } from 'firebase/auth'

const auth = getAuth()
</script>