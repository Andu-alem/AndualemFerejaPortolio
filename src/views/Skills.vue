<script>
export default {
    data() {
        return {
            languages: [
                'src/assets/img/png/ts.png',
                'src/assets/img/png/js.png',
                'src/assets/img/png/mern.png',
                'src/assets/img/png/next.png',
                'src/assets/img/png/py.png',
                'src/assets/img/png/mysql.png',
                'src/assets/img/png/git_github.png',
                'src/assets/img/png/java.png',
                'src/assets/img/png/mongo.png',
                'src/assets/img/png/wordpress.png',
            ]
        }
    }
}
</script>
<template>
    <div class="flex flex-col sm:flex-row justify-evenly my-5 min-h-[57vh]">
        <div class="sm:w-1/2 my-3 sm:my-1">
            <h4 class="text-white text-center font-bold">Technica Skills</h4>
            <div class="flex flex-wrap w-[70%] mx-auto gap-3 my-4">
                <img class="size-10 rounded-lg" v-for="src in languages" :key="src" :src="src" alt="">
            </div>
        </div>
        <div class="my-3 text-white sm:my-1">
            <h4 class="text-center font-bold">Soft Skills</h4>
            <p class="text-sm tracking-wide">Attentive to detail, problem Solving, and analytical</p>
            <p class="text-sm tracking-wide">Proactive, responsible, and dependable</p>
            <p class="text-sm tracking-wide">Adapatbile and flexible</p>
        </div>
    </div>
</template>