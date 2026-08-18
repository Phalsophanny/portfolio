<template>
  <section class="app-container">
    <div
      class="rounded-2xl border border-color bg-surface p-4 w-full flex flex-col justify-between gap-3">
      <div class="container-full">
        <!-- left -->
        <div class="flex flex-col gap-3">
          <SectionTitle
            icon="ri-stack-overflow-line"
            :label="$t('about.my_journey.my_journey')"></SectionTitle>
          <section class="relative">
            <div class="relative">
              <!-- Vertical timeline -->
              <div
                class="absolute left-[8px] top-3 bottom-3 w-[2px] bg-gradient-to-b from-blue-500 via-blue-500/70 to-blue-500/10" />

              <div class="space-y-7">
                <div
                  v-for="(item, index) in journey"
                  :key="index"
                  class="relative pl-11">
                  <!-- Dot -->
                  <div
                    class="absolute left-0 top-0 flex h-[18px] w-[18px] items-center justify-center rounded-full border-2 border-primary bg-background shadow-[0_0_12px_rgba(37,99,235,0.65)]">
                    <span class="h-[8px] w-[8px] rounded-full bg-primary" />
                  </div>

                  <!-- Year -->
                  <span class="font-semibold tracking-wide text-primary">
                    {{ item.period }}
                  </span>

                  <!-- Title -->
                  <h3 class="mt-1 text-sm font-semibold leading-6">
                    {{ item.title }}
                  </h3>

                  <!-- Description -->
                  <p
                    class="max-w-[570px] text-xs text-secondary leading-6 text-slate-400">
                    {{ item.description }}
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
        <!-- right -->
        <div class="flex flex-col gap-3">
          <div
            class="flex flex-col items-center p-4 rounded-2xl bg-primary/10 text-primary">
            <div>
              <i class="ri-double-quotes-l text-[40px]"></i>
              <span class="ml-2 tracking-wide text-[15px]">
                {{ $t("about.my_journey.the_best_way") }}</span
              >
            </div>
            <div
              class="flex items-end justify-end mt-2 text-xs text-secondary w-full">
              <div>-- {{ t("hero.name_small") }}</div>
            </div>
          </div>
          <div class="flex gap-2">
            <div class="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-2 gap-3">
              <AppCard
                v-for="project in projects"
                :key="project.id"
                :data="project"
                no-line
                no-link
                no-skill-box />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
const { t } = useI18n();

const journey = computed(() => [
  {
    period: "2021 –" + " " + t("present"),
    title: t("about.my_journey.bachelor.title"),
    description: t("about.my_journey.bachelor.description"),
  },
  {
    period: "2022 – 2023",
    title: t("about.my_journey.learning.title"),
    description: t("about.my_journey.learning.description"),
  },
  {
    period: "2023 –" + " " + t("present"),
    title: t("about.my_journey.projects.title"),
    description: t("about.my_journey.projects.description"),
  },
  {
    period: "2024 –" + " " + t("internship"),
    title: t("about.my_journey.internship.title"),
    description: t("about.my_journey.internship.description"),
  },
]);
const projects = computed(() => [
  {
    id: 1,
    icon: "ri-lightbulb-flash-fill",
    iconColor: "emerald",
    title: $t("about.my_journey.problem_solver"),
    detail: $t("about.my_journey.ps_description"),
  },
  {
    id: 2,
    icon: "ri-phone-find-fill",
    iconColor: "amber",
    title: $t("about.my_journey.detail_oriented"),
    detail: $t("about.my_journey.do_description"),
  },
  {
    id: 3,
    icon: "ri-shopping-cart-fill",
    iconColor: "violet",
    title: $t("project.e_commerce_api"),
    detail: $t("project.e_description"),
    gitHubLink: "https://github.com/Phalsophanny",
    demoLink: "https://github.com/Phalsophanny",
    skills: ["Java", "Spring Boot", "MySQL", "JWT"],
  },
  {
    id: 4,
    icon: "ri-shopping-cart-fill",
    iconColor: "violet",
    title: $t("project.e_commerce_api"),
    detail: $t("project.e_description"),
    gitHubLink: "https://github.com/Phalsophanny",
    demoLink: "https://github.com/Phalsophanny",
    skills: ["Java", "Spring Boot", "MySQL", "JWT"],
  },
]);
</script>
<style scoped>
.app-container {
  padding-top: 20px;
}

/* Mobile */
@media (max-width: 389px) {
  .container-full {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
}

/* Large Mobile */
@media (min-width: 390px) and (max-width: 429px) {
  .container-full {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
}

/* Tablet */
@media (min-width: 430px) and (max-width: 767px) {
  .container-full {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
}

/* Tablet Landscape */
@media (min-width: 768px) and (max-width: 1023px) {
  .container-full {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
}

/* Laptop */
@media (min-width: 1024px) and (max-width: 1439px) {
  .container-full {
    display: grid;
    grid-template-columns: 3fr 2fr;
    gap: 1rem;
    width: 100%;
  }
}

/* Desktop */
@media (min-width: 1440px) {
  .container-full {
    display: grid;
    grid-template-columns: 3fr 2fr;
    gap: 1rem;
    width: 100%;
  }
}
</style>
