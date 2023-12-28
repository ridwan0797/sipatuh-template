<template>
  <div class="flex items-center min-h-screen bg-white dark:bg-gray-900">
   <div class="container mx-auto">
       <div class="max-w-md mx-auto my-10">
          <div class="w-full flex justify-center">
            <img src="../assets/logo2.png" width="200" height="200" />
          </div>
           <div class="text-center">
               <p class="text-gray-500 dark:text-gray-700">Sign in to access your account</p>
           </div>
           <div class="m-7">
               <form action="">
                   <div class="mb-6">
                       <label for="email" class="block mb-2 text-sm text-gray-800 ">Email Address</label>
                       <input v-model="form.username" type="email" name="email" id="email" placeholder="you@company.com" class="text-black w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-black dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" />
                   </div>
                   <div class="mb-6">
                       <div class="flex justify-between mb-2">
                           <label for="password" class="text-sm text-gray-800 ">Password</label>
                           <a href="#!" class="text-sm text-gray-800 focus:outline-none focus:text-green-500 hover:text-green-500 dark:hover:text-green-300">Forgot password?</a>
                       </div>
                       <input v-model="form.password" type="password" name="password" id="password" placeholder="Your Password" class="text-black w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-green-100 focus:border-green-300 dark:bg-gray-700 dark:text-black dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" />
                   </div>
                   <div class="mb-6">
                       <button @click="onLogin()" type="button" class="w-full px-3 py-4 text-white bg-green-500 rounded-md focus:bg-green-600 focus:outline-none">Sign in</button>
                   </div>
                   <p class="text-sm text-center text-gray-400">Don&#x27;t have an account yet? <a href="#!" class="text-green-400 focus:outline-none focus:underline focus:text-green-500 dark:focus:border-green-800">Sign up</a>.</p>
               </form>
           </div>
       </div>
   </div>
 </div>
  
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useRouter } from 'vue-router';
import { useAxios } from '../composables/axios';
import { useSweetAlert } from '../composables/swal';

export default defineComponent({
  setup() {
    const $router = useRouter();
    const { fetchData } = useAxios()
    const { showLoading, showSuccess, showError } = useSweetAlert();
    const form = ref({
      username: 'kminchelle',
      password: '0lelplR'
    })

    const onLogin = () => {
      showLoading()

      fetchData({
        url: 'https://dummyjson.com/auth/login',
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        data: {
          username: form.value.username,
          password: form.value.password
        }
      })
      .then((x) => {
        localStorage.setItem('token', x.data.token as string)
        showSuccess('Login Berhasil')
        .then(() => {
          console.log(x, 'response')
          setTimeout(() => {
            $router.push('/admin');
          }, 200);
        })
      })
      .catch(() => {
        showError()
      })

    }

    return {
      onLogin,
      form
    }
  },
})
</script>
