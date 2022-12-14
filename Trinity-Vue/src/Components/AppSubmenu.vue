<template>
  <ul v-if="items">
    <template v-for="(item, i) of items">
      <li
        v-if="visible(item) && !item.separator"
        :key="item.label || i"
        :class="[
          {
            'layout-menuitem-category': root,
            'active-menuitem': activeIndex === i && !item.to && !item.disabled,
          },
        ]"
        role="none"
      >
        <template v-if="root">
          <div class="layout-menuitem-root-text" :aria-label="item.label">
            {{ item.label }}
          </div>
          <AppSubmenu
            :items="visible(item) && item.items"
            @menuitem-click="$emit('menuitem-click', $event)"
          ></AppSubmenu>
        </template>
        <template v-else>
          <Link
            v-if="item.to"
            :href="`/${configStore.configs.prefix}${item.to}`"
            :class="[
              item.class,
              'p-ripple',
              { 'p-disabled': item.disabled },
              {
                'router-link-exact-active':
                  $page.props.controller?.resource !== null
                    ? $page.props.controller?.resource?.pluralLabel.toLowerCase() ===
                      item.resource?.pluralLabel.toLowerCase()
                    : $page.component === 'Home',
              },
            ]"
            :style="item.style"
            @click="onMenuItemClick($event, item, i)"
            :target="item.target"
            :aria-label="item.label"
            exact
            role="menuitem"
            v-ripple
          >
            <i :class="item.icon"></i>
            <span>{{ item.label }}</span>
            <i
              v-if="item.items"
              class="pi pi-fw pi-angle-down menuitem-toggle-icon"
            ></i>
            <Badge v-if="item.badge" :value="item.badge"></Badge>
          </Link>
          <a
            v-if="!item.to"
            :href="item.url || '#'"
            :style="item.style"
            :class="[item.class, 'p-ripple', { 'p-disabled': item.disabled }]"
            @click="onMenuItemClick($event, item, i)"
            :target="item.target"
            :aria-label="item.label"
            role="menuitem"
            v-ripple
          >
            <i :class="item.icon"></i>
            <span>{{ item.label }}</span>
            <i
              v-if="item.items"
              class="pi pi-fw pi-angle-down menuitem-toggle-icon"
            ></i>
            <Badge v-if="item.badge" :value="item.badge"></Badge>
          </a>
          <transition name="layout-submenu-wrapper">
            <AppSubmenu
              v-show="activeIndex === i"
              :items="visible(item) && item.items"
              @menuitem-click="$emit('menuitem-click', $event)"
            ></AppSubmenu>
          </transition>
        </template>
      </li>
      <li
        class="p-menu-separator"
        :style="item.style"
        v-if="visible(item) && item.separator"
        :key="'separator' + i"
        role="separator"
      ></li>
    </template>
  </ul>
</template>

<script lang="ts" setup>
import { reactive, ref } from "vue";
import Badge from "primevue/badge";
import { Link } from "@inertiajs/inertia-vue3";
import { useConfigStore } from "@/Stores/ConfigStore";

const configStore = useConfigStore();

withDefaults(
  defineProps<{
    items: Array<any>;
    root?: boolean;
  }>(),
  { items: () => [], root: false }
);

const emit = defineEmits(["menuitem-click"]);

let activeIndex = reactive(ref(null));

function onMenuItemClick(event: any, item: any, index: any) {
  if (item.disabled) {
    event.preventDefault();
    return;
  }

  if (!item.to && !item.url) {
    event.preventDefault();
  }

  //execute command
  if (item.command) {
    item.command({ originalEvent: event, item: item });
  }

  activeIndex.value = index === activeIndex.value ? null : index;

  emit("menuitem-click", {
    originalEvent: event,
    item: item,
  });
}

function visible(item: any) {
  return typeof item.visible === "function"
    ? item.visible()
    : item.visible !== false;
}
</script>
