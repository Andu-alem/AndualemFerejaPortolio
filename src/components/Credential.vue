<script setup>
    import { ref } from 'vue'
    import { CheckIcon, DocumentIcon, XMarkIcon } from '@heroicons/vue/24/solid';

    const showModal = ref(false)
</script>

<template>
    <div>
        <div class="flex my-3">
            <slot name="icon">
                <CheckIcon class="size-5 text-white mx-1"/>
            </slot>
            <p class="text-[17px]">
                <slot name="title"></slot>  
                <span class="flex gap-1 text-[13px] cursor-pointer" @click="[showModal = true]">
                    <DocumentIcon class="text-white size-4"/> See certificate
                </span>
            </p>
        </div>
        
        <div v-show="showModal" class="fixed flex justify-center items-center top-0 left-0 w-full h-full backdrop-blur-3xl">
            <div class="w-11/12 sm:w-3/5 mx-auto">
                <div class="cursor-pointer" @click="[showModal = false]">
                    <XMarkIcon class="size-7 text-amber-500" />
                </div>
                <slot name="image"></slot>
            </div>
        </div>
    </div>
</template>