<script setup>
  import { HashtagIcon } from "@heroicons/vue/24/solid"

</script>

<template>
    <div class="flex flex-col-reverse sm:flex-row w-full md:px-[7%] my-10">
        <div class="w-10/12 mx-auto my-5 sm:my-1 sm:w-1/2 flex flex-col items-center justify-center">
          <div class="flex gap-1">
            <HashtagIcon class="size-5 text-sky-500 mt-2"/>
            <h3 class="text-2xl text-yellow-400">Meet Andualem</h3>
          </div>
          <p class="text-center text-[16px] tracking-wide text-white my-3">
            A seasoned software developer with a Computer Engineering backround and proficiency in fullstack web developement using MERN Stack, Next.js, and Laravel and mobile app development using React Native. Skilled in React, Vue, TalilwindCSS, BootStrap, JavaScript, TypeScript, Pyhton, PHP, and APIs. 
          </p>
        </div>
        <div class="w-10/12 mx-auto sm:w-1/2 flex flex-col justify-center items-center">
          <img class="w-[50%] sm:w-[77%] h-[50%] sm:h-[84%] md:w-[50%] rounded-full" src="../assets/img/andi_profile.jpg" alt="">
        </div>
      </div>
</template>