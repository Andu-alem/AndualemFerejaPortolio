<script setup>
  import { HashtagIcon } from "@heroicons/vue/24/solid"

</script>

<template>
    <div class="flex flex-col-reverse sm:flex-row w-full md:px-[7%] my-10">
        <div class="w-10/12 mx-auto my-5 sm:my-1 sm:w-1/2 flex flex-col items-center justify-center">
          <div class="flex gap-1">
            <HashtagIcon class="size-5 text-sky-500 mt-2"/>
            <h3 class="text-2xl text-yellow-400">Hello, I'am Andualem</h3>
          </div>
          <p class="text-center text-[16px] tracking-wide text-white my-3">
            A seasoned software developer with a Computer Engineering background and proficiency in fullstack web developement using modern web development tools and standards. Whether you need a well-rounded full-stack developer in your team or want a high quality and modern landing page, blog, portfolio, or an e-commerce website feel free to reach me using your choice of provided addresses.
          </p>
        </div>
        <div class="relative w-10/12 mx-auto sm:w-1/2 flex flex-col justify-center items-center after:w-[47%] sm:after:w-[77%] after:h-[28vh] sm:after:h-[75%] md:after:h-[80%] md:after:w-[77%] lg:after:h-[85%] lg:after:w-[52%] after:rounded-full after:absolute after:-z-50 after:p-3 after:bg-gradient-to-r after:from-sky-500 after:to-amber-500 after:animate-spin-slow">
          <div class="w-[45%] sm:w-[77%] h-[28vh] sm:h-[75%] md:h-[80%] md:w-[75%] lg:h-[85%] lg:w-[50%] rounded-full">
            <img class="rounded-full w-full h-full" src="../assets/img/andi_profile.jpg" alt="">
          </div>
        </div>
      </div>
</template>