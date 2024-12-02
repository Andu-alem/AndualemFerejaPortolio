<script>
export default {
    data() {
        return {
            languages: [
                'src/assets/img/icons/ts.png',
                'src/assets/img/icons/web.png',
                'src/assets/img/icons/mern.png',
                'src/assets/img/icons/next.png',
                'src/assets/img/icons/py.png',
                'src/assets/img/icons/laravel.png',
                'src/assets/img/icons/vue.png',
                'src/assets/img/icons/mysql.png',
                'src/assets/img/icons/git_github.png',
                'src/assets/img/icons/java.png',
                'src/assets/img/icons/php.png',
                'src/assets/img/icons/tailwind.png',
                'src/assets/img/icons/wordpress.png',
                'src/assets/img/icons/api.png',
                'src/assets/img/icons/bootstrap.png',
                'src/assets/img/icons/ps.png'
            ]
        }
    }
}
</script>
<template>
    <div class="flex flex-col sm:flex-row justify-evenly md:px-[10%] my-7 min-h-[57vh]">
        <div class="sm:w-1/2 my-3 sm:my-1">
            <h4 class="text-white text-center font-bold">Technica Skills</h4>
            <div class="flex flex-wrap w-[70%] md:w-[94%] mx-auto gap-3 my-4">
                <img class="size-7 md:size-10 rounded-lg" v-for="src in languages" :key="src" :src="src" alt="">
            </div>
        </div>
        <div class="my-3 text-white sm:my-1 text-center sm:text-left">
            <h4 class="text-center font-bold">Soft Skills</h4>
            <p class="text-sm tracking-wide">Attentive to detail, problem Solving, and analytical</p>
            <p class="text-sm tracking-wide">Proactive, responsible, and dependable</p>
            <p class="text-sm tracking-wide">Adapatbile and flexible</p>
        </div>
    </div>
</template>