<template>
  <button
    class="btn rounded-full hover:bg-slate-300/20 focus:bg-slate-300/20 dark:hover:bg-slate-300/20 dark:focus:bg-slate-300/20"
    @click="toggleDarkMode()"
  >
    <fa-icon v-if="isDarkMode" icon="fa-solid fa-sun-bright w-5 h-5" class="w-8 h-8 flex items-center justify-center" />
    <fa-icon v-else icon="fa-regular fa-moon w-5 h-5" class="w-8 h-8 flex items-center justify-center" />
  </button>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const htmlTag = document.getElementsByTagName('html')[0]
const isDarkMode = ref(htmlTag.classList.contains('dark'))

function toggleDarkMode() {
  if (htmlTag.classList.contains('dark')) {
    htmlTag.classList.remove('dark')
    localStorage.setItem('dark-mode', 'light')
  } else {
    htmlTag.classList.add('dark')
    localStorage.setItem('dark-mode', 'dark')
  }

  isDarkMode.value = htmlTag.classList.contains('dark')
}
</script>
