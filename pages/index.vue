<template>
  <div class="min-h-screen flex justify-center items-center flex-col gap-y-3">
    {{ code }}
    <Welcome v-if="step === 'welcome'" @click="step = 'scanQrCode'" />
    <ScanQrCode v-else-if="step === 'scanQrCode'" @onClick="step = 'enterQrCode'" />
    <EnterQrCode v-else-if="step === 'enterQrCode'" v-model="code" @onClick="onEnterCode" />
  </div>
</template>

<script lang="ts" setup>
const router = useRouter();
definePageMeta({
  middleware: [
    function (to, from) {
      console.log(to);
      const code = process.client && localStorage.getItem('code');
      if(code){
        return navigateTo('/verify')
      }
    },
  ],
})




const code = ref<string>('')

const onDecode = (decodedString: string) => {
  console.log({ decodedString })
}

const step = ref<'welcome' | 'scanQrCode' | 'enterQrCode'>('welcome');


const onEnterCode = () => {
  if (!code.value) return
  localStorage.setItem('code', JSON.stringify(code.value));
  router.push('/verify')
}
</script>

<style>
video {
  border-radius: 20px;
}
</style>