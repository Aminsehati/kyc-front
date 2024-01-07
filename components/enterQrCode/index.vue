<template>
    <div class="w-[450px] ">
        <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Code</label>
        <input type="text" id="first_name" :value="modelValue" @input="$emit('update:modelValue', $event.target.value)"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
        <div class="text-center mt-3">
            <button
                class="inline-block px-12 py-3 text-sm font-medium text-white bg-violet-600 border border-violet-600 rounded active:text-violet-500 hover:bg-transparent hover:text-violet-600 focus:outline-none focus:ring"
                @click="$emit('onClick')" >
                Submit
            </button>
        </div>
    </div>
</template>

<script lang="ts" setup>
defineEmits(['update:modelValue', 'onClick'])
defineProps({
    modelValue: {
        type: String
    }
})
</script>