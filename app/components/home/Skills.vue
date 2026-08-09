<template>
  <section class="app-container">
    <div class="rounded-2xl border border-color bg-surface p-4 w-full">
      <div class="flex flex-col gap-5 justify-between">
        <SectionTitle
          icon="ri-code-s-slash-line"
          :label="$t('skill.technical_skill')"></SectionTitle>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div class="flex flex-col gap-3">
            <InfoItem
              icon="ri-book-2-line"
              :label="$t('skill.language')"
              color="text-color"></InfoItem>
            <SkillBox :skills="tech" />
          </div>
          <div class="flex flex-col gap-3">
            <InfoItem
              icon="ri-artboard-2-line"
              :label="$t('skill.framework')"
              color="text-color"></InfoItem>
            <SkillBox :skills="framework" />
          </div>
          <div class="flex flex-col gap-3">
            <InfoItem
              icon="ri-database-2-line"
              :label="$t('skill.databases')"
              color="text-color"></InfoItem>
            <SkillBox :skills="databases" />
          </div>
          <div class="flex flex-col gap-3">
            <InfoItem
              icon="ri-settings-2-line"
              :label="$t('skill.tools_others')"
              color="text-color"></InfoItem>
            <SkillBox :skills="tool" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
const tech = ["Java", "SQL", "Javascript", "HTML", "CSS"];
const framework = [
  "Spring Boot",
  "Spring Security",
  "Spring Data JPA",
  "Hibernate",
  "Tailwindcss",
];
const databases = ["MySQL", "PostgreSQL", "Oracle"];
const tool = [
  "Git",
  "GitHub",
  "Maven",
  "Postman",
  "Swagger",
  "Docker",
  "IntelliJ IDEA",
  "VS code",
];
</script>
<style scoped>
.app-container {
  padding-top: 20px;
}
</style>
