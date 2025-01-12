<script setup>
import Home from './views/Home.vue'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <div class="min-h-[100vh] -mt-7 w-full bg-[url('./assets/img/bg3.jpeg')]">
    <div class="backdrop-blur-3xl min-h-[100vh] p-2 sm:p-5">
      <Header />
      <router-view v-slot="{ Component }">
        <transition>
          <component v-bind:is="Component"/>
        </transition>
      </router-view>
      <Footer />
    </div>
  </div>
</template>

<style scoped>
.v-leave-active,
.v-enter-actvice {
  transition: all 0.75s ease-in-out;
}
.v-enter-from {
  position: absolute;
  opacity: 0;
  right: -100%;
}
.v-enter-to{
  position: absolute;
  opacity: 1;
  right: 0;
}
.v-leave-from {
  position: absolute;
  opacity: 1;
  left: 0%
}
.v-leave-to {
  position: absolute;
  opacity: 0;
  left: -100%
}
</style>
