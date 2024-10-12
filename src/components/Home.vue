<template>
  <div>
    <h1>Home</h1>
    <span>isLoggedIn: {{ isLoggedIn }}</span>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { getAuth, onAuthStateChanged } from 'firebase/auth'

const router = useRouter()
const isLoggedIn = ref(false)
const auth = getAuth()

onMounted(() => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      isLoggedIn.value = true
    } else {
      isLoggedIn.value = false
      router.push('/login')
    }
  })
})
</script>