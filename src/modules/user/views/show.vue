<template>
  <div class="main-content-container">
    <div class="main-content-header">
      <h2>User</h2>
      <component
        :is="Breadcrumb"
        :breadcrumbs="[{ name: 'master' }, { name: 'user', path: '/master/user' }, { name: user.username }]"
      />
    </div>
    <div class="card p-4 space-y-5">
      <div class="flex flex-col space-y-3">
        <div class="flex justify-end">
          <div class="space-x-3">
            <router-link class="btn btn-base btn-default text-xs" :to="`/master/user/${$route.params.id}/edit`">
              Edit
            </router-link>
            <button class="btn btn-base btn-default text-xs">Delete</button>
          </div>
        </div>
        <h4 class="font-bold">Authentication Data</h4>
        <label class="block space-y-1">
          <span>Username:</span>
          <input v-model="user.username" class="form-input" placeholder="Username" type="text" readonly />
        </label>
        <label class="block space-y-1">
          <span>Email:</span>
          <input v-model="user.email" class="form-input" placeholder="Email" type="text" readonly />
        </label>
        <div>
          <hr class="my-3 border-slate-800/20" />
        </div>
        <h4 class="font-bold">User Data</h4>
        <label class="block space-y-1">
          <span>Full Name:</span>
          <input v-model="user.fullName" class="form-input" placeholder="Full Name" type="text" readonly />
        </label>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import Breadcrumb from '@/components/breadcrumb.vue'
import axios from '@/axios'
import { useRoute } from 'vue-router'

const route = useRoute()

const user = ref({
  username: '',
  email: '',
  fullName: '',
})

onMounted(async () => {
  const result = await axios.get('/user/' + route.params.id)
  user.value.username = result.data.username
  user.value.email = result.data.email
  user.value.fullName = result.data.fullName
})
</script>
