<template>
  <div
    :class="['flex gap-2', itemClass ? 'items-' + itemClass : 'items-center ']">
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
  itemClass: String,
});
</script>
