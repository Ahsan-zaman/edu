<template>
  <svg
    class="progress-ring relative"
    :class="color"
    :width="width"
    :height="width">
    <g>
        <circle
            class="progress-ring__circle absolute stroke-current text-gray-400 text-opacity-25"
            :stroke-width="stroke/2"
            fill="transparent"
            :r="radius"
            :cx="width/2"
            :cy="width/2"/>
        <text x="50%" y="50%" text-anchor="middle" class="stroke-current fill-current" stroke-width="1px" dy=".3em">
            {{percent}}%
        </text>
        <circle
            stroke-linejoin="round"
            stroke-linecap="round"
            class="progress-ring__circle absolute stroke-current"
            :style="`stroke-dasharray: ${circumference},${circumference};stroke-dashoffset :${setProgress(percent)}`"
            :stroke-width="stroke"
            fill="transparent"
            :r="radius"
            :cx="width/2"
            :cy="width/2"/>
    </g>
    </svg>
</template>

<script>
export default {
    props:{
        width: Number,
        percent:  Number,
        stroke:  Number,
        color: String,
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
            if(percent == 0) return (this.circumference - percent / 100 * this.circumference) + 1
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