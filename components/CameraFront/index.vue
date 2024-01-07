<template>
    <div class="w-[450px]">
        <video v-show="!isPhotoTaken" ref="camera" :width="450" :height="337.5" autoplay playsinline></video>

        <canvas v-show="isPhotoTaken" id="photoTaken" ref="canvas" :width="450" :height="337.5"></canvas>
        <div class="flex items-center gap-x-2 justify-center mt-3">

            <button
                class="inline-block px-12 py-3 text-sm font-medium text-white bg-violet-600 border border-violet-600 rounded active:text-violet-500 hover:bg-transparent hover:text-violet-600 focus:outline-none focus:ring"
                v-if="!isPhotoTaken" @click="takePhoto">
                Take Photo
            </button>
            <button v-if="isPhotoTaken" @click="$emit('submit')"
                class="inline-block px-12 py-3 text-sm font-medium text-white bg-violet-600 border border-violet-600 rounded active:text-violet-500 hover:bg-transparent hover:text-violet-600 focus:outline-none focus:ring">
                Confirmied
            </button>
            <button v-if="isPhotoTaken" @click="isPhotoTaken = !isPhotoTaken"
                class="inline-block px-12 py-3 text-sm font-medium text-white bg-violet-600 border border-violet-600 rounded active:text-violet-500 hover:bg-transparent hover:text-violet-600 focus:outline-none focus:ring">
                Canceled
            </button>

        </div>
    </div>
</template>

<script lang="ts" setup>
const props = defineProps({
    facingMode: {
        type: String,
        default: "environment"
    }
})
const camera = ref<any>(null)
const isPhotoTaken = ref(false);
const isShotPhoto = ref(false);
const canvas = ref<any>(null)

onMounted(async () => {
    const constraints = (window.constraints = {
        audio: false,
        video: {
            facingMode: props.facingMode
        }
    });


    navigator.mediaDevices
        .getUserMedia(constraints)
        .then(stream => {
            camera.value.srcObject = stream;
        })
        .catch(error => {
            alert("May the browser didn't support or there is some errors.");
        });
});

const takePhoto = async () => {
    if (!isPhotoTaken.value) {
        isShotPhoto.value = true;

        const FLASH_TIMEOUT = 50;

        setTimeout(() => {
            isShotPhoto.value = false;
        }, FLASH_TIMEOUT);
    }

    isPhotoTaken.value = !isPhotoTaken.value;

    const context = canvas.value.getContext('2d');
    context.drawImage(camera.value, 0, 0, 450, 337.5);
};
</script>