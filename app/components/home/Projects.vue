<template>
  <section class="app-container">
    <div
      class="rounded-2xl border border-color bg-surface p-4 w-full flex flex-col justify-between gap-5">
      <SectionTitle icon="ri-folder-open-fill" label="Featured Projects" />
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
const projects = [
  {
    id: 1,
    icon: "ri-team-fill",
    iconColor: "emerald",
    title: "HR Management System",
    detail:
      "A complete HR system with employee, department, position management, role-based access and JWT authentication.",
    gitHubLink: "https://github.com/Phalsophanny",
    demoLink: "https://github.com/Phalsophanny",
    skills: ["Java", "Spring Boot", "MySQL", "JWT"],
  },
  {
    id: 2,
    icon: "ri-graduation-cap-fill",
    iconColor: "amber",
    title: "Student Management System",
    detail:
      "Manage students, classes, and documents with file upload, search, pagination and RESTful APIs.",
    gitHubLink: "https://github.com/Phalsophanny",
    demoLink: "https://github.com/Phalsophanny",
    skills: ["Java", "Spring Boot", "MySQL", "JPA"],
  },
  {
    id: 3,
    icon: "ri-shopping-cart-fill",
    iconColor: "violet",
    title: "E-Commerce API",
    detail:
      "E-commerce backend API with user authentication, product management, cart, order and payment integration.",
    gitHubLink: "https://github.com/Phalsophanny",
    demoLink: "https://github.com/Phalsophanny",
    skills: ["Java", "Spring Boot", "MySQL", "JWT"],
  },
];

// const skills = [
//   { id: 0, lang: ["Java", "Spring Boot", "MySQL", "JWT"] },
//   { id: 1, lang: ["Java", "Spring Boot", "MySQL", "JPA"] },
//   { id: 2, lang: ["Java", "Spring Boot", "MySQL", "JWT"] },
// ];
// const icon = [
//   "ri-team-fill",
//   "ri-graduation-cap-fill",
//   "ri-shopping-cart-fill",
//   "ri-database-2-fill",
//   "ri-code-box-fill",
//   "ri-server-fill",
//   "ri-shield-check-fill",
// ];
// const iconColor = [
//   "emerald",
//   "amber",
//   "violet",
//   "orange",
//   "cyan",
//   "indigo",
//   "rose",
// ];
// const title = [
//   "HR Management System",
//   "Student Management System",
//   "E-Commerce API",
// ];
// const detail = [
//   "A complete HR system with employee, department, position management, role-based access and JWT authentication.",
//   "Manage students, classes, and documents with file upload, search, pagination and RESTful APIs.",
//   "E-commerce backend API with user authentication, product management, cart, order and payment integration.",
// ];
// const gLink = [
//   "https://github.com/Phalsophanny",
//   "https://github.com/Phalsophanny",
//   "https://github.com/Phalsophanny",
//   "https://github.com/Phalsophanny",
// ];
// const dLink = [
//   "https://github.com/Phalsophanny",
//   "https://github.com/Phalsophanny",
//   "https://github.com/Phalsophanny",
// ];
</script>
<style scoped>
.app-container {
  padding-top: 20px;
}
</style>
