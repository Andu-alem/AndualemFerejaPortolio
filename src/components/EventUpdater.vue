<template>
    <div class="flex flex-col sm:flex-row gap-2 md:px-[10%] mb-5 mt-10 min-h-[42vh]">
        <div class="w-11/12 mx-auto sm:w-1/2">
            <img class="rounded-lg w-[94%] mx-auto" src="../assets/img/event_shot.jpg" alt="">
        </div>
        <div class="w-11/12 mx-auto sm:px-5 mt-3 sm:mt-0 sm:w-1/2 text-white text-center sm:text-left font-light tracking-wider">
            <h2 class="text-lg font-normal text-yellow-400">
                Event Updater - <span class="text-[15px] text-yellow-200">Event sharing platform</span>
            </h2>
            <p class="text-[14px] my-2">
                A web application in which the user can get and post the upcoming events in the town. Aims to be the platform for all events. This platform is built using the MERN stack - React, Material UI, Express.js, MongoDB with MongoDB Atlas as a provider and Mongoose as an ORM and deployed on Render.
            </p>
            <div class="flex sm:flex-col mt-4 sm:items-start justify-center">
                <a class="text-[14px] text-sky-500 outline hover:text-white rounded-lg px-2 py-1" href="https://eventsupcoming.onrender.com/" target="_blank">Post your event</a>
            </div>
        </div>
    </div>
</template>