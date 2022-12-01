<template>
  <div
    class="surface-0 flex align-items-center justify-content-center min-h-screen min-w-screen overflow-hidden"
  >
    <div class="grid justify-content-center p-2 lg:p-0" style="min-width: 80%">
      <div class="col-12 mt-5 xl:mt-0 text-center">
        <img
          :src="logo"
          alt="Trinity Admin Panel"
          class="mb-5"
          style="width: 81px; height: 60px"
        />
      </div>
      <div
        class="col-12 xl:col-6"
        style="
          border-radius: 56px;
          padding: 0.3rem;
          background: linear-gradient(
            180deg,
            var(--primary-color),
            rgba(33, 150, 243, 0) 30%
          );
        "
      >
        <div
          class="h-full w-full m-0 py-7 px-4"
          style="
            border-radius: 53px;
            background: linear-gradient(
              180deg,
              var(--surface-50) 38.9%,
              var(--surface-0)
            );
          "
        >
          <form @submit.prevent="submit" class="w-full md:w-10 mx-auto">
            <div class="field">
              <label for="email" class="block text-900 text-xl font-medium mb-2"
                >Email</label
              >
              <InputText
                id="email"
                v-model="form.email"
                name="email"
                type="email"
                class="w-full mb-3"
                placeholder="Email"
                style="padding: 1rem"
                :class="{ 'p-invalid': pageProps.errors?.value['Email'] }"
                required
              />
              <div
                id="email-help"
                class="p-error"
                v-if="pageProps.errors?.value['Email']"
              >
                <div
                  v-for="(err, index) of pageProps.errors?.value['Email']"
                  :key="index"
                >
                  {{ err }}
                </div>
              </div>
            </div>

            <div class="field">
              <label
                for="password1"
                class="block text-900 font-medium text-xl mb-2"
                >Password</label
              >
              <Password
                id="password1"
                v-model="form.password"
                name="password"
                placeholder="Password"
                :toggleMask="true"
                class="w-full mb-3"
                inputClass="w-full"
                inputStyle="padding:1rem"
                :class="{ 'p-invalid': pageProps.errors?.value['Password'] }"
                required
              ></Password>
              <div
                id="password-help"
                class="p-error"
                v-if="pageProps.errors?.value['Password']"
              >
                <div
                  v-for="(err, index) of pageProps.errors?.value['Password']"
                  :key="index"
                >
                  {{ err }}
                </div>
              </div>
            </div>

            <div class="flex align-items-center justify-content-between mb-5">
              <div class="flex align-items-center">
                <Checkbox
                  id="rememberMe"
                  v-model="form.remember"
                  :binary="true"
                  name="remember"
                  class="mr-2"
                ></Checkbox>
                <label for="rememberMe">Remember me</label>
              </div>
              <a
                class="font-medium no-underline ml-2 text-right cursor-pointer"
                style="color: var(--primary-color)"
                >Forgot password?</a
              >
            </div>

            <div class="field">
              <div class="p-error" v-if="pageProps.errors?.value['']">
                <div
                  v-for="(err, index) of pageProps.errors?.value['']"
                  :key="index"
                >
                  {{ err }}
                </div>
              </div>
            </div>

            <Button
              label="Sign In"
              type="submit"
              class="w-full p-3 text-xl"
              iconPos="right"
              :icon="{ 'pi pi-spin pi-spinner text-xl': form.processing }"
              :disabled="form.processing"
            ></Button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useLogo } from "@/Composables/trinity_logo";
import { useForm } from "@inertiajs/inertia-vue3";

import InputText from "primevue/inputtext";
import Password from "primevue/password";
import Checkbox from "primevue/checkbox";
import Button from "primevue/button";
import { usePageProps } from "@/Composables/trinity_page_props";

const logo = useLogo();
const pageProps = usePageProps();

const form = useForm({
  email: null,
  password: null,
  remember: false,
});

function submit() {
  form.post("", {
    onFinish: () => {},
  });
}
</script>

<script lang="ts">
export default {
  layout: null,
};
</script>
<style scoped>
.pi-eye {
  transform: scale(1.6);
  margin-right: 1rem;
}

.pi-eye-slash {
  transform: scale(1.6);
  margin-right: 1rem;
}
</style>
