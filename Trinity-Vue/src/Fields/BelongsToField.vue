<template>
  <SelectInputField
    :component="props.component"
    :form="form"
    :errors="errors"
    :setFieldValue="setFieldValue"
    :search="fetchAssociates"
    :disabled="fetching"
    :loading="fetching"
  />
</template>

<script lang="ts" setup>
import type FieldProps from "@/Types/Props/FieldProps";
import type SelectField from "@/Types/Models/SelectField";
import { ref } from "vue";
import axios from "axios";
import { useConfigStore } from "@/Stores/ConfigStore";
import { usePageProps } from "@/Composables/trinity_page_props";

const configStore = useConfigStore();
const pageProps = usePageProps();
const props = defineProps<FieldProps<SelectField>>();

const fetching = ref(false);
async function fetchAssociates(
  search: string
): Promise<Array<{ [key: string]: string }>> {
  fetching.value = true;

  const res = await axios
    .get(
      `/${configStore.configs.prefix}/${pageProps.value.resource?.name}/relationship`,
      {
        params: {
          column: props.component.columnName,
          search,
        },
      }
    )
    .then((res) => res.data);
  fetching.value = false;

  return [];
}
</script>

<style scoped></style>
