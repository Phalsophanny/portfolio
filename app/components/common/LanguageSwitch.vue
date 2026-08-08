<template>
  <div
    class="inline-flex items-center gap-1 rounded-lg border border-color bg-background p-1 dark:border-color dark:bg-background">
    <!-- English -->
    <button
      type="button"
      @click="changeLanguage('en')"
      :class="[
        'rounded-md px-1 py-1 text-xs font-semibold transition-all duration-200',
        locale === 'en'
          ? 'bg-surface text-primary shadow-sm dark:bg-slate-700 dark:text-primary'
          : 'text-slate-500 hover:bg-surface hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-700/60 dark:hover:text-white',
      ]">
      <img :src="english" alt="" class="w-[30px]" />
    </button>

    <!-- Khmer -->
    <button
      type="button"
      @click="changeLanguage('kh')"
      :class="[
        'rounded-md px-1 py-1 text-xs font-semibold transition-all duration-200',
        locale === 'kh'
          ? 'bg-surface text-primary shadow-sm dark:bg-slate-700 dark:text-primary'
          : 'text-slate-500 hover:bg-white/70 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-700/60 dark:hover:text-white',
      ]">
      <img :src="khmer" alt="" class="w-[30px]" />
    </button>
  </div>
</template>
<script setup lang="ts">
import english from "~/assets/images/en.png";
import khmer from "~/assets/images/kh.png";

const { locale, setLocale } = useI18n();

async function changeLanguage(lang: "en" | "kh") {
  if (locale.value === lang) return;

  await setLocale(lang);
}
</script>
