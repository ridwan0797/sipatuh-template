<template>
  <q-layout view="hHh lpR lFr">
    <q-header bordered class="bg-white text-black">
      <q-toolbar class="h-full">
        <q-toolbar-title class="h-auto">
          <div class="flex flex-row h-full gap-5 py-2">
            <div class="flex items-center mx-3">
              <q-img
                width="100px"
                src="~assets/logo.png"
              />
            </div>

            <div class="flex items-center ml-2 mt-5">
              <q-btn flat dense icon="menu" @click="toggleLeftDrawer" />
            </div>
          </div>
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer show-if-above v-model="leftDrawerOpen" side="left" bordered>
      <main-menu></main-menu>
    </q-drawer>

    <q-page-container>
      <router-view class="bg-gray-100" />
    </q-page-container>

  </q-layout>
</template>

<script>
import { ref } from 'vue'
import MainMenu from 'src/components/MainMenu.vue'
export default {
  components: { MainMenu },
  setup () {
    const leftDrawerOpen = ref(false)

    return {
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
}
</script>
