<template>
  <div>
    <div class="px-4 sm:px-0">
      <h3 class="text-base font-semibold leading-7 text-gray-900">Personal Information</h3>
    </div>
    <div class="mt-6 border-t border-gray-100">
      <dl class="divide-y divide-gray-100">
        <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <dt class="text-sm font-medium leading-6 text-gray-900">First name</dt>
          <input v-model="store.firstname" type="text" id="firstname" name="firstname" autocomplete="firstname" class="border border-gray-300 rounded outline-indigo-500 px-3 py-1">
        </div>
        <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <dt class="text-sm font-medium leading-6 text-gray-900">Last name</dt>
          <input v-model="store.lastname" type="text" id="lastname" name="lastname" autocomplete="lastname" class="border border-gray-300 rounded outline-indigo-500 px-3 py-1">
        </div>
        <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <dt class="text-sm font-medium leading-6 text-gray-900">Job</dt>
          <input v-model="store.job" type="text" id="job" name="job" autocomplete="job" class="border border-gray-300 rounded outline-indigo-500 px-3 py-1">
        </div>
        <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <dt class="text-sm font-medium leading-6 text-gray-900">Email address</dt>
          <dd class="mt-1 text-base leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{{ store.email }}</dd>
        </div>
        <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <dt class="text-sm font-medium leading-6 text-gray-900">About</dt>
          <textarea v-model="store.about" name="about" id="" cols="100" rows="7" class="border border-gray-300 rounded outline-indigo-500 px-3 py-1"></textarea>
        </div>
        <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <button type="submit" class="w-full text-white bg-indigo-600 hover:bg-indigo-700 rounded-md py-3 px-4 max-w-max transform active:scale-90 transition-transform duration-100">Save</button>
        </div>
      </dl>
    </div>
  </div>
</template>

<script setup>
import { userStore } from '../store/pinia'
const store = userStore()
const { firstname, lastname, job, email, about } = store
</script>