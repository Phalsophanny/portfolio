<template>
  <div :class="currentFont">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
<script setup lang="ts">
const { locale } = useI18n();

const currentFont = computed(() => {
  return locale.value === "kh" ? "font-kh" : "font-en";
});
</script>
