<template>
  <section class="app-container mb-4">
    <div
      class="rounded-2xl border border-color bg-surface p-4 w-full flex flex-col justify-between gap-3">
      <div class="grid grid-cols-2 gap-4 big-container">
        <div class="flex flex-col gap-3 border-r border-color">
          <SectionTitle
            icon="ri-graduation-cap-fill"
            :label="$t('education')" />
          <div class="flex flex-col gap-3 ml-5">
            <div class="font-semibold text-sm">
              <span :class="isEnglish ? 'text-primary' : ''">{{
                isEnglish ? "SETEC" : "វិទ្យាស្ថាន"
              }}</span>
              <span :class="isEnglish ? '' : 'text-primary'">{{
                isEnglish ? " Institute" : " ស៊ីតិក"
              }}</span>
            </div>
            <div class="flex flex-col">
              <span class="text-secondary text-xs"
                >{{ $t("contact.management_information_systems") }}
              </span>
              <span class="text-secondary text-xs">{{
                $t("contact.bachelor’s_degree")
              }}</span>
            </div>
            <InfoItem
              :label="'2021 – ' + $t('present')"
              icon="ri-calendar-line" />
          </div>
        </div>

        <div class="flex flex-col gap-3 justify-between ml-5">
          <SectionTitle
            icon="ri-telegram-2-fill"
            :label="$t('contact.get_in_touch')" />
          <div class="flex flex-col">
            <span class="text-secondary text-xs"
              >{{ $t("contact.get_in_touch_desc1") }}
            </span>
            <span class="text-secondary text-xs">{{
              $t("contact.get_in_touch_desc2")
            }}</span>
          </div>

          <div class="flex justify-between gap-3">
            <InfoItem label="Pannyphal1@gmail.com" icon="ri-mail-line" />
            <InfoItem
              :label="$t('contact.get_in_touch_address')"
              icon="ri-map-pin-line" />
            <InfoItem label="+855 96 968 0040" icon="ri-phone-line" />
          </div>
        </div>
      </div>

      <div class="flex gap-5 small-container">
        <div class="flex flex-col gap-3">
          <SectionTitle
            icon="ri-graduation-cap-fill"
            :label="$t('education')" />
          <div class="flex flex-col gap-3 ml-5">
            <div class="font-semibold text-sm">
              <span :class="isEnglish ? 'text-primary' : ''">{{
                isEnglish ? "SETEC" : "វិទ្យាស្ថាន"
              }}</span>
              <span :class="isEnglish ? '' : 'text-primary'">{{
                isEnglish ? " Institute" : " ស៊ីតិក"
              }}</span>
            </div>
            <div class="flex flex-col gap-1">
              <span class="text-secondary text-xs"
                >{{ $t("contact.management_information_systems") }}
              </span>
              <span class="text-secondary text-xs">{{
                $t("contact.bachelor’s_degree")
              }}</span>
            </div>
            <InfoItem
              :label="'2021 – ' + $t('present')"
              icon="ri-calendar-line" />
          </div>
        </div>

        <div
          class="flex flex-col gap-3 justify-between border-t border-color pt-5">
          <SectionTitle
            icon="ri-telegram-2-fill"
            :label="$t('contact.get_in_touch')" />
          <div class="flex flex-col ml-5 gap-1">
            <span class="text-secondary text-xs"
              >{{ $t("contact.get_in_touch_desc1") }}
            </span>
            <span class="text-secondary text-xs">{{
              $t("contact.get_in_touch_desc2")
            }}</span>
          </div>

          <div class="flex flex-col gap-1 ml-5">
            <InfoItem label="Pannyphal1@gmail.com" icon="ri-mail-line" />
            <InfoItem
              :label="$t('contact.get_in_touch_address')"
              icon="ri-map-pin-line" />
            <InfoItem label="+855 96 968 0040" icon="ri-phone-line" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
const { t, locale } = useI18n();
const isEnglish = computed(() => locale.value === "en");
const isKhmer = computed(() => locale.value === "km");

console.log(isEnglish.value ? "ewadsdasf" : "KH");
</script>
<style scoped>
.app-container {
  padding-top: 20px;
}

/* Mobile */
@media (max-width: 389px) {
  .big-container {
    display: none;
  }
  .small-container {
    display: grid;
  }
}

/* Large Mobile */
@media (min-width: 390px) and (max-width: 429px) {
  .big-container {
    display: none;
  }
  .small-container {
    display: grid;
  }
}

/* Tablet */
@media (min-width: 430px) and (max-width: 767px) {
  .big-container {
    display: none;
  }
  .small-container {
    display: grid;
  }
}

/* Tablet Landscape */
@media (min-width: 768px) and (max-width: 979px) {
  .big-container {
    display: none;
  }
  .small-container {
    display: grid;
  }
}

/* Laptop */
@media (min-width: 980px) and (max-width: 1439px) {
  .big-container {
    display: grid;
  }
  .small-container {
    display: none;
  }
}

/* Desktop */
@media (min-width: 1440px) {
  .big-container {
    display: grid;
  }
  .small-container {
    display: none;
  }
}
</style>
