<template>
  <section class="app-container">
    <div
      class="rounded-2xl border border-color bg-surface p-4 w-full flex flex-col justify-between gap-3">
      <div class="flex justify-between">
        <SectionTitle icon="ri-folder-open-fill" :label="$t('project.title')" />
        <NuxtLink
          to="/project"
          class="flex gap-2 font-semibold text-primary bg-primary/[0.23] border border-1 border-primary rounded-lg text-xs px-3.5 py-2.5 backdrop-blur-md hover:-translate-y-0.5 hover:shadow-xl active:scale-95 transition-all duration-300 ease-in-out cursor-pointer">
          <span>{{ t("hero.view_all_projects") }}</span>
          <i class="ri-arrow-right-line"></i>
        </NuxtLink>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <AppCard
          v-for="project in projects"
          :key="project.id"
          :data="project" />
      </div>
    </div>
  </section>
</template>
<script setup>
const { t } = useI18n();
const projects = computed(() => [
  {
    id: 1,
    icon: "ri-team-fill",
    iconColor: "emerald",
    title: $t("project.hr_management_system"),
    detail: $t("project.hr_description"),
    gitHubLink: "https://github.com/Phalsophanny",
    demoLink: "https://github.com/Phalsophanny",
    skills: ["Java", "Spring Boot", "MySQL", "JWT"],
  },
  {
    id: 2,
    icon: "ri-graduation-cap-fill",
    iconColor: "amber",
    title: $t("project.student_management_system"),
    detail: $t("project.st_description"),
    gitHubLink: "https://github.com/Phalsophanny",
    demoLink: "https://github.com/Phalsophanny",
    skills: ["Java", "Spring Boot", "MySQL", "JPA"],
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
]);
</script>
<style scoped>
.app-container {
  padding-top: 20px;
}
</style>
