<template>
  <svg
    class="progress-ring relative"
    :width="width"
    :height="width">
    <circle
        class="progress-ring__circle absolute stroke-current text-white text-opacity-25"
        :stroke-width="stroke"
        fill="transparent"
        :r="radius"
        :cx="width/2"
        :cy="width/2"/>
    <circle
        class="progress-ring__circle absolute"
        :class="`stroke-current ${color}`"
        :style="`stroke-dasharray: ${circumference},${circumference};stroke-dashoffset :${setProgress(percent)}`"
        :stroke-width="stroke"
        fill="transparent"
        :r="radius"
        :cx="width/2"
        :cy="width/2"/>
    </svg>
</template>

<script>
export default {
    props:{
        width: Number,
        percent:  Number,
        stroke:  Number,
        color: String
    },
    computed:{
        radius(){
            return (this.width/2)-(this.stroke*2)
        },
        circumference(){
            return  this.radius * 2 * Math.PI;
        },
    },
    methods:{
        setProgress(percent) {
            return this.circumference - percent / 100 * this.circumference;
        }
    }
}
</script>

<style>
.progress-ring__circle {
  transition: stroke-dashoffset 0.35s;
  transform: rotate(-90deg);
  transform-origin: center;
}
</style>>