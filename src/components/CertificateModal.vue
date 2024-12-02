<script setup>
    import { ref } from 'vue'
    import { XMarkIcon } from '@heroicons/vue/24/solid';

    defineProps({
        showModal: Boolean,
        data: Object
    })

</script>

<template>
    <div v-show="showModal" class="fixed flex justify-center items-center top-0 w-full h-full backdrop-blur-3xl">
            <div class="w-11/12 sm:w-3/5 mx-auto">
                <div class="cursor-pointer" @click="$emit('toogle-modal')">
                    <XMarkIcon class="size-7 text-amber-500" />
                </div>
                <img class="max-h-[70vh]" :src="data.image" alt="">
                <div v-show="data.url !== ''">
                    <a class="text-amber-400 hover:text-sky-400 font-bold text-sm" :href="data.url" target="_blank">Udacity Link</a>
                </div>
            </div>
        </div>
</template>