<template>
  <div class="bg-white flex-auto">
    <div>
      <main class="container mx-auto px-4 max-w-xl">
        <div class="flex items-baseline justify-center md:justify-between border-b border-gray-200 pb-6 pt-24">
          <h1 class="text-4xl font-bold tracking-tight text-gray-900">Register</h1>
        </div>
        <section aria-labelledby="email" class="pt-10 pb-24">
          <div class="bg-gray-50 p-7 rounded-lg">
            <div class="flex flex-col gap-x-8 gap-y-10">
              <span v-if="errMsg">{{ errMsg }}</span>
              <div class="flex flex-col space-y-4 w-full">
                <label for="email" class="text-sm font-medium text-gray-600">Email</label>
                <input v-model="email" type="text" id="email" name="email" autocomplete="email" class="border border-gray-300 rounded outline-indigo-500 px-3 py-1.5">
              </div>
              <div class="flex flex-col space-y-4 w-full">
                <label for="password" class="text-sm font-medium text-gray-600">Password</label>
                <input v-model="password" type="password" id="password" name="password" autocomplete="password" class="border border-gray-300 rounded outline-indigo-500 px-3 py-1.5">
              </div>
            </div>
            <div class="flex flex-col md:block pt-6">
              <button @click="register" type="submit" class="w-full text-white bg-indigo-600 hover:bg-indigo-700 rounded-md py-3 px-4 max-w-max transform active:scale-90 transition-transform duration-100">Sign up</button>
              <a @click="$router.push('/login')" class="cursor-pointer text-sm text-gray-500 py-2 md:mx-5 italic underline decoration-dotted">Already have an account?</a>
            </div>
          </div>
        </section>
      </main>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import { useRouter } from 'vue-router'

const email = ref()
const password = ref()
const errMsg = ref()
const router = useRouter()

const register = () => {
  createUserWithEmailAndPassword(getAuth(), email.value, password.value)
      .then((data) => {
        console.log('Successfully registered!')
        router.push('/feed')
      })
      .catch((error) => {
        console.log(error.code)
        switch (error.code) {
          case 'auth/email-already-in-use':
            errMsg.value = 'Email already in use'
            break
          default:
            errMsg.value = 'Unexpected error'
            break
        }
      })
}
</script>