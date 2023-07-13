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

            <div class="flex items-center ml-2 mt-4">
              <q-btn flat dense icon="menu" @click="toggleLeftDrawer" />
            </div>
          </div>
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer show-if-above v-model="leftDrawerOpen" side="left" bordered>
      <q-list class="my-2">
        <template v-for="item in menuItems">
          <q-item v-if="!item.children" :key="item.id" clickable>
            <q-item-section avatar>
              <q-icon :name="item.icon" />
            </q-item-section>

            <q-item-section>
              {{ item.name }}
            </q-item-section>
          </q-item>

          <q-expansion-item v-else :icon="item.icon" :label="item.name" :key="Number(item.id)">
            <q-item v-for="childItem in item.children" :key="childItem.id" clickable>
              <q-item-section>
                {{ childItem.name }}
              </q-item-section>
            </q-item>
          </q-expansion-item>
        </template>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view class="bg-gray-100" />
    </q-page-container>

  </q-layout>
</template>

<script>
import { ref } from 'vue'

export default {
  setup () {
    const leftDrawerOpen = ref(false)

    return {
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      },
      menuItems: [
        {
          id: 1,
          name: 'Home',
          icon: 'home',
          link: '/menu1'
        },
        {
          id: 2,
          name: 'Bulk Galeri Foto',
          icon: 'collections',
          link: '/menu2'
        },
        {
          id: 3,
          name: 'Infografis',
          icon: 'analytics',
          link: '/menu2'
        },
        {
          id: 4,
          name: 'Video',
          icon: 'videocam',
          link: '/menu2'
        },
        {
          id: 5,
          name: 'Kamus Kebijakan',
          icon: 'import_contacts',
          link: '/menu2'
        },
        {
          id: 6,
          name: 'Repository',
          icon: 'business_center',
          link: '/menu2'
        },
        {
          id: 90,
          name: 'Sertifikat Kepatuhan',
          icon: 'description',
          children: [
            {
              id: 4,
              name: 'Submenu 1',
              link: '/submenu1'
            },
            {
              id: 5,
              name: 'Submenu 2',
              link: '/submenu2'
            }
          ]
        },
        {
          id: 91,
          name: 'Analisa & Dampak',
          icon: 'tv',
          children: [
            {
              id: 4,
              name: 'Submenu 1',
              link: '/submenu1'
            },
            {
              id: 5,
              name: 'Submenu 2',
              link: '/submenu2'
            }
          ]
        },
        {
          id: 7,
          name: 'Template Kebijakan',
          icon: 'text_snippet',
          link: '/menu2'
        }
      ]
    }
  }
}
</script>
