<template>
  <AppHead :title="pageProps.resource?.pluralLabel"></AppHead>

  <div class="grid">
    <div class="col-12">
      <div class="card">
        <h5 class="mb-6">Create {{ pageProps.resource?.pluralLabel }}</h5>

        <form class="p-fluid formgrid grid col-12">
          <template
            v-for="(component, index) of pageProps.resource?.schema"
            :key="`form_${index}_${component.componentName}`"
          >
            <component
              :is="component.componentName"
              :component="component"
              :form="form"
              :errors="pageProps.errors"
              :setFieldValue="setFieldValue"
              class="mb-4"
            />
          </template>
        </form>

        <div class="grid">
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
        </div>

        <div class="mt-3">
          <Toolbar disabled>
            <template #start>
              <div class="grid">
                <Button
                  label="Create"
                  class="m-2 p-button-primary"
                  @click="() => create()"
                  :disabled="form.processing"
                  :loading="!addAnother && form.processing"
                />
                <Button
                  label="Create & create another"
                  class="m-2 p-button-help"
                  @click="() => create(true)"
                  :disabled="form.processing"
                  :loading="addAnother && form.processing"
                />
                <Button
                  label="Cancel"
                  class="m-2 p-button-secondary"
                  @click="useTrinityLink(`/${pageProps.resource?.name}`)"
                  :disabled="form.processing"
                />
              </div>
            </template>
          </Toolbar>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useForm } from "@inertiajs/inertia-vue3";
import { usePageProps } from "@/Composables/trinity_page_props";
import { useTrinityLink } from "@/Composables/trinity_link";
import Toolbar from "primevue/toolbar";
import Button from "primevue/button";
import { ref } from "vue";
import { useGetResourceFields } from "@/Composables/trinity_resource_fields";

const pageProps = usePageProps();
const fields = useGetResourceFields();
const data = {} as any;
for (const field of fields) {
  data[field.columnName] = null;
}
const form = useForm(data);
const addAnother = ref(false);

function setFieldValue(attr: string, value: any) {
  if (form.data()[attr] === value) return;
  form.defaults({ ...form.data(), ...{ [attr]: !value ? null : value } });
  form.reset();
}

function create(createAddAnother: boolean = false) {
  addAnother.value = createAddAnother;

  form.post("", {
    preserveScroll: true,
    preserveState: true,
  });
}
</script>
