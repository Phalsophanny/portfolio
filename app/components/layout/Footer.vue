<template>
  <section class="app-container py-3">
    <div
      class="flex w-full items-center justify-between gap-2 items-center big-screen">
      <SectionTitle icon="ri-code-s-slash-line" :label="$t('nav.SOPHANNY_P')" />

      <span class="text-secondary text-xs">{{
        $t("footer.2024_sophanny_hal_ll_rights_reserved")
      }}</span>

      <div class="flex gap-1 text-xs">
        <span class="text-secondary">{{ $t("footer.build_with") }}</span>
        <i class="ri-poker-hearts-fill text-danger"></i>
        <span class="text-primary">{{ $t("footer.using") }} Nuxt 3</span>
        <span class="text-secondary">&</span>
        <span class="text-primary">Tailwind CSS</span>
      </div>
    </div>

    <div
      class="flex w-full items-center justify-center gap-3 flex-col items-center small-screen">
      <SectionTitle icon="ri-code-s-slash-line" :label="$t('nav.SOPHANNY_P')" />

      <span class="text-secondary text-xs">{{
        $t("footer.2024_sophanny_hal_ll_rights_reserved")
      }}</span>

      <div class="flex gap-1 text-xs">
        <span class="text-secondary">{{ $t("footer.build_with") }}</span>
        <i class="ri-poker-hearts-fill text-danger"></i>
        <span class="text-primary">{{ $t("footer.using") }} Nuxt 3</span>
        <span class="text-secondary">&</span>
        <span class="text-primary">Tailwind CSS</span>
      </div>
    </div>
  </section>
</template>
<style scoped>
/* Mobile */
@media (max-width: 389px) {
  .big-screen {
    display: none;
  }
  .small-screen {
    display: flex;
  }
}

/* Large Mobile */
@media (min-width: 390px) and (max-width: 429px) {
  .big-screen {
    display: none;
  }
  .small-screen {
    display: flex;
  }
}

/* Tablet */
@media (min-width: 430px) and (max-width: 681px) {
  .big-screen {
    display: none;
  }
  .small-screen {
    display: flex;
  }
}

/* Tablet Landscape */
@media (min-width: 682px) and (max-width: 1023px) {
  .big-screen {
    display: flex;
  }
  .small-screen {
    display: none;
  }
}

/* Laptop */
@media (min-width: 1024px) and (max-width: 1439px) {
  .big-screen {
    display: flex;
  }
  .small-screen {
    display: none;
  }
}

/* Desktop */
@media (min-width: 1440px) {
  .big-screen {
    display: flex;
  }
  .small-screen {
    display: none;
  }
}
</style>
