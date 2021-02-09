<template>
	<div class="min-h-screen">
		<nav-bar></nav-bar>
		<router-view class="max-w-screen-xl md:mx-auto px-2 md:px-0"></router-view>
		<Footer />
		<toast :messages="messages" />
	</div>
</template>

<script>
import NavBar from "./components/App/Navbar";
import Footer from "./components/App/Footer";
import Toast from "./components/Misc/Toast.vue";
export default {
	name: "App",
	components: {
		NavBar,
		Footer,
		Toast,
	},
	data() {
		return {
			messages: [],
		};
	},
    mounted(){
        // console.log(this.bus)
        this.bus.on('toast',d => {
            d.id = Math.round(Math.random()*10000)
            this.messages.push(d)
        })
    }
};
</script>