<template>
  <section
    class="overflow-hidden rounded-xl border border-color bg-surface p-4">
    <!-- Loading -->
    <div v-if="pending" class="text-sm text-slate-400">
      {{ $t("git.failed_to_load_gitHub_activity") }}...
    </div>

    <!-- Error -->
    <div v-else-if="error" class="text-sm text-red-400">
      {{ $t("git.loading_gitHub_activity") }}.
    </div>

    <!-- Calendar -->
    <div
      v-else
      class="w-full min-w-0 max-w-full overflow-x-auto overflow-y-hidden">
      <div class="w-max min-w-[465px]">
        <!-- Month labels -->
        <div class="relative mb-1 ml-10 h-5">
          <span
            v-for="month in data?.months"
            :key="`${month.name}-${month.year}`"
            class="absolute text-[10px] text-secondary"
            :style="{
              left: `${getMonthPosition(month)}px`,
            }">
            {{ month.name.slice(0, 3) }}
          </span>
        </div>

        <div class="flex">
          <!-- Weekday labels -->
          <div
            class="mr-2 flex shrink-0 flex-col gap-1 text-[10px] text-secondary">
            <span></span>
            <span>Mon</span>
            <span></span>
            <span>Wed</span>
            <span></span>
            <span>Fri</span>
            <span></span>
          </div>

          <!-- Contribution weeks -->
          <div class="flex shrink-0 gap-[3px]">
            <div
              v-for="(week, weekIndex) in data?.weeks"
              :key="weekIndex"
              class="grid shrink-0 grid-rows-7 gap-[3px]">
              <div
                v-for="day in week.contributionDays"
                :key="day.date"
                class="h-[5px] w-[5px] shrink-0 rounded-[1px] text-secondary"
                :style="{
                  backgroundColor: day.color,
                }"
                :title="`${day.contributionCount} contributions on ${day.date}`" />
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Footer -->
    <div class="mt-2 flex items-center justify-between text-xs text-slate-500">
      <span class="text-[10px] text-secondary">
        {{ $t("git.learn_how_we_count_contributions") }}
      </span>

      <div class="flex items-center gap-2">
        <span class="text-[10px] text-secondary">{{ $t("git.less_git") }}</span>

        <div class="flex gap-1">
          <span
            v-for="color in data?.colors"
            :key="color"
            class="h-[5px] w-[5px]"
            :style="{ backgroundColor: color }" />
        </div>

        <span class="text-[10px] text-secondary">{{ $t("git.more_git") }}</span>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
const { t } = useI18n();
interface ContributionDay {
  date: string;
  contributionCount: number;
  color: string;
  weekday: number;
  contributionLevel: string;
}

interface ContributionWeek {
  firstDay: string;
  contributionDays: ContributionDay[];
}

interface ContributionMonth {
  name: string;
  firstDay: string;
  totalWeeks: number;
  year: number;
}

interface ContributionCalendar {
  totalContributions: number;
  colors: string[];
  months: ContributionMonth[];
  weeks: ContributionWeek[];
}

const { data, pending, error } = await useFetch<ContributionCalendar>(
  "/api/github-contributions",
  {
    lazy: true,
  },
);

const CELL_SIZE = 5;
const GAP = 3;
const WEEK_SIZE = CELL_SIZE + GAP;

function getMonthPosition(month: ContributionMonth) {
  const weeks = data.value?.weeks;

  if (!weeks || weeks.length === 0) {
    return 0;
  }

  const firstWeek = weeks.at(0);

  if (!firstWeek) {
    return 0;
  }

  const firstWeekDate = new Date(firstWeek.firstDay);
  const monthStart = new Date(month.firstDay);

  const diff = Math.floor(
    (monthStart.getTime() - firstWeekDate.getTime()) / (1000 * 60 * 60 * 24),
  );

  const weekIndex = Math.floor(diff / 7);

  return weekIndex * WEEK_SIZE;
}
</script>
