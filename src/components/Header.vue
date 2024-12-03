<script setup>
    import { HomeIcon } from "@heroicons/vue/24/solid"
</script>

<template>
      <div class="flex flex-col items-center mt-2">
        <h1 class="text-white text-3xl sm:text-4xl font-medium my-2">Andualem Fereja</h1>
        <div class="text-white flex gap-4 sm:gap-7">
          <div class="text-sky-400 font-medium hover:underline cursor-pointer font-bold text-[15px] sm:text-sm hover:-translate-y-1 transition ease-in-out duration-500">
              <router-link to="/"><HomeIcon class="size-4 mt-[3px]"/></router-link>
          </div>
          <div class="text-sky-400 font-medium hover:underline cursor-pointer font-bold text-[15px] sm:text-sm hover:-translate-y-1 transition ease-in-out duration-500">
              <router-link to="/projects">Projects</router-link>
          </div>
          <div class="text-sky-400 font-medium hover:underline cursor-pointer font-bold text-[15px] sm:text-sm hover:-translate-y-1 transition ease-in-out duration-500">
              <router-link to="/skills">Skills</router-link>
          </div>
          <div class="text-sky-400 font-medium hover:underline cursor-pointer font-bold text-[15px] sm:text-sm hover:-translate-y-1 transition ease-in-out duration-500">
              <router-link to="/credentials">Credentials</router-link>
          </div>
        </div>
      </div>
</template>