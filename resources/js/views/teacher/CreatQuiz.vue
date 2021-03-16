<template>
	<section class="text-gray-600 body-font">
        <div class="text-center mt-20 flex items-center justify-center">
            <h1 class="sm:text-3xl text-2xl font-medium text-purple-600">
                Creat new Quiz
            </h1>
        </div>
		<div class="container max-w-screen-xl px-4 md:px-6 lg:px-8 py-24 mx-auto">
			<v-select
                :options="questions"
                label="question"
                v-model="question"
                @search="searchQ"
                @option:selected="sq"
                placeholder="Search for questions... "
                class="w-full text-lg py-2 border border-purple-600 rounded focus:outline-none style-chooser"
                :class="
                    !errors.role
                        ? 'border-gray-300 focus:border-indigo-500'
                        : 'border-red-600 focus:border-red-600'
                "
            >
            <template #option="{ question, difficulty }">
                <div class="flex">
                    <div>
                        {{ question }}
                    </div>
                    <div :class="diffColor(difficulty)" class="text-white text-xs rounded-md px-2 py-1 mx-2">{{ difficulty }}</div>
                </div>
            </template>
            </v-select>
            <div class="py-3">
                <div class="text-white bg-purple-600 rounded px-2 py-1 mr-2 mb-2 inline-flex flex-wrap items-center" v-for="q in selectedQ" :key="q.id">
                    {{q.question}} 
                    <svg fill="none" class="w-6" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </div>
            </div>
		</div>
	</section>
</template>

<script>
import vSelect from 'vue-select/src/index'
export default {
    components:{
        vSelect
    },
	data() {
		return {
            user : JSON.parse(localStorage.getItem('user')),
            errors: {
                role: 0
            },
            questions:[],
            question: '',
            selectedQ: [],
            timeoutID: null
		};
	},
    methods:{
        searchQ(search){
            if(!search) return
            clearTimeout(this.timeoutID);
            
            this.timeoutID = setTimeout(() => {
                this.$http.get(`/question?search=${escape(search)}&selected=${encodeURI(this.selectedQ.map(s => s.id))}`)
                    .then(res => {
                        this.questions = res.data
                    });
            },700)
        },
        diffColor(diff){
            if(diff == 'easy') return 'bg-green-600'
            else if(diff == 'medium') return 'bg-yellow-400'
            else if(diff == 'hard') return 'bg-red-600'
        },
        sq(q){
            this.selectedQ.push(q)
            this.questions = this.questions.filter(ques => ques.id != q.id)
            this.question = ''
        }
    },
    mounted(){
        this.$http.get('/question')
            .then(res => {
                this.questions = res.data
            })
    },
};
</script>
<style lang="scss">
.vs__dropdown-toggle{
    border: 0px;
}
.style-chooser .vs__selected{
    background-color: #7c3aed;
    color: #fff;
}
.style-chooser .vs__dropdown-option.vs__dropdown-option--highlight{
    background: #7c3aed;
}
</style>