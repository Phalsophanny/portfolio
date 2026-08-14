<template>
  <section class="app-container">
    <div
      class="rounded-2xl border border-color bg-surface p-4 w-full flex justify-between gap-3 flex-col">
      <div class="w-full flex justify-between gap-3 flex-wrap">
        <div class="flex flex-col gap-4 big-container-git-api">
          <SectionTitle
            label="GitHub Statistics"
            icon="ri-organization-chart" />
          <div
            class="flex justify-between gap-1 bg-background border border-color rounded-2xl p-4 w-fit">
            <div
              class="flex gap-5 border-r border-color min-w-[300px] items-center">
              <i class="ri-github-fill text-6xl"></i>
              <div class="flex flex-col gap-2">
                <div class="flex flex-col gap-1">
                  <div class="text-color text-base font-semibold">
                    Phalsophanny
                  </div>
                  <div class="text-secondary text-sm">
                    {{ $t("hero.position") }}
                  </div>
                </div>
                <div class="flex flex-col gap-1">
                  <InfoItem
                    icon="ri-map-pin-line"
                    :label="$t('about.address')"></InfoItem
                  ><InfoItem
                    icon="ri-calendar-line"
                    :label="$t('join_date')"></InfoItem>
                </div>
              </div>
            </div>
            <div class="flex flex-col gap-2 pl-4">
              <div class="text-xs text-secondary">
                {{ $t("git.total_contributions") }}
              </div>
              <GithubContribution />
            </div>
          </div>
        </div>

        <div class="flex min-w-0 flex-col gap-4 small-container-git-api">
          <SectionTitle
            label="GitHub Statistics"
            icon="ri-organization-chart" />

          <div
            class="flex w-full min-w-0 max-w-full flex-col gap-1 overflow-hidden rounded-2xl border border-color bg-background p-4 sm:w-fit">
            <div class="flex min-w-0 gap-5 pb-4">
              <i class="ri-github-fill shrink-0 text-6xl"></i>

              <div class="flex min-w-0 flex-col gap-2">
                <div class="flex flex-col gap-1">
                  <div class="text-base text-color font-semibold">
                    Phalsophanny
                  </div>

                  <div class="text-sm text-secondary">
                    {{ $t("hero.position") }}
                  </div>
                </div>

                <div class="flex flex-col gap-1">
                  <InfoItem
                    icon="ri-map-pin-line"
                    :label="$t('about.address')" />

                  <InfoItem icon="ri-calendar-line" :label="$t('join_date')" />
                </div>
              </div>
            </div>

            <!-- Contributions -->
            <div
              class="flex min-w-0 w-full flex-col gap-2 border-t border-color pt-4 pl-4">
              <div class="text-xs text-secondary">
                {{ $t("git.total_contributions") }}
              </div>

              <!-- THIS must be constrained -->
              <div class="w-full min-w-0 max-w-full overflow-x-auto">
                <GithubContribution />
              </div>
            </div>
          </div>
        </div>

        <div class="flex items-center justify-center big-screen">
          <div
            class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-2 h-fit mt-10">
            <div
              class="border border-color rounded-2xl bg-background-light px-4 pb-2 pt-3 h-fit w-[120px]">
              <div class="text-xs text-secondary">
                {{ $t("git.following") }}
              </div>
              <div class="text-lg font-semibold text-primary">
                {{ data?.stats?.following }}+
              </div>
            </div>
            <div
              class="border border-color rounded-2xl bg-background-light px-4 pb-2 pt-3 h-fit w-[120px]">
              <div class="text-xs text-secondary">
                {{ $t("git.repositories") }}
              </div>
              <div class="text-lg font-semibold text-primary">
                {{ data?.stats?.repositories }}+
              </div>
            </div>
            <div
              class="border border-color rounded-2xl bg-background-light px-4 pb-2 pt-3 h-fit w-[120px]">
              <div class="text-xs text-secondary">
                {{ $t("git.stars") }}
              </div>
              <div class="text-lg font-semibold text-primary">
                {{ data?.stats?.stars }}+
              </div>
            </div>
            <div
              class="border border-color rounded-2xl bg-background-light px-4 pb-2 pt-3 h-fit w-[120px]">
              <div class="text-xs text-secondary">
                {{ $t("git.followers") }}
              </div>
              <div class="text-lg font-semibold text-primary">
                {{ data?.stats?.followers }}+
              </div>
            </div>
          </div>
        </div>

        <div class="flex items-center justify-center small-screen">
          <div class="flex gap-2 flex-wrap">
            <div
              class="border border-color rounded-2xl bg-background-light px-4 pb-2 pt-3 h-fit w-[120px]">
              <div class="text-xs text-secondary">
                {{ $t("git.following") }}
              </div>
              <div class="text-lg font-semibold text-primary">
                {{ data?.stats?.following }}+
              </div>
            </div>
            <div
              class="border border-color rounded-2xl bg-background-light px-4 pb-2 pt-3 h-fit w-[120px]">
              <div class="text-xs text-secondary">
                {{ $t("git.repositories") }}
              </div>
              <div class="text-lg font-semibold text-primary">
                {{ data?.stats?.repositories }}+
              </div>
            </div>
            <div
              class="border border-color rounded-2xl bg-background-light px-4 pb-2 pt-3 h-fit w-[120px]">
              <div class="text-xs text-secondary">
                {{ $t("git.stars") }}
              </div>
              <div class="text-lg font-semibold text-primary">
                {{ data?.stats?.stars }}+
              </div>
            </div>
            <div
              class="border border-color rounded-2xl bg-background-light px-4 pb-2 pt-3 h-fit w-[120px]">
              <div class="text-xs text-secondary">
                {{ $t("git.followers") }}
              </div>
              <div class="text-lg font-semibold text-primary">
                {{ data?.stats?.followers }}+
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="border-color border-t pt-2 flex justify-center text-primary text-sm">
        <a
          href="https://github.com/Phalsophanny"
          target="_blank"
          class="flex gap-2"
          ><span>{{ $t("view_on_github") }}</span
          ><i class="ri-external-link-line"></i
        ></a>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
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

interface GithubStats {
  following: number;
  repositories: number;
  stars: number;
  followers: number;
}

interface ContributionCalendar {
  totalContributions: number;
  colors: string[];
  months: ContributionMonth[];
  weeks: ContributionWeek[];
  stats: GithubStats;
}

const { data, pending, error } = await useFetch<ContributionCalendar>(
  "/api/github-contributions",
  {
    lazy: true,
  },
);
</script>

<style scoped>
.app-container {
  padding-top: 20px;
}

/* git-data-api */

/* Mobile */
@media (max-width: 389px) {
  .small-container-git-api {
    display: flex;
  }
  .big-container-git-api {
    display: none;
  }
}

/* Large Mobile */
@media (min-width: 390px) and (max-width: 429px) {
  .small-container-git-api {
    display: flex;
  }
  .big-container-git-api {
    display: none;
  }
}

/* Tablet */
@media (min-width: 430px) and (max-width: 767px) {
  .small-container-git-api {
    display: flex;
  }
  .big-container-git-api {
    display: none;
  }
}

/* Tablet Landscape */
@media (min-width: 768px) and (max-width: 935px) {
  .small-container-git-api {
    display: flex;
  }
  .big-container-git-api {
    display: none;
  }
}

/* Laptop */
@media (min-width: 936px) and (max-width: 1439px) {
  .small-container-git-api {
    display: none;
  }
  .big-container-git-api {
    display: flex;
  }
}

/* Desktop */
@media (min-width: 1440px) {
  .small-container-git-api {
    display: none;
  }
  .big-container-git-api {
    display: flex;
  }
}

/* label */

/* Mobile */
@media (max-width: 389px) {
  .big-screen {
    display: none;
  }
  .small-screen {
    display: flex;
  }
}

/* Large Mobile */
@media (min-width: 390px) and (max-width: 429px) {
  .big-screen {
    display: none;
  }
  .small-screen {
    display: flex;
  }
}

/* Tablet */
@media (min-width: 430px) and (max-width: 767px) {
  .big-screen {
    display: none;
  }
  .small-screen {
    display: flex;
  }
}

/* Tablet Landscape */
@media (min-width: 768px) and (max-width: 1213px) {
  .big-screen {
    display: none;
  }
  .small-screen {
    display: flex;
  }
}

/* Laptop */
@media (min-width: 1214px) and (max-width: 1439px) {
  .big-screen {
    display: flex;
  }
  .small-screen {
    display: none;
  }
}

/* Desktop */
@media (min-width: 1440px) {
  .big-screen {
    display: flex;
  }
  .small-screen {
    display: none;
  }
}
</style>
