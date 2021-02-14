<template>
	<div class="grid grid-cols-1 md:grid-cols-3 gap-6 my-10">
		<div class="md:col-span-2">
			<div class="p-4 relative shadow">
				<div v-if="Topics.length" class="text-2xl">
					{{QuizDetails.topic}}
				</div>
                <transition name="fade">
                    <div v-if="!Question" class="my-4">
                        <div class="flex my-2 items-center">
                            <svg fill="none" class="w-6 mr-6" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                            </svg>
                            <span>
                                {{QuizDetails.q_count}} multiple choice questions
                            </span>
                        </div>
                        <div class="flex my-2 items-center">
                            <svg fill="none" class="w-6 mr-6" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span>
                                {{QuizDetails.time_limit ? `${QuizDetails.time_limit/60} Minutes` : 'No time limits'}}                          
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
                <div v-if="Question && QuizDetails.time_limit" class="my-4">
                    <div class="text-xs w-full text-gray-400">
                        Time remaining
                    </div>
                    <div class="text-6xl text-purple-600 font-bold">
                        {{minutes}} : {{seconds}}
                    </div>
                </div>
				<transition-group name="fade">
					<div v-for="(q,i) in Questions" :key="i" v-show="i + 1 == Question">
						<div v-if="q.details" class="p-4 md:p-8">
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
									v-for="(a, j) in q.answers"
									:key="j"
									@click="answer(a,i)"
									:class="a === q.answer ? 'border-purple-600' : ''"
									class="flex items-center px-4 h-14 my-1 font-semibold bg-transparent text-purple-600 hover:text-white hover:bg-purple-600 rounded border hover:border-purple-600 cursor-pointer"
								>
									<div class="font-bold mr-4">{{ numbering[j] }}</div>
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
                <div v-if="loading" class="absolute top-0 left-0 h-full w-full z-50 flex items-center justify-center bg-gray-100 bg-opacity-75">
                    <div class="space-y-4 w-9/12 animate-pulse">
                        <div class="h-4 bg-purple-300 rounded"></div>
                        <div class="h-4 bg-purple-300 rounded w-3/6"></div>
                        <div class="h-4 bg-purple-300 rounded w-5/6"></div>
                        <div class="h-4 bg-purple-300 rounded w-6/6"></div>
                        <div class="h-4 bg-purple-300 rounded w-2/6"></div>
                    </div>
                </div>
				<!-- Next question -->
				<div class="flex space-x-4 py-4">
					<button
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
			<a
                :href="`/exams/5/subjects/1/quizes/${t.id}`"
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
			</a>
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
			Topics: [],
            QuizDetails:{
                topic: null,
                q_count: 0,
                time_limit: 0
            },
			Questions: [],
			Question: 0,
			numbering: ["A", "B", "C", "D", "E", "F", "G", "H"],
            loading: true
		};
	},
    mounted(){
        this.$http.get(`/subjects/${this.$route.params.subject}`)
        .then(res => {
            this.Topics = res.data
        })
        this.$http.get(`/topics/${this.$route.params.id}`)
        .then(res => {
            this.QuizDetails = res.data[0]
            this.Questions = res.data[1]
            this.loading = false
        })
    },
	methods: {
		next() {
            if(!this.Question){
                if(this.QuizDetails.time_limit){
                    window.setInterval(() => {
                        this.QuizDetails.time_limit -= 1
                    },1000)
                }
                window.addEventListener('beforeunload', function (e) {
                    // Cancel the event
                    e.preventDefault(); // If you prevent default behavior in Mozilla Firefox prompt will always be shown
                    // Chrome requires returnValue to be set
                    e.returnValue = 'Why tho ?';
                });
            }
            if( (this.Question+1) <= this.Questions.length){
                this.loading =true
                setTimeout(() => {
                    this.loading = false
                },1000)
    
                // Answering completed
                this.Question += 1;
            }else{
                this.bus.emit('toast',{
                    title: 'Success',
                    text: 'Quiz completed but not saved. Under development :D',
                    type:'success'
                })
            }
		},
        answer(a,i){
            this.Questions[i].answer = a
            // Make request to backeend to track answers 7 mark 
            this.next()
        },
	},
    computed:{
        minutes(){
            if(this.QuizDetails.time_limit){
                return Math.floor(this.QuizDetails.time_limit /60).toString().padStart(2,'0')
            }
            return '00'
        },
        seconds(){
            if(this.QuizDetails.time_limit){
                return Math.floor(this.QuizDetails.time_limit %60).toString().padStart(2,'0')
            }
            return '00'
        },
    },
    beforeRouteLeave (to, from, next) {
        if(this.Question) {
            let r = confirm('Chnages you made may not be saved.')
            if(r){
                next()
            }
        }
        else next()
    }
};
</script>