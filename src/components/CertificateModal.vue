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
            <div class="w-4/5">
                <div class="cursor-pointer" @click="$emit('toogle-modal')">
                    <XMarkIcon class="size-7 text-red-200" />
                </div>
                <img class="max-h-[70vh]" :src="data.image" alt="">
                <div v-show="data.url !== ''">
                    <a class="text-blue-500 font-bold text-sm" :href="data.url" target="_blank">Udacity Link</a>
                </div>
            </div>
        </div>
</template>