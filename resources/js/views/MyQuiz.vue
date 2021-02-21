<template>
	<section class="text-gray-600 body-font">
		<div class="text-center mt-20 flex items-center justify-center">
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
			<h1 class="sm:text-3xl text-2xl font-medium text-purple-600">My Quizes</h1>
		</div>
		<div class="container max-w-screen-xl px-4 md:px-6 lg:px-8 py-24 mx-auto">
			<div class="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
				<div
					v-for="(q, i) in quizes"
					:key="i"
					class="p-4 flex flex-col justify-around bg-gray-100 cursor-pointer hover:bg-white hover:shadow-xl"
				>
					<div class="flex justify-center">
						<ProgressCircle
							color="text-purple-600 text-2xl"
							:percent="q.progress"
							:stroke="10"
							:width="150"
						/>
					</div>
					<div class="text-2xl font-bold">{{ q.name }}</div>
					<div class="my-4">
						<div class="flex my-2 items-center">
							<svg
								fill="none"
								class="w-6 mr-6"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
								/>
							</svg>
							<span v-if="q.progress == 100"
								>Got <span class="text-purple-600 font-bold">{{ q.marks }}</span> out of
								{{ q.count }} marks</span
							>
							<span v-else> {{ q.count }} multiple choice questions </span>
						</div>
						<div class="flex my-2 items-center">
							<svg
								fill="none"
								class="w-6 mr-6"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
								/>
							</svg>
							<span v-if="q.progress == 100">
								Completed in
								<span class="text-purple-600 font-bold"
									>{{ Math.floor(q.completed_in / 60) }}:{{ q.completed_in % 60 }}</span
								>
								Mins ({{ q.time_limit / 60 }} minutes)
							</span>
							<span v-else>
								{{ q.time_limit ? `${q.time_limit / 60} Minutes` : "No time limits" }}
							</span>
						</div>
						<div class="flex my-2 items-center">
							<svg
								class="w-6 mr-6"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"
								/>
							</svg>
							<span>
								{{ q.difficulty }}
							</span>
						</div>
						<div class="flex justify-center">
                            <router-link
                                v-if="q.progress == 100"
								:to="`/quiz/${q.id}`"
								class="text-white bg-purple-600 border-2 border-purple-600 py-1 px-6 text-center focus:outline-none hover:bg-transparent hover:text-purple-600 rounded"
								>Retake
							</router-link>
							<router-link
                                v-else-if="q.progress == 0"
								:to="`/quiz/${q.id}`"
								class="text-white bg-purple-600 border-2 border-purple-600 py-1 px-6 text-center focus:outline-none hover:bg-transparent hover:text-purple-600 rounded"
							>
								Start
							</router-link>
							
							<router-link
                                v-else
								:to="`/quiz/${q.id}`"
								class="text-white bg-purple-600 border-2 border-purple-600 py-1 px-6 text-center focus:outline-none hover:bg-transparent hover:text-purple-600 rounded"
								>Continue
							</router-link>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
import ProgressCircle from "../components/Misc/ProgressCircle.vue";
export default {
	components: { ProgressCircle },
	data() {
		return {
			open: false,
			quizes: [
				{
					progress: 100,
					marks: 5,
					name: "Quiz 1",
					count: 6,
					time_limit: 3600,
					completed_in: 2598,
					difficulty: "Easy",
					id: Math.round(Math.random() * 10000000),
				},
				{
					progress: 20,
					name: "Home Work 2021-03-01",
					count: 12,
					time_limit: 6000,
					difficulty: "Medium",
					id: Math.round(Math.random() * 10000000),
				},
				{
					progress: 0,
					name: "Introducing data management and analysis",
					count: 10,
					time_limit: 6000,
					difficulty: "Hard",
					id: Math.round(Math.random() * 10000000),
				},
				{
					progress: 75,
					name: "Class Test",
					count: 6,
					time_limit: 1200,
					difficulty: "Easy",
					id: Math.round(Math.random() * 10000000),
				},
				{
					progress: 9,
					name: "Data Preparation",
					count: 6,
					time_limit: 3600,
					difficulty: "Easy",
					id: Math.round(Math.random() * 10000000),
				},
				{
					progress: 18,
					name: "Revision Quiz",
					count: 6,
					time_limit: 3600,
					difficulty: "Easy",
					id: Math.round(Math.random() * 10000000),
				},
				{
					progress: 0,
					name: "Surprize Quiz",
					count: 6,
					time_limit: 3600,
					difficulty: "Easy",
					id: Math.round(Math.random() * 10000000),
				},
				{
					progress: 40,
					name: "Quiz 40",
					count: 6,
					time_limit: 3600,
					difficulty: "Easy",
					id: Math.round(Math.random() * 10000000),
				},
				{
					progress: 55,
					name: "Mock Quiz",
					count: 6,
					time_limit: 3600,
					difficulty: "Easy",
					id: Math.round(Math.random() * 10000000),
				},
			],
		};
	},
    mounted(){
        this.$http.get('quizes')
        .then(res => {
            // console.log(res.data)
            this.quizes = res.data
        })
    }
};
</script>

<style>
</style>