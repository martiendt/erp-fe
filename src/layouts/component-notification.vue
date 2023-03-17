<template>
  <popper>
    <button
      class="btn relative rounded-full hover:bg-slate-300/20 focus:bg-slate-300/20 dark:hover:bg-slate-300/20 dark:focus:bg-slate-300/20"
    >
      <fa-icon icon="fa-regular fa-bell w-5 h-5" class="w-8 h-8 flex items-center justify-center" />

      <span class="absolute -top-px -right-px flex h-3 w-3 items-center justify-center">
        <span class="bg-red-400 absolute inline-flex h-full w-full animate-ping rounded-full opacity-80"></span>
        <span class="bg-red-400 inline-flex h-2 w-2 rounded-full"></span>
      </span>
    </button>
    <template #content>
      <div
        class="popper-box border-slate-150 shadow-soft dark:shadow-soft-dark dark:border-slate-800 dark:bg-slate-700 mx-4 mt-1 flex max-h-[calc(100vh-6rem)] w-[calc(100vw-2rem)] flex-col rounded-lg border bg-white sm:m-0 sm:w-80"
      >
        <div class="dark:bg-slate-800 dark:text-slate-200 rounded-t-lg bg-slate-100 text-slate-600">
          <div class="flex items-center justify-between px-4 pt-2">
            <div class="flex items-center space-x-2">
              <h3 class="dark:text-slate-100 font-medium text-slate-700">Notifications</h3>
              <div
                class="badge bg-primary/10 text-primary dark:bg-accent-light/15 dark:text-accent-light h-5 rounded-full px-1.5"
              >
                2
              </div>
            </div>

            <button
              class="btn dark:hover:bg-slate-300/20 dark:focus:bg-slate-300/20 dark:active:bg-slate-300/25 -mr-1.5 h-7 w-7 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25"
            >
              <fa-icon icon="fa-regular fa-maximize"></fa-icon>
            </button>
          </div>

          <div class="scrollbar-hidden flex shrink-0 overflow-x-auto px-3">
            <button
              :class="
                activeTab === 'all'
                  ? 'border-primary dark:border-accent text-primary dark:text-accent-light'
                  : 'border-transparent hover:text-slate-800 focus:text-slate-800 dark:hover:text-slate-100 dark:focus:text-slate-100'
              "
              class="btn shrink-0 rounded-none border-b-2 px-3.5 py-2.5"
              @click="activeTab = 'all'"
            >
              <span>All</span>
            </button>
            <button
              :class="
                activeTab === 'logs'
                  ? 'border-primary dark:border-accent text-primary dark:text-accent-light'
                  : 'border-transparent hover:text-slate-800 focus:text-slate-800 dark:hover:text-slate-100 dark:focus:text-slate-100'
              "
              class="btn shrink-0 rounded-none border-b-2 px-3.5 py-2.5"
              @click="activeTab = 'logs'"
            >
              <span>Logs</span>
            </button>
          </div>
        </div>

        <div class="tab-content flex flex-col overflow-hidden">
          <div v-if="activeTab === 'all'" class="space-y-4 overflow-y-auto p-4">
            <div class="flex items-center space-x-3">
              <div
                class="bg-secondary/10 dark:bg-secondary-light/15 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg"
              >
                <i class="fa fa-user-edit text-secondary dark:text-secondary-light"></i>
              </div>
              <div>
                <p class="dark:text-slate-100 font-medium text-slate-600">User Photo Changed</p>
                <div class="line-clamp-1 dark:text-slate-300 mt-1 text-xs text-slate-400">
                  John Doe changed his avatar photo
                </div>
              </div>
            </div>
            <div class="flex items-center space-x-3">
              <div class="bg-info/10 dark:bg-info/15 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg">
                <fa-icon icon="fa-solid fa-pencil"></fa-icon>
              </div>
              <div>
                <p class="dark:text-slate-100 font-medium text-slate-600">
                  01 January 2022 <span class="text-xs font-light">08:00</span>
                </p>
                <div class="dark:text-slate-300 mt-1 flex text-xs text-slate-400">
                  <span class="line-clamp-1">Create new invoice</span>
                </div>
              </div>
            </div>
          </div>
          <div v-if="activeTab === 'logs'" class="overflow-y-auto px-4">
            <div class="mt-8 pb-8 text-center">
              <img class="mx-auto w-36" src="@/assets/images/no-data.svg" alt="image" />
              <div class="mt-5">
                <p class="dark:text-slate-100 text-base font-semibold text-slate-700">Empty logs</p>
                <p class="dark:text-slate-300 text-slate-400">There are no unread logs</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>
  </popper>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const activeTab = ref('all')
</script>
