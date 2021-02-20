<template>
	<section class="text-gray-600 body-font">
        <div class="text-center mt-20 flex items-center justify-center">
            <h1 class="sm:text-3xl text-2xl font-medium text-purple-600">
                    👋Hello, {{ user.name}}
            </h1>
        </div>
		<div class="container max-w-screen-xl px-4 md:px-6 lg:px-8 py-24 mx-auto">
			<div class="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 md:mb-20">
				<div
					class="group bg-gray-100 cursor-pointer p-3 py-5 mb-12 flex flex-col justify-center items-center rounded hover:bg-white hover:shadow-xl">
					<div
						class="p-4 rounded-full bg-purple-100 -mt-16 group-hover:bg-purple-600">
						<svg
							class="w-14 text-purple-600 group-hover:text-white"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor">
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M4 6h16M4 10h16M4 14h16M4 18h16"
							/>
						</svg>
					</div>
					<div class="text-2xl font-bold my-3">Mock Quiz</div>
					<p class="my-3">Best picked questions</p>
					<p class="my-3">
						Take a quiz created by expert teachers from past question papers based on selected topic.
					</p>
					<a
                        href="/exams/5/subjects/1"
						class="mx-auto text-white bg-purple-600 border-2 border-purple-600 py-1 my-3 px-6 focus:outline-none hover:bg-transparent hover:text-purple-600 rounded"
					>
						GO
					</a>
				</div>
				<div
					class="group bg-gray-100 cursor-pointer p-3 py-5 mb-12 flex flex-col justify-center items-center rounded hover:bg-white hover:shadow-xl"
				>
					<div
						class="p-4 rounded-full bg-purple-100 -mt-16 group-hover:bg-purple-600"
					>
						<svg
							class="w-14 text-purple-600 group-hover:text-white"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
							/>
						</svg>
					</div>
					<div class="text-2xl font-bold my-3">My Quizes</div>
					<p class="my-3">Track your progress</p>
					<p class="my-3">
						View all your taken quizes in one place. view your results, take the quiz
						again etc.
					</p>
					<router-link
						to="/quiz/my"
						class="mx-auto text-white bg-purple-600 border-2 border-purple-600 py-1 my-3 px-6 focus:outline-none hover:bg-transparent hover:text-purple-600 rounded"
						>View All</router-link
					>
				</div>
				<div
					class="group bg-gray-100 cursor-pointer p-3 py-5 mb-12 flex flex-col justify-center items-center rounded hover:bg-white hover:shadow-xl"
				>
					<div
						class="p-4 rounded-full bg-purple-100 -mt-16 group-hover:bg-purple-600"
					>
						<svg
							class="w-14 text-purple-600 group-hover:text-white"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
							/>
						</svg>
					</div>
					<div class="text-2xl font-bold my-3">Random Quiz</div>
					<p class="my-3">Generated with AI</p>
					<p class="my-3">
						Take random quizes based on topics and difficulty level you choose.
					</p>
					<div class="flex flex-col md:flex-row justify-between w-full">
						<a
							href="/exams/5"
							class="mx-auto text-white bg-purple-600 border-2 border-purple-600 py-1 my-3 px-6 focus:outline-none hover:bg-transparent hover:text-purple-600 rounded"
							>Go</a
						>
					</div>
				</div>
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