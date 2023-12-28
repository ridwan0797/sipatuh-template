<template>
  <div class="leading-normal tracking-normal" id="main-body">

      <div class="hidden lg:flex xl:flex cursor-pointer fixed bg-white text-gray-400 w-auto top-7 left-[245px] border rounded-md z-50">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="15 18 9 12 15 6"></polyline>
        </svg>
      </div>

    <div class="flex flex-wrap">

      <Sidebar />

      <div class="w-full bg-gray-100 pl-0 lg:pl-64 min-h-screen" id="main-content">

        <Navbar />

        <div class="p-6 bg-gray-100 mb-20">
          <router-view />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">

import Sidebar from './Sidebar.vue'
import Navbar from './Navbar.vue'
export default {
  name: 'AdminLayout',
  components: {
    Sidebar,
    Navbar,
  }
}
</script>