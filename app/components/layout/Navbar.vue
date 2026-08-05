<template>
  <header
    class="flex justify-between items-center px-16 py-5 bg-surface border-b border-color">
    <div class="flex gap-2 text-xs items-center">
      <i class="ri-code-s-slash-line text-primary text-base"></i>
      <div>SOPHANNY P.</div>
    </div>

    <nav class="flex gap-10 font-semibold text-xs items-center">
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
        class="flex px-1 py-1 gap-3 items-center text-xs border border-color rounded-md bg-background-light transition-colors duration-300 hover:text-primary"
        @click="isLight = !isLight">
        <i class="ri-sun-fill"></i>
        <i class="ri-moon-fill"></i>
      </div>
    </nav>
  </header>
</template>

<script setup>
const isLight = ref(false);

watch(isLight, (value) => {
  document.documentElement.classList.toggle("light", value);
});
</script>
