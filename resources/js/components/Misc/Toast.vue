<template>
	<div class="fixed bottom-0 left-0 m-6 w-5/5 md:w-1/5">
        <transition-group name="slide-fade">
            <div
                v-for="(m,i) in messages" :key="m.id"
                :class="theme(m.type)"
                class="rounded-lg shadow-md p-4 w-full relative">
                <p class="font-bold">{{m.title}}</p>
                <p>{{ m.text }}</p>
                <svg @click="messages.splice(i,1)" class="w-6 cursor-pointer absolute top-1 right-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </div>
        </transition-group>
	</div>
</template>

<script>
export default {
    props:{
        messages: Array
    },
  methods:{
      theme(t){
          if(t == 'error'){
              return 'bg-red-100 border-red text-red-900 p-4'
          }
          else if(t == 'success'){
              return 'bg-green-100 border-green text-green-900 p-4'
          }
          else if(t == 'warning'){
              return 'bg-yellow-100 border-yellow text-yellow-900 p-4'
          }
      }
  }
};
</script>

<style>
</style>