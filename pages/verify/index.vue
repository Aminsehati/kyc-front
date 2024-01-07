<template>
    <div class="flex items-center justify-center min-h-screen">
        <div class="w-[450px]" v-if="step == 'list'">
            <div class="bg-white shadow-md py-5 px-2 mb-3" @click="step = 'front'">
                <span class="text-center block font-semibold text-base">
                    Scan selfi
                </span>
            </div>
            <div class="bg-white shadow-md py-5 px-2" @click="step = 'back'">
                <span class="text-center block font-semibold text-base">
                    Scan ID card
                </span>
            </div>
        </div>
        <CameraFront v-if="step === 'front'" @submit="step = 'list'" />
        <CameraFront v-if="step === 'back'" @submit="step = 'list'" />
    </div>
</template>
<script lang="ts" setup>
const step = ref<'list' | 'front' | 'back'>('list')
</script>
