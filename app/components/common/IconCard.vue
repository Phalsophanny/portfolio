<template>
  <div :class="['project-icon', iconClass]">
    <i :class="[icon, 'text-base']"></i>
  </div>
</template>

<script setup>
const props = defineProps({
  icon: String,
  color: {
    type: String,
    default: "emerald",
  },
});

const iconClass = computed(() => `icon-${props.color}`);
</script>
