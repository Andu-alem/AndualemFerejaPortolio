<script setup>
    import { ref } from 'vue'
    import { AcademicCapIcon, CheckIcon, DocumentIcon, XMarkIcon } from '@heroicons/vue/24/solid';
    import CertificateModal from '../components/CertificateModal.vue'

    const certificateDatas = ref([
        {
            image: '../assets/certificates/programmer.JPG',
            url: 'https://www.udacity.com/certificate/e/32135d0c-6861-11ef-9f30-1763a66b3880'
        },
        {
            image: '../assets/certificates/ai-fundamentals.JPG',
            url: 'https://www.udacity.com/certificate/e/88ec6d6c-9b8d-11ef-b875-07ced6c7914e'
        },
        {
            image: '../assets/certificates/android-dev.JPG',
            url: 'https://www.udacity.com/certificate/e/64e645e6-6794-11ef-8ad4-af48f6ebe7df'
        },
        {
            image: '../assets/certificates/data-analyst.JPG',
            url: 'https://www.udacity.com/certificate/e/b1d22fdc-68c0-11ef-b60f-f79d8fa633f2'
        },
        {
            image: '../assets/certificates/tempo.jpg',
            url: ''
        }
    ])
    const index = ref(0)
    const showModal = ref(false)
    function setSource(newIndex) {
        index.value = newIndex
        showModal.value = true

    }
</script>

<template>
    <div class="min-h-[55vh] mt-10 text-white mx-auto flex flex-col sm:flex-row justify-evenly items-center sm:items-start">
        <div class="flex gap-2">
            <AcademicCapIcon class="size-12 text-white"/>
            <div>
                <h2 class="font-medium">Formal Education</h2>
                <p class="text-sm">BSc in Electrical and Computer Engineering</p>
                <p class="text-[15px]">Computer Engineering Focus</p>
                <span class="flex gap-1 mt-1 text-[13px] cursor-pointer" @click="() => setSource(4)"><DocumentIcon class="text-white size-4"/> See certificate</span>
            </div>
        </div>
        <div class="my-5 sm:my-0">
            <h3 class="font-medium">Certifictes</h3>
            <div class="flex my-3">
                <CheckIcon class="size-5 text-white mx-1"/>
                <p class="text-sm">
                    Programming Fundamentals <span class="text-violet-400 tracking-wide text-[15px] font-bold">from Udacity</span>
                    <br> <span class="flex gap-1 text-[13px] cursor-pointer" @click="() => setSource(0)"><DocumentIcon class="text-white size-4"/> See certificate</span>
                </p>
            </div>
            <div class="flex my-3">
                <CheckIcon class="size-5 text-white mx-1"/>
                <p class="text-sm">
                    Artificial Intelligence Fundamentals <span class="text-violet-400 tracking-wide text-[15px] font-bold">from Udacity</span>
                    <br> <span class="flex gap-1 text-[13px] cursor-pointer" @click="() => setSource(1)"><DocumentIcon class="text-white size-4"/> See certificate</span>
                </p>
            </div>
            <div class="flex my-3">
                <CheckIcon class="size-5 text-white mx-1"/>
                <p class="text-sm">
                    Android Develper Fundamentals <span class="text-violet-400 tracking-wide text-[15px] font-bold">from Udacity</span>
                    <br> <span class="flex gap-1 text-[13px] cursor-pointer" @click="() => setSource(2)"><DocumentIcon class="text-white size-4"/> See certificate</span>
                </p>
            </div>
            <div class="flex my-3">
                <CheckIcon class="size-5 text-white mx-1"/>
                <p class="text-sm">
                    Data Analysis Fundamentals <span class="text-violet-400 tracking-wide text-[15px] font-bold">from Udacity</span>
                    <br> <span class="flex gap-1 text-[13px] cursor-pointer" @click="() => setSource(3)"><DocumentIcon class="text-white size-4"/> See certificate</span>
                </p>
            </div>
        </div>
        <CertificateModal @toogle-modal="() => showModal=!showModal" :showModal="showModal" :data="certificateDatas[index]"/>
    </div>
</template>