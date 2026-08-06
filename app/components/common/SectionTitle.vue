<template>
  <div class="flex gap-2 text-base items-center font-semibold">
    <i :class="icon" class="text-primary"></i>
    <div>{{ label }}</div>
  </div>
</template>
<script setup>
defineProps({ icon: String, label: String });
</script>
