<template>
  <app-preloader class="print:hidden"></app-preloader>

  <!-- Page Wrapper -->
  <div class="bg-gray-50 dark:bg-gray-900">
    <main class="">
      <RouterView />
    </main>
  </div>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import AppPreloader from '@/components/app-preloader.vue'
</script>
