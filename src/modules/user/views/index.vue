<template>
  <div class="main-content-container">
    <div class="main-content-header">
      <h2>User</h2>
      <component :is="Breadcrumb" :breadcrumbs="[{ name: 'master' }, { name: 'user' }]" />
    </div>
    <div class="card p-4 space-y-5">
      <div>
        <div class="space-y-1">
          <label class="input-group relative">
            <router-link to="/master/user/create" class="prepend-input">
              <fa-icon icon="fa-solid fa-plus"></fa-icon>
            </router-link>
            <input v-model="searchText" class="form-input rounded-r-lg" placeholder="Search" type="text" />
            <div
              v-if="isLoadingSearch"
              class="dark:text-slate-300 pointer-events-none absolute right-0 flex h-full w-10 items-center justify-center text-slate-400"
            >
              <div
                class="border-slate-150 dark:border-slate-500 dark:border-r-slate-300 h-5 w-5 animate-spin rounded-full border-2 border-r-slate-400"
              ></div>
            </div>
          </label>
        </div>
      </div>
      <div class="table-container">
        <table class="table">
          <thead>
            <tr class="basic-table-row">
              <th class="basic-table-head">#</th>
              <th class="basic-table-head">Name</th>
              <th class="basic-table-head">Full Name</th>
              <th class="basic-table-head">Email</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(user, index) in users" :key="user._id" class="basic-table-row">
              <td class="basic-table-body">{{ index + 1 + (currentPage - 1) * pageLimit }}</td>
              <td class="basic-table-body">
                <router-link :to="`/master/user/${user._id}`" class="text-blue-500 hover:text-blue-600">
                  {{ user.username }}
                </router-link>
              </td>
              <td class="basic-table-body">{{ user.fullName }}</td>
              <td class="basic-table-body">{{ user.email }}</td>
            </tr>
          </tbody>
        </table>

        <div v-if="pagination.totalPage > 1" class="flex flex-wrap gap-2 items-center justify-center mt-10">
          <button
            v-for="i in pagination.totalPage"
            :key="i"
            class="btn btn-base border border-slate-800/20 dark:text-slate-100"
            :class="{ 'bg-blue-500 text-slate-100': i === currentPage }"
            @click="onClickPage(i)"
          >
            {{ i }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, watch } from 'vue'
import Breadcrumb from '@/components/breadcrumb.vue'
import axios from '@/axios'
import { watchDebounced } from '@vueuse/core'
import { useHttpUser } from '../api/http'

const httpUser = useHttpUser()

const result = httpUser.readAll()

console.log(result)

const users = ref([])
const pagination = ref({
  page: 1,
  totalDocument: 0,
  totalPage: 0,
  totalPerPage: 0,
})
const isLoadingSearch = ref(false)
const searchText = ref('')
const currentPage = ref(1)
const pageLimit = 10

const getUsers = async (page = 1) => {
  const result = await axios.get('/user', {
    params: {
      limit: pageLimit,
      page: page,
      sort: 'username',
      filter: {
        $or: [
          {
            username: { $regex: searchText.value, $options: 'i' },
          },
          {
            email: { $regex: searchText.value, $options: 'i' },
          },
          {
            fullName: { $regex: searchText.value, $options: 'i' },
          },
        ],
      },
    },
  })
  users.value = result.data.data
  pagination.value = {
    page: result.data.page,
    totalDocument: result.data.totalDocument,
    totalPage: result.data.totalPage,
    totalPerPage: result.data.totalPerPage,
  }
}

const onClickPage = async (page: number) => {
  currentPage.value = page
  await getUsers(page)
}

watch(searchText, () => {
  isLoadingSearch.value = true
})

watchDebounced(
  searchText,
  async () => {
    currentPage.value = 1
    await getUsers()
    isLoadingSearch.value = false
  },
  { debounce: 500, maxWait: 1000 }
)

onMounted(async () => {
  await getUsers()
})
</script>
