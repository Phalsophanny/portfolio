<template>
  <section class="app-container">
    <div class="container-full">
      <!-- left -->
      <div class="max-w-md">
        <div class="flex flex-col gap-4">
          <div
            class="flex gap-2 items-center w-fit px-2 py-1 rounded-xl bg-primary/[0.23] text-xs text-primary font-semibold">
            <span
              class="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
            <div>{{ t("about.about_me") }}</div>
          </div>

          <div class="text-4xl font-semibold">
            <span>{{ t("about.about") }} </span>
            <span class="text-primary"> {{ t("about.me") }}</span>
          </div>
          <div class="text-lg">
            {{ t("hero.position") }} | {{ t("hero.problem_solver") }} |
            {{ t("hero.lifelong_learner") }}
          </div>
          <div class="flex flex-col gap-1">
            <div class="text-xs text-secondary leading-[20px]">
              {{ t("about.desc1") }}
            </div>
            <div class="text-xs text-secondary leading-[20px]">
              {{ t("about.desc2") }}
            </div>
          </div>
          <!-- profile mobile -->
          <div class="w-full flex justify-center left-container hidden">
            <div
              class="rounded-2xl border border-color bg-surface right-full-container w-full small-screen">
              <div class="flex flex-col gap-5 justify-between items-center">
                <div class="relative">
                  <!-- Circle Border -->
                  <div
                    class="rounded-full p-1 bg-gradient-to-br from-blue-500 via-blue-600 to-cyan-400 shadow-[0_0_40px_rgba(37,99,235,0.45)]">
                    <div
                      class="rounded-full p-1 bg-slate-900 border-4 border-slate-900 overflow-hidden">
                      <img
                        :src="profile"
                        alt="Profile"
                        class="w-32 h-32 sm:w-40 sm:h-40 md:w-52 md:h-52 lg:w-50 lg:h-50 object-contain rounded-full" />
                    </div>
                  </div>
                </div>

                <div class="flex w-full flex-col gap-1.5">
                  <!-- Name -->
                  <div
                    class="grid grid-cols-[120px_1fr] items-center gap-3 sm:grid-cols-[180px_1fr]">
                    <InfoItem
                      icon="ri-user-line"
                      :label="$t('name')"
                      color="text-color" />

                    <div class="text-secondary text-xs">
                      {{ $t("about.name") }}
                    </div>
                  </div>

                  <!-- Gmail -->
                  <div
                    class="grid grid-cols-[120px_1fr] items-center gap-3 sm:grid-cols-[180px_1fr]">
                    <InfoItem
                      icon="ri-mail-line"
                      :label="$t('gmail')"
                      color="text-color" />

                    <div class="text-secondary text-xs break-all">
                      Pannyphal1@gmail.com
                    </div>
                  </div>

                  <!-- Location -->
                  <div
                    class="grid grid-cols-[120px_1fr] items-center gap-3 sm:grid-cols-[180px_1fr]">
                    <InfoItem
                      icon="ri-map-pin-line"
                      :label="$t('location')"
                      color="text-color" />

                    <div class="text-secondary text-xs">
                      {{ $t("about.address") }}
                    </div>
                  </div>

                  <!-- Education -->
                  <div
                    class="grid grid-cols-[120px_1fr] items-center gap-3 sm:grid-cols-[180px_1fr]">
                    <InfoItem
                      icon="ri-graduation-cap-line"
                      :label="$t('education')"
                      color="text-color" />

                    <div class="text-secondary text-xs">
                      {{ $t("about.setec_institute") }}
                    </div>
                  </div>

                  <!-- Degree -->
                  <div
                    class="grid grid-cols-[120px_1fr] items-center gap-3 sm:grid-cols-[180px_1fr]">
                    <InfoItem
                      icon="ri-school-line"
                      :label="$t('degree')"
                      color="text-color" />

                    <div class="text-secondary text-xs">
                      {{ $t("about.bachelor’s_degree") }}
                    </div>
                  </div>

                  <!-- Interest -->
                  <div
                    class="grid grid-cols-[120px_1fr] items-start gap-3 sm:grid-cols-[180px_1fr]">
                    <InfoItem
                      icon="ri-poker-hearts-line"
                      :label="$t('about.interest') + ' :'"
                      color="text-color items-center"
                      item-class="center" />

                    <div class="text-secondary text-xs leading-5">
                      Backend Development, Web Development, Problem Solving,
                      Continuous Learning
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="flex flex-wrap gap-5 items-center hero-btn">
            <NuxtLinkLocale
              to="/project"
              class="flex gap-2 text-white bg-primary rounded-lg text-xs px-4 py-3 shadow-xl backdrop-blur-md hover:bg-[#1d4ed8] hover:-translate-y-0.5 hover:shadow-xl active:scale-95 transition-all duration-300 ease-in-out cursor-pointer">
              <span>{{ t("hero.view_my_projects") }}</span>
              <i class="ri-arrow-right-line"></i>
            </NuxtLinkLocale>
            <a
              :href="resume"
              target="_blank"
              rel="noopener noreferrer"
              class="flex gap-2 text-white rounded-xs text-xs px-3 py-3 bg-slate-800/90 backdrop-blur-md border border-slate-700 rounded-lg px-4 py-3 shadow-xl hover:bg-[#1d4ed8] hover:-translate-y-0.5 hover:shadow-xl active:scale-95 transition-all duration-300 ease-in-out cursor-pointer">
              <span>{{ t("hero.view_my_cv") }}</span>
              <i class="ri-profile-line"></i>
            </a>
          </div>
        </div>
      </div>
      <!-- right -->

      <div
        class="rounded-2xl border border-color bg-surface right-full-container w-full small-screen right-container hidden">
        <div class="flex flex-col gap-5 justify-between items-center">
          <div class="right-container hidden">
            <div class="relative">
              <!-- Circle Border -->
              <div
                class="rounded-full p-1 bg-gradient-to-br from-blue-500 via-blue-600 to-cyan-400 shadow-[0_0_40px_rgba(37,99,235,0.45)]">
                <div
                  class="rounded-full p-1 bg-slate-900 border-4 border-slate-900 overflow-hidden">
                  <img
                    :src="profile"
                    alt="Profile"
                    class="w-32 h-32 sm:w-40 sm:h-40 md:w-52 md:h-52 lg:w-50 lg:h-50 object-contain rounded-full" />
                </div>
              </div>
            </div>
          </div>

          <div class="flex w-full flex-col gap-1.5">
            <!-- Name -->
            <div
              class="grid grid-cols-[120px_1fr] items-center gap-3 sm:grid-cols-[180px_1fr]">
              <InfoItem
                icon="ri-user-line"
                :label="$t('name')"
                color="text-color" />

              <div class="text-secondary text-xs">
                {{ $t("about.name") }}
              </div>
            </div>

            <!-- Gmail -->
            <div
              class="grid grid-cols-[120px_1fr] items-center gap-3 sm:grid-cols-[180px_1fr]">
              <InfoItem
                icon="ri-mail-line"
                :label="$t('gmail')"
                color="text-color" />

              <div class="text-secondary text-xs break-all">
                Pannyphal1@gmail.com
              </div>
            </div>

            <!-- Location -->
            <div
              class="grid grid-cols-[120px_1fr] items-center gap-3 sm:grid-cols-[180px_1fr]">
              <InfoItem
                icon="ri-map-pin-line"
                :label="$t('location')"
                color="text-color" />

              <div class="text-secondary text-xs">
                {{ $t("about.address") }}
              </div>
            </div>

            <!-- Education -->
            <div
              class="grid grid-cols-[120px_1fr] items-center gap-3 sm:grid-cols-[180px_1fr]">
              <InfoItem
                icon="ri-graduation-cap-line"
                :label="$t('education')"
                color="text-color" />

              <div class="text-secondary text-xs">
                {{ $t("about.setec_institute") }}
              </div>
            </div>

            <!-- Degree -->
            <div
              class="grid grid-cols-[120px_1fr] items-center gap-3 sm:grid-cols-[180px_1fr]">
              <InfoItem
                icon="ri-school-line"
                :label="$t('degree')"
                color="text-color" />

              <div class="text-secondary text-xs">
                {{ $t("about.bachelor’s_degree") }}
              </div>
            </div>

            <!-- Interest -->
            <div
              class="grid grid-cols-[120px_1fr] items-start gap-3 sm:grid-cols-[180px_1fr]">
              <InfoItem
                icon="ri-poker-hearts-line"
                :label="$t('about.interest') + ' :'"
                color="text-color items-start" />

              <div class="text-secondary text-xs leading-5">
                Backend Development, Web Development, Problem Solving,
                Continuous Learning
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
import profile from "~/assets/images/profile.jpg";
import resume from "~/assets/files/resume.pdf";
const { t, locale, messages } = useI18n();
const copied = ref(false);

const copyGmail = async () => {
  const email = "Pannyphal1@gmail.com";

  try {
    // Try modern Clipboard API first
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(email);
    } else {
      // Fallback for HTTP / mobile development
      const textarea = document.createElement("textarea");

      textarea.value = email;
      textarea.style.position = "fixed";
      textarea.style.left = "-9999px";
      textarea.style.top = "0";
      textarea.setAttribute("readonly", "");

      document.body.appendChild(textarea);

      textarea.focus();
      textarea.select();
      textarea.setSelectionRange(0, textarea.value.length);

      const successful = document.execCommand("copy");

      document.body.removeChild(textarea);

      if (!successful) {
        throw new Error("Copy failed");
      }
    }

    // Change icon after successful copy
    copied.value = true;

    setTimeout(() => {
      copied.value = false;
    }, 2000);
  } catch (error) {
    console.error("Failed to copy email:", error);
  }
};
</script>
<style scoped>
.right-full-container {
  padding: 20px !important;
}

/* Mobile */
@media (max-width: 389px) {
  .right-container {
    display: none;
  }
  .left-container {
    display: flex;
  }
  .container {
    display: flex;
    justify-content: center;
  }
  .hero-btn {
    justify-content: center;
    gap: 20px;
    width: 100%;
  }
}

/* Large Mobile */
@media (min-width: 390px) and (max-width: 429px) {
  .right-container {
    display: none;
  }
  .left-container {
    display: flex;
  }
  .container {
    display: flex;
    justify-content: center;
  }
  .hero-btn {
    justify-content: center;
    gap: 20px;
    width: 100%;
  }
}

/* Tablet */
@media (min-width: 430px) and (max-width: 767px) {
  .right-container {
    display: none;
  }
  .left-container {
    display: flex;
  }
  .container {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }
  .hero-btn {
    justify-content: center;
    gap: 20px;
    width: 100%;
  }
}

/* Tablet Landscape */
@media (min-width: 768px) and (max-width: 1023px) {
  .menu_container {
    display: none;
  }
  .left-container {
    display: flex;
  }

  .container {
    display: flex;
    justify-content: center;
  }
  .hero-btn {
    justify-content: center;
    gap: 20px;
    width: 100%;
  }
}

/* Laptop */
@media (min-width: 1024px) and (max-width: 1439px) {
  .right-container {
    display: flex;
  }
  .left-container {
    display: none;
  }
  .container {
    display: flex;
    justify-content: space-between;
  }
  .hero-btn {
    justify-content: space-between;
    gap: 20px;
    width: fit-content;
  }
  .container-full {
    display: grid;
    grid-template-columns: 3fr 2fr;
    gap: 1rem;
    width: 100%;
  }
}

/* Desktop */
@media (min-width: 1440px) {
  .right-container {
    display: flex;
  }
  .left-container {
    display: none;
  }
  .container {
    display: flex;
    justify-content: space-between;
  }
  .hero-btn {
    justify-content: space-between;
    gap: 20px;
    width: fit-content;
  }
  .container-full {
    display: grid;
    grid-template-columns: 3fr 2fr;
    gap: 1rem;
    width: 100%;
  }
}
</style>
