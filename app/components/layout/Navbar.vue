<template>
  <header
    class="relative flex items-center justify-between justify-between items-center px-16 py-5 bg-surface border-b border-color">
    <div class="flex gap-2 text-xs items-center font-semibold">
      <i class="ri-code-s-slash-line text-primary text-base"></i>
      <div>SOPHANNY P.</div>
    </div>

    <nav
      class="menu_container hidden flex gap-10 font-semibold text-xs items-center">
      <NuxtLink
        to="/"
        activeClass="text-primary font-bold"
        class="transition-colors duration-300 hover:text-primary"
        >Home</NuxtLink
      >
      <NuxtLink
        to="/about"
        activeClass="text-primary font-bold"
        class="transition-colors duration-300 hover:text-primary"
        >About</NuxtLink
      >
      <NuxtLink
        to="/skill"
        activeClass="text-primary font-bold"
        class="transition-colors duration-300 hover:text-primary"
        >Skills</NuxtLink
      >
      <NuxtLink
        to="/project"
        activeClass="text-primary font-bold"
        class="transition-colors duration-300 hover:text-primary"
        >Projects</NuxtLink
      >
      <NuxtLink
        to="/experience"
        activeClass="text-primary font-bold"
        class="transition-colors duration-300 hover:text-primary"
        >Experience</NuxtLink
      >
      <NuxtLink
        to="/education"
        activeClass="text-primary font-bold"
        class="transition-colors duration-300 hover:text-primary"
        >Education</NuxtLink
      >
      <NuxtLink
        to="/contact"
        activeClass="text-primary font-bold"
        class="transition-colors duration-300 hover:text-primary"
        >Contact</NuxtLink
      >
      <div
        class="flex items-center justify-center w-10 h-10 rounded-md cursor-pointer hover:text-primary transition"
        @click="toggleTheme">
        <i
          :class="colorMode.value === 'dark' ? 'ri-sun-fill' : 'ri-moon-fill'"
          class="text-lg"></i>
      </div>
    </nav>
    <!-- <button class="lg:hidden">
      <i class="ri-menu-line text-2xl"></i>
    </button> -->

    <!-- dropdown menu -->

    <Menu as="div" class="relative inline-block lg:hidden">
      <MenuButton
        :class="
          colorMode.value === 'dark'
            ? 'text-white bg-white/10 hover:bg-white/20'
            : 'text-slate-700 bg-slate-100 hover:bg-slate-200'
        "
        class="inline-flex w-full justify-center gap-x-1.5 rounded-md px-3 py-2 text-sm font-semibold inset-ring-1 inset-ring-white/5">
        <i class="ri-menu-line text-2xl"></i>
      </MenuButton>

      <transition
        enter-active-class="transition ease-out duration-100"
        enter-from-class="transform opacity-0 scale-95"
        enter-to-class="transform scale-100"
        leave-active-class="transition ease-in duration-75"
        leave-from-class="transform scale-100"
        leave-to-class="transform opacity-0 scale-95">
        <MenuItems
          class="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-gray-800 outline-1 -outline-offset-1 outline-white/10">
          <div class="py-1">
            <MenuItem v-slot="{ active }">
              <a
                href="#"
                :class="[
                  active
                    ? 'bg-white/5 text-white outline-hidden'
                    : 'text-gray-300',
                  'block px-4 py-2 text-sm',
                ]"
                >Account settings</a
              >
            </MenuItem>
            <MenuItem v-slot="{ active }">
              <a
                href="#"
                :class="[
                  active
                    ? 'bg-white/5 text-white outline-hidden'
                    : 'text-gray-300',
                  'block px-4 py-2 text-sm',
                ]"
                >Support</a
              >
            </MenuItem>
            <MenuItem v-slot="{ active }">
              <a
                href="#"
                :class="[
                  active
                    ? 'bg-white/5 text-white outline-hidden'
                    : 'text-gray-300',
                  'block px-4 py-2 text-sm',
                ]"
                >License</a
              >
            </MenuItem>
            <form method="POST" action="#">
              <MenuItem v-slot="{ active }">
                <button
                  type="submit"
                  :class="[
                    active
                      ? 'bg-white/5 text-white outline-hidden'
                      : 'text-gray-300',
                    'block w-full px-4 py-2 text-left text-sm',
                  ]">
                  Sign out
                </button>
              </MenuItem>
            </form>
          </div>
        </MenuItems>
      </transition>
    </Menu>
  </header>
</template>

<script setup>
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/vue";
import { ChevronDownIcon } from "@heroicons/vue/20/solid";
const colorMode = useColorMode();

const toggleTheme = (v) => {
  colorMode.preference = colorMode.value === "dark" ? "light" : "dark";
  console.log(colorMode.value);
};

onMounted(() => {
  console.log(colorMode.preference);
});
</script>
<style scoped>
/* Mobile */
@media (max-width: 389px) {
  .menu_container {
    display: none;
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
