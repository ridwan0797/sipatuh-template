// useAxios.ts
import { ref } from 'vue';
import axios, { type AxiosRequestConfig, type AxiosResponse } from 'axios';

interface UseAxiosOptions extends AxiosRequestConfig {
  url: string;
}

export function useAxios<T = any>() {
  const data = ref<T | null>(null);
  const error = ref<Error | null>(null);
  const isLoading = ref(false);

  const fetchData = (options: UseAxiosOptions): Promise<void> => {
    isLoading.value = true;

    return new Promise<void>((resolve, reject) => {
      axios(options)
        .then((response: AxiosResponse<T>) => {
          data.value = response.data;
          error.value = null;
          resolve(response);
        })
        .catch((e: AxiosError) => {
          data.value = null;
          error.value = e;
          reject(e);
        })
        .finally(() => {
          isLoading.value = false;
        });
    });
  };

  return { data, error, isLoading, fetchData };
}
