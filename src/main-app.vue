<template>
  <RouterView />
  <component :is="BaseNotification" />
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import { useDarkMode } from '@/composable/dark-mode'
import { useFontAwesome } from '@/composable/font-awesome'
import { useScreenSize } from '@/composable/screen-size'
import BaseNotification from '@/components/base-notification.vue'
import cookie from '@point-hub/vue-cookie'

useDarkMode()
useFontAwesome()
useScreenSize()

if (cookie.get('token')) {
  //
}
</script>
