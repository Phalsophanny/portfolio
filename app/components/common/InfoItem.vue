<template>
  <div class="flex items-center gap-3 text-xs">
    <i :class="icon" class="text-primary"></i>

    <div class="text-secondary">
      {{ label }}
    </div>
  </div>
</template>

<script setup>
defineProps({
  icon: String,
  label: String,
  value: String,
});
</script>
