<script setup>
    import { ref } from 'vue'
    import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/vue/24/solid"
    import ServiceAd from '../components/ServiceAd.vue'
    import ChessGame from '../components/ChessGame.vue'
    import EventUpdater from '../components/EventUpdater.vue'
    import LandingPage from '../components/LandingPage.vue'
    
    const views = [ServiceAd, ChessGame, EventUpdater, LandingPage]
    let index = ref(0)
    
    function next() {
        if (views.length <= index.value+1) {
            index.value = 0
            return
        }
        index.value++
    }

    function prev() {
        if (index.value < 1) {
            index.value = views.length - 1
            return
        }
        index.value--
    }

</script>

<template>
    <div class="min-h-[55vh]">
        <component :is="views[index]"></component>
        <div class="flex justify-center gap-20">
            <div class="flex cursor-pointer" @click="prev">
                <ChevronLeftIcon class="size-4 mt-1 text-white"/>
                <span class="text-sm text-blue-400 font-medium hover:text-white">Prev</span>
            </div>
            <div class="flex cursor-pointer" @click="next">
                <span class="text-sm text-blue-400 font-medium hover:text-white">Next</span>
                <ChevronRightIcon class="size-4 mt-1 text-white"/>
            </div>
        </div>
    </div>
</template>