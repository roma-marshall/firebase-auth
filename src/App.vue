<template>
  <div class="flex flex-col min-h-screen mb-auto">
    <Header />
    <main class="flex justify-center container mx-auto mt-20 mb-auto">
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>
    <Footer />
  </div>
</template>

<script setup>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'


</script>