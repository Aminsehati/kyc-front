<template>
    <div class="w-60 h-60 flex justify-center items-center bg-white mx-auto rounded-[20px]">
        <qrcode-stream @decode="$emit('onDecode')"></qrcode-stream>
    </div>
    <div>
        <button
            class="inline-block px-12 py-3 text-sm font-medium text-white bg-violet-600 border border-violet-600 rounded active:text-violet-500 hover:bg-transparent hover:text-violet-600 focus:outline-none focus:ring"
            @click="$emit('onClick')">
            Enter Your Code
        </button>
    </div>
</template>

<script lang="ts" setup>
import { QrcodeStream, QrcodeDropZone, QrcodeCapture } from 'vue-qrcode-reader'
</script>