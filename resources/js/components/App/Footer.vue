<template>
    <footer class="bg-gray-900 py-8">
        <div class="max-w-screen-xl md:flex mx-auto divide-y divide-gray-500 md:divide-none">
            <div class="flex text-center md:mr-auto mb-4 md:mb-0">
                <logo :fill="'dark'"/>
            </div>
            <div class="mx-4 flex flex-col text-gray-200 py-4 md:py-0">
                <div class="text-lg text-white">Resources</div>
                <a class="text-sm leading-loose hover:text-white" href="#">Home</a>
                <a class="text-sm leading-loose hover:text-white" href="#">Members</a>
                <a class="text-sm leading-loose hover:text-white" href="#">Join</a>
                <a class="text-sm leading-loose hover:text-white" href="#">Sitemaps</a>
                <a class="text-sm leading-loose hover:text-white" href="#">Blog</a>
            </div>
            <div class="mx-4 flex flex-col text-gray-200 py-4 md:py-0">
                <div class="text-lg text-white">Support</div>
                <a class="text-sm leading-loose hover:text-white" href="#">FAQs</a>
                <a class="text-sm leading-loose hover:text-white" href="#">Contact Us</a>
            </div>
            <div class="mx-4 flex flex-col text-gray-200 py-4 md:py-0">
                <div class="text-lg text-white">Company</div>
                <a class="text-sm leading-loose hover:text-white" href="#">About us</a>
                <a class="text-sm leading-loose hover:text-white" href="#">Terms</a>
                <a class="text-sm leading-loose hover:text-white" href="#">Privacy Policy</a>
                <a class="text-sm leading-loose hover:text-white" href="#">Jobs</a>
                <a class="text-sm leading-loose hover:text-white" href="#">Blog</a>
            </div>
        </div>
    </footer>
</template>

<script>
import Logo from './Logo'
export default {
    components:{Logo}
}
</script>