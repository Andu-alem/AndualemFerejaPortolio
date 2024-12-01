<script setup>
import { PhoneIcon } from "@heroicons/vue/24/solid"
import Home from './views/Home.vue'
import Header from './components/Header.vue'
</script>

<template>
  <div class="min-h-[100vh] w-full bg-[url('./assets/img/Capture.JPG')]">
    <div class="bg-black opacity-90 min-h-[100vh] p-2 sm:p-5">
      <Header />
      <router-view></router-view>
      <div class="flex justify-center mt-5 gap-5">
        <span class="flex gap-1 text-[15px] text-white"> <PhoneIcon class="size-3 mt-1"/> 091584540/0712527086</span>
        <img class="w-5 h-5 rounded-lg" src="./assets/img/png/linkedin.png" alt="">
        <img class="w-5 h-5 rounded-lg" src="./assets/img/png/github.png" alt="">
        <img class="w-5 h-5 rounded-lg" src="./assets/img/png/gmail.png" alt="">
      </div>
      <div class="mt-3 flex justify-center">
        <h2 class="text-white text-sm">Developed By Andualem F.</h2>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>
