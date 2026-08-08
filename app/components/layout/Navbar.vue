<template>
  <header class="navbar">
    <SectionTitle
      icon="ri-code-s-slash-line"
      label="SOPHANNY P."></SectionTitle>

    <nav
      class="menu_container hidden flex gap-10 font-semibold text-xs items-center">
      <NuxtLink
        v-for="item in menus"
        :to="item.to"
        activeClass="text-primary font-bold"
        class="transition-colors duration-300 hover:text-primary"
        >{{ item.name }}</NuxtLink
      >

      <LanguageSwitch />

      <ClientOnly>
        <div
          class="flex items-center justify-center w-10 h-10 rounded-md cursor-pointer hover:text-primary transition"
          @click="toggleTheme">
          <i
            :class="colorMode.value === 'dark' ? 'ri-sun-fill' : 'ri-moon-fill'"
            class="text-lg"></i>
        </div>
      </ClientOnly>
    </nav>

    <!-- dropdown menu -->

    <Menu as="div" class="relative lg:hidden z-50">
      <MenuButton
        class="flex items-center justify-center p-2 rounded-lg hover:bg-surface-hover transition">
        <i class="ri-menu-line text-2xl text-primary"></i>
      </MenuButton>

      <Transition
        enter-active-class="transition duration-200 ease-out"
        enter-from-class="opacity-0 scale-95"
        enter-to-class="opacity-100 scale-100"
        leave-active-class="transition duration-150 ease-in"
        leave-from-class="opacity-100 scale-100"
        leave-to-class="opacity-0 scale-95">
        <MenuItems
          class="absolute right-0 mt-3 w-60 origin-top-right rounded-xl border border-color bg-surface shadow-xl focus:outline-none">
          <div class="py-2">
            <MenuItem
              v-for="item in menus"
              :key="item.to"
              v-slot="{ active, close }"
              as="div">
              <NuxtLink
                :to="item.to"
                activeClass="bg-primary/10 text-primary"
                @click="
                  () => {
                    close();
                  }
                "
                class="block"
                :class="[
                  'flex items-center gap-3 px-4 py-3 transition-colors',
                  active
                    ? 'bg-primary/10 text-primary'
                    : 'hover:bg-surface-hover',
                ]">
                <i :class="item.icon"></i>
                <span>{{ item.name }}</span>
              </NuxtLink>
            </MenuItem>

            <div class="my-2 border-t border-color"></div>
            <MenuItem v-slot="{ active }">
              <LanguageSwitch @click="toggleTheme" />
            </MenuItem>

            <MenuItem v-slot="{ active }">
              <button
                @click="toggleTheme"
                :class="[
                  'flex w-full items-center gap-3 px-4 py-3 transition-colors',
                  active
                    ? 'bg-primary/10 text-primary'
                    : 'hover:bg-surface-hover',
                ]">
                <i
                  :class="
                    colorMode.value === 'dark' ? 'ri-sun-fill' : 'ri-moon-fill'
                  "></i>

                <span>
                  {{ colorMode.value === "dark" ? "Light Mode" : "Dark Mode" }}
                </span>
              </button>
            </MenuItem>
          </div>
        </MenuItems>
      </Transition>
    </Menu>
  </header>
</template>

<script setup>
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/vue";
import { ChevronDownIcon } from "@heroicons/vue/20/solid";

const colorMode = useColorMode();
const menus = [
  {
    name: "Home",
    to: "/",
    icon: "ri-home-5-line",
  },
  {
    name: "About",
    to: "/about",
    icon: "ri-user-line",
  },
  {
    name: "Skills",
    to: "/skill",
    icon: "ri-code-s-slash-line",
  },
  {
    name: "Projects",
    to: "/project",
    icon: "ri-folder-line",
  },
  {
    name: "Experience",
    to: "/experience",
    icon: "ri-briefcase-line",
  },
  {
    name: "Education",
    to: "/education",
    icon: "ri-graduation-cap-line",
  },
  {
    name: "Contact",
    to: "/contact",
    icon: "ri-mail-line",
  },
];
const toggleTheme = (v) => {
  colorMode.preference = colorMode.value === "dark" ? "light" : "dark";
};

onMounted(() => {
  colorMode.preference;
});
</script>
<style scoped>
.navbar {
  position: sticky;
  top: 0;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 8px 20px; /* py-5 px-16 */

  background-color: var(--surface);
  border-bottom: 1px solid var(--border-color);
}
/* Mobile */
@media (max-width: 389px) {
  .menu_container {
    display: none;
  }
  .navbar {
    background-color: var(--surface);
    border-bottom: 1px solid var(--border-color);
  }
}

/* Large Mobile */
@media (min-width: 390px) and (max-width: 429px) {
  .menu_container {
    display: none;
  }
}

/* Tablet */
@media (min-width: 430px) and (max-width: 767px) {
  .menu_container {
    display: none;
  }
}

/* Tablet Landscape */
@media (min-width: 768px) and (max-width: 1023px) {
  .menu_container {
    display: none;
  }
}

/* Laptop */
@media (min-width: 1024px) and (max-width: 1439px) {
  .menu_container {
    display: flex;
  }
}

/* Desktop */
@media (min-width: 1440px) {
  .menu_container {
    display: flex;
  }
}
</style>
