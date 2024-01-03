<template>
  <div class="min-h-screen flex justify-center items-center">
    <div class="w-60 h-60 flex justify-center items-center bg-white mx-auto rounded-[20px]">
      <qrcode-stream @camera-on="onReady"></qrcode-stream>

    </div>
  </div>
</template>

<script lang="ts" setup>
import { QrcodeStream, QrcodeDropZone, QrcodeCapture } from 'vue-qrcode-reader'

const onReady = () => {

}
</script>

<style>
video {
  border-radius: 20px;
}
</style>