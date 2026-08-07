<template>
  <div class="flex items-center gap-3">
    <i :class="icon" class="text-primary"></i>

    <div :class="color ? color : 'text-secondary'" class="text-xs">
      {{ label }}
    </div>
  </div>
</template>

<script setup>
defineProps({
  icon: String,
  label: String,
  value: String,
  color: String,
});
</script>
