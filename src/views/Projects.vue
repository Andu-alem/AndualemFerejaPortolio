<script setup>
    import { ref } from 'vue'
    import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/vue/24/solid"
    import ServiceAd from '../components/ServiceAd.vue'
    import ChessGame from '../components/ChessGame.vue'
    import EventUpdater from '../components/EventUpdater.vue'
    import NewForm from '../components/NewForm.vue'
    import Portfolio from '../components/Portfolio.vue'
    import ClassicMan from '../components/ClassicMan.vue'
    import CoolMarket from '../components/CoolMarket.vue'
    
    const views = [ClassicMan, ServiceAd, NewForm, ChessGame, EventUpdater, Portfolio, CoolMarket]
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
    <div class="min-h-[55vh] w-full">
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