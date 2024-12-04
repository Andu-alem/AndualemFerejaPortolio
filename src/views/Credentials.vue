<script setup>
    import { ref } from 'vue'
    import { AcademicCapIcon } from '@heroicons/vue/24/solid'
    import Credential from '../components/Credential.vue'
</script>

<template>
    <div class="min-h-[55vh] w-ful mt-10 text-white mx-auto flex flex-col sm:flex-row justify-evenly items-center sm:items-start">
        <div class="">
            <h1 class="font-medium sm:ml-2">Formal Education</h1>
            <Credential>
                <template v-slot:icon>
                    <AcademicCapIcon class="size-10 mr-1 text-white"/>
                </template>
                <template v-slot:title>
                    <p class="text-sm">BSc in Electrical and Computer Engineering</p>
                    <p class="text-[15px]">Computer Engineering Focus</p>
                </template>
                <template v-slot:image>
                    <img class="max-h-[70vh]" src="../assets/certificates/tempo.jpg" />
                </template>
            </Credential>    
        </div>

        <div class="my-5 sm:my-0">
            <h3 class="font-medium">Certifictes</h3>
            <Credential>
                <template v-slot:title>
                    Programming Fundamentals
                    <span class="text-violet-400 tracking-wide text-[13px] font-bold">from Udacity</span>
                </template>
                <template v-slot:image>
                    <img class="max-h-[70vh]" src="../assets/certificates/programmer.JPG" />
                    <a class="text-amber-400 hover:text-sky-400 font-bold text-sm z-50" href="https://www.udacity.com/certificate/e/32135d0c-6861-11ef-9f30-1763a66b3880" target="_blank">Udacity Link</a>
                </template>
            </Credential>

            <Credential>
                <template v-slot:title>
                    Artificial Inteligence Fundamentals
                    <span class="text-violet-400 tracking-wide text-[13px] font-bold">from Udacity</span>
                </template>
                <template v-slot:image>
                    <img class="max-h-[70vh]" src="../assets/certificates/ai-fundamentals.JPG" />
                    <a class="text-amber-400 hover:text-sky-400 font-bold text-sm" href="https://www.udacity.com/certificate/e/88ec6d6c-9b8d-11ef-b875-07ced6c7914e" target="_blank">Udacity Link</a>
                </template>
            </Credential>

            <Credential>
                <template v-slot:title>
                    Android Developer Fundamentals
                    <span class="text-violet-400 tracking-wide text-[13px] font-bold">from Udacity</span>
                </template>
                <template v-slot:image>
                    <img class="max-h-[70vh]" src="../assets/certificates/android-dev.JPG" />
                    <a class="text-amber-400 hover:text-sky-400 font-bold text-sm" href="https://www.udacity.com/certificate/e/64e645e6-6794-11ef-8ad4-af48f6ebe7df" target="_blank">Udacity Link</a>
                </template>
            </Credential>

            <Credential>
                <template v-slot:title>
                    Data Analysis Fundamentals
                    <span class="text-violet-400 tracking-wide text-[13px] font-bold">from Udacity</span>
                </template>
                <template v-slot:image>
                    <img class="max-h-[70vh]" src="../assets/certificates/data-analyst.JPG" />
                    <a class="text-amber-400 hover:text-sky-400 font-bold text-sm" href="https://www.udacity.com/certificate/e/b1d22fdc-68c0-11ef-b60f-f79d8fa633f2" target="_blank">Udacity Link</a>
                </template>
            </Credential>
        </div>
    </div>
</template>