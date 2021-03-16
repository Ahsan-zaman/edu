<template>
	<section class="text-gray-600 body-font">
        <div class="text-center mt-20 flex items-center justify-center">
            <h1 class="sm:text-3xl text-2xl font-medium text-purple-600">
                    👋Hello, {{ user.name}}
            </h1>
        </div>
		<div class="container max-w-screen-xl px-4 md:px-6 lg:px-8 py-24 mx-auto">
			<div class="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
                <router-link :to="{name: 'CreateQuiz'}" class="group p-2 sm:w-1/2 w-full">
                    <div class="group-hover:shadow-lg bg-gray-100 rounded flex p-4 h-full items-center">
                        <div class="flex flex-col items-center pr-4 font-mono text-6xl text-purple-600">
                            Creat Quiz
                        </div>
                    </div>
                </router-link>
            </div>
		</div>
	</section>
</template>

<script>
export default {
	data() {
		return {
			open: false,
            topic:{
                name: "Introducing data management and analysis",
                desc: "Data management is an administrative process that includes acquiring, validating, storing, protecting, and processing required data to ensure the accessibility, reliability, and timeliness of the data."
            },
            user : JSON.parse(localStorage.getItem('user'))
		};
	},
	events: {
		nameOfCustomEventToCall() {
			this.open = false;
		},
	},
};
</script>

<style>
</style>