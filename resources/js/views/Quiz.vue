<template>
	<div class="grid grid-cols-1 md:grid-cols-3 gap-6 my-10">
		<div class="md:col-span-2">
			<div class="p-2">
				<div class="text-2xl">
					Characteristics & Classification of Living Organisms
				</div>
                <transition name="fade">
                    <div v-if="!Question" class="my-4">
                        <div class="flex my-2 items-center">
                            <svg fill="none" class="w-6 mr-6" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                            </svg>
                            <span>
                                {{Questions.length}} multiple choice questions
                            </span>
                        </div>
                        <div class="flex my-2 items-center">
                            <svg fill="none" class="w-6 mr-6" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span>
                                No time limits                            
                            </span>
                        </div>
                        <div class="my-4">
                            <div class="text-lg font-semibold">
                                Before you start
                            </div>
                            <ul class="list-disc list-inside">
                                <li>
                                    You must complete this assessment in one session — make sure your internet is reliable.
                                </li>
                                <li>
                                    If you don’t earn a badge this time, you can retake this assessment once more.
                                </li>
                                <li>
                                    We won’t show your results to anyone without your permission.
                                </li>
                            </ul>
                        </div>
                    </div>
                </transition>
                <div v-if="Question">
                    <div class="text-2xl mt-8">Questions</div>
                    <div class="flex flex-wrap mt-2 mb-8">
                        <div
                            v-for="i in Questions.length"
                            :key="i"
                            class="w-10 h-10 text-xl flex items-center justify-center bg-purple-600 text-white mr-4 rounded"
                        >
                            {{ i }}
                        </div>
                    </div>
                </div>
				<transition-group name="fade">
					<div v-for="(q,i) in Questions" :key="i" v-show="i + 1 == Question" class="shadow">
						<div class="p-4 md:p-8">
							<div v-html="q.details" />
						</div>
						<div class="border-b-2 border-gray-300 border-opacity-50"></div>
						<div class="p-4 md:p-8">
							<div>
								<div class="my-4 flex flex-col">
                                    <div class="text-xs text-gray-400">Question {{ Question }} of {{Questions.length}}</div>
                                    <div class="text-xl font-semibold">{{ q.question }}</div>
								</div>
								<div
									v-for="(a, i) in q.answers"
									:key="i"
									@click="q.answer = a"
									:class="a === q.answer ? 'border-purple-600' : ''"
									class="flex items-center px-4 h-14 my-1 font-semibold bg-transparent text-purple-600 hover:text-white hover:bg-purple-600 rounded border hover:border-purple-600 cursor-pointer"
								>
									<div class="font-bold mr-4">{{ numbering[i] }}</div>
									<div>{{ a }}</div>
									<svg
										v-if="a === q.answer"
										class="ml-auto w-8 h-8"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M5 13l4 4L19 7"
										/>
									</svg>
								</div>
							</div>
						</div>
					</div>
				</transition-group>
				<!-- Next question -->
				<div class="flex space-x-4 py-4">
					<button
						:disabled="Questions.length == Question"
						@click="next"
						class="px-6 py-3 inline-block font-semibold text-white bg-purple-600 rounded cursor-pointer disabled:opacity-75"
                        :class="Question ? 'ml-auto' : 'mx-auto'"
					>
						{{Question ? 'Next Question' : 'Start Quiz'}}
					</button>
				</div>
			</div>
		</div>
		<div class="md:col-span-1 md:h-screen overflow-y-auto md:sticky md:top-2">
			<div
				v-for="(t, i) in Topics"
				:key="i"
				class="flex items-center justify-between border-b-2 border-white bg-purple-600 rounded p-2 mb-2"
			>
				<div class="text-txl text-white mr-2">{{ t.name }}</div>
				<progress-circle
					:width="50"
					:stroke="4"
					color="text-white"
					:percent="t.percent"
				/>
			</div>
		</div>
	</div>
</template>

<script>
import ProgressCircle from "../components/Misc/ProgressCircle";
export default {
	components: {
		ProgressCircle,
	},
	data() {
		return {
			Topics: [
				{
					name: "Characteristics & Classification of Living Organisms",
					percent: 89,
				},
				{
					name: "Organisation of the Organism",
					percent: 14,
				},
				{
					name: "Movement In & Out of Cells",
					percent: 62,
				},
				{
					name: "Biological Molecules",
					percent: 33,
				},
				{
					name: "Enzymes",
					percent: 0,
				},
				{
					name: "Plant Nutrition",
					percent: 99,
				},
				{
					name: "Human Nutrition",
					percent: 48,
				},
				{
					name: "Transport in Plants",
					percent: 100,
				},
				{
					name: "Human Nutrition",
					percent: 48,
				},
				{
					name: "Transport in Plants",
					percent: 100,
				},
				{
					name: "Human Nutrition",
					percent: 48,
				},
				{
					name: "Transport in Plants",
					percent: 100,
				},
				{
					name: "Human Nutrition",
					percent: 48,
				},
				{
					name: "Transport in Plants",
					percent: 100,
				},
			],
			Questions: [
				{
					id: Math.round(Math.random() * 10000),
					details:
						'<p>The image below shows a house mouse, whose scientific name is Mus musculus.</p><img src="https://res.cloudinary.com/ahsan-zaman/image/upload/c_scale,q_auto:best,w_800/v1612556852/house-mouse_kebtrh.jpg" width="100%">',
					question: "Which genus does it belong to?",
					answers: ["Mammal", "musculus", "Mus", "Vertebrate"],
					answer: "Mus",
				},
				{
					id: Math.round(Math.random() * 10000),
					details:
						'<code>The image below shows a house mouse, whose scientific name is Mus musculus.</code><img src="https://res.cloudinary.com/ahsan-zaman/image/upload/v1605469528/pexels-dominika-roseclay-1036808_ne60d7.jpg" width="100%">',
					question: "Which genus does it belong to?",
					answers: ["Mammal", "musculus", "Mus", "Vertebrate"],
				},
				{
					id: Math.round(Math.random() * 10000),
					details:
						'<p>The image below shows a house mouse, whose scientific name is Mus musculus.</p><p>The image below shows a house mouse, whose scientific name is Mus musculus.</p>',
					question: "Which genus does it belong to?",
					answers: ["Mammal", "musculus", "Mus", "Vertebrate"],
				},
				{
					id: Math.round(Math.random() * 10000),
					details:
						'',
					question: "Which genus does it belong to?",
					answers: ["Mammal", "musculus", "Mus", "Vertebrate"],
				},
			],
			Question: 0,
			numbering: ["A", "B", "C", "D", "E", "F", "G", "H"],
		};
	},
	methods: {
		next() {
			this.Question += 1;
		},
	},
    beforeRouteLeave (to, from, next) {
        if(this.Question) {
            this.bus.emit('toast',{
                id: Math.round(Math.random()*10000),
                title: 'Test',
                text: 'This is a test notification',
                type: 'error',
            })
        }
        else next()
    }
};
</script>