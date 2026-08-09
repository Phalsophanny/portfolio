<template>
  <div
    class="border border-color p-4 rounded-2xl max-w-[380px] bg-background-light">
    <div class="flex flex-col gap-2 justify-between h-full">
      <div class="flex justify-between gap-5 pb-2">
        <IconCard
          :icon="data.icon ? data.icon : 'ri-team-fill'"
          :color="data.iconColor ? data.iconColor : 'emerald'" />

        <div class="flex flex-col gap-1">
          <div class="font-semibold">{{ data.title }}</div>
          <div class="w-[30%] h-[5px] bg-emerald rounded-2xl"></div>
          <div class="text-secondary text-xs leading-[20px] min-h-20">
            {{ data.detail }}
          </div>
          <SkillBox :skills="data.skills" />
        </div>
      </div>
      <div
        class="border-color border-t pt-2 flex justify-between text-primary text-sm">
        <a :href="data.gitHubLink" target="_blank" class="flex gap-2">
          <i class="ri-github-fill"></i>
          <span>{{ $t("view_on_github") }}</span>
        </a>
        <a :href="data.demoLink" target="_blank" class="flex gap-2">
          <span>{{ $t("live_demo") }}</span>
          <i class="ri-external-link-line"></i>
        </a>
      </div>
    </div>
  </div>
</template>
<script setup>
const { t } = useI18n();
defineProps({
  data: {
    type: Object,
    required: true,
  },
});
</script>
