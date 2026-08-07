<template>
  <div class="flex flex-wrap gap-1 w-full max-w-[241px]">
    <div
      v-for="skill in skills"
      :key="skill"
      class="skill-box px-3 py-1 rounded-xl border border-color text-xs">
      <span class="relative z-10">{{ skill }}</span>
    </div>
  </div>
</template>

<script setup>
defineProps({
  skills: {
    type: Array,
    default: () => [],
  },
});
</script>

<style scoped>
.skill-box {
  position: relative;
  overflow: hidden;
}
</style>
