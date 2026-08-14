<template>
  <section class="app-container">
    <div class="container items-center">
      <!-- left -->
      <div class="max-w-md">
        <div class="flex flex-col gap-4">
          <div
            class="flex gap-2 items-center w-fit px-2 py-1 rounded-xl bg-primary/[0.23] text-xs text-primary font-semibold">
            <span
              class="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
            <div>{{ t("hero.position") }}</div>
          </div>

          <div class="text-4xl font-semibold">
            <span>{{ t("hero.hi") }}</span>
            <span class="text-primary">{{ t("hero.name") }}</span>
          </div>
          <div class="text-lg">
            {{ t("hero.position") }} | Java | Spring Boot
          </div>
          <div class="text-xs text-secondary leading-[20px]">
            {{ t("hero.description") }}
          </div>
          <!-- profile mobile -->
          <div class="w-full flex justify-center left-container hidden py-10">
            <div class="relative w-fit flex">
              <!-- Circle Border -->
              <div
                class="rounded-full p-1 bg-gradient-to-br from-blue-500 via-blue-600 to-cyan-400 shadow-[0_0_40px_rgba(37,99,235,0.45)]">
                <div
                  class="rounded-full p-1 bg-slate-900 border-4 border-slate-900 overflow-hidden">
                  <img
                    :src="profile"
                    alt="Profile"
                    class="w-52 h-52 sm:w-60 sm:h-60 md:w-72 md:h-72 lg:w-80 lg:h-80 object-contain rounded-full" />
                </div>
              </div>

              <!-- Status Card -->
              <div
                class="absolute bottom-4 right-0 translate-x-1/4 bg-slate-800/90 backdrop-blur-md border border-slate-700 rounded-lg px-4 py-3 shadow-xl">
                <div class="flex items-center gap-3">
                  <span
                    class="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  <div>
                    <p class="text-gray-400 text-xs">
                      {{ t("hero.available_for") }}
                    </p>
                    <p class="text-white text-sm font-medium">
                      {{ t("hero.opportunities") }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="flex flex-wrap hero-btn">
            <div class="flex flex-wrap gap-5 items-center w-fit hero-btn">
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
            <div class="flex gap-3 items-center">
              <div class="relative">
                <a
                  href="https://github.com/Phalsophanny"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="flex gap-2 text-white rounded-xs text-xs px-3 py-3 bg-slate-800/90 backdrop-blur-md border border-slate-700 rounded-full w-[42px] h-[42px] shadow-xl items-center hover:bg-[#1d4ed8] hover:-translate-y-0.5 hover:shadow-xl active:scale-95 transition-all duration-300 ease-in-out cursor-pointer">
                  <i class="ri-github-fill text-2xl absolute top-1 right-2"></i>
                </a>
              </div>

              <div class="relative">
                <button
                  type="button"
                  @click="copyGmail"
                  class="relative flex h-[42px] w-[42px] items-center justify-center rounded-full border border-slate-700 bg-slate-800/90 text-white shadow-xl backdrop-blur-md transition-all duration-300 ease-in-out touch-manipulation active:scale-90 active:bg-blue-700 md:hover:-translate-y-0.5 md:hover:bg-[#1d4ed8] md:hover:shadow-xl">
                  <Transition
                    mode="out-in"
                    enter-active-class="transition-all duration-300 ease-out"
                    leave-active-class="transition-all duration-200 ease-in"
                    enter-from-class="scale-50 rotate-90 opacity-0"
                    enter-to-class="scale-100 rotate-0 opacity-100"
                    leave-from-class="scale-100 rotate-0 opacity-100"
                    leave-to-class="scale-50 -rotate-90 opacity-0">
                    <i
                      v-if="!copied"
                      key="mail"
                      class="ri-mail-line text-xl text-white" />

                    <i
                      v-else
                      key="check"
                      class="ri-check-line text-xl text-green-400" />
                  </Transition>
                </button>
              </div>
            </div>
          </div>
          <div class="flex justify-between">
            <div class="flex flex-col items-center justify-center">
              <div class="text-lg font-semibold text-primary">2+</div>
              <div class="text-xs text-secondary whitespace-nowrap">
                {{ t("hero.years_learning") }}
              </div>
            </div>
            <div class="flex flex-col items-center justify-center">
              <div class="text-lg font-semibold text-primary">10+</div>
              <div class="text-xs text-secondary">
                {{ t("hero.projects") }}
              </div>
            </div>
            <div class="flex flex-col items-center justify-center">
              <div class="text-lg font-semibold text-primary">5+</div>
              <div class="text-xs text-secondary">
                {{ t("hero.technologies") }}
              </div>
            </div>
            <div class="flex flex-col items-center justify-center">
              <div class="text-lg font-semibold text-primary">100%</div>
              <div class="text-xs text-secondary">
                {{ t("hero.dedication") }}
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- right -->
      <div class="right-container hidden">
        <div class="relative w-fit pr-[50px]">
          <!-- Circle Border -->
          <div
            class="rounded-full p-1 bg-gradient-to-br from-blue-500 via-blue-600 to-cyan-400 shadow-[0_0_40px_rgba(37,99,235,0.45)]">
            <div
              class="rounded-full p-1 bg-slate-900 border-4 border-slate-900 overflow-hidden">
              <img
                :src="profile"
                alt="Profile"
                class="w-52 h-52 sm:w-60 sm:h-60 md:w-72 md:h-72 lg:w-80 lg:h-80 object-contain rounded-full" />
            </div>
          </div>

          <!-- Status Card -->
          <div
            class="absolute bottom-4 right-9 translate-x-1/4 bg-slate-800/90 backdrop-blur-md border border-slate-700 rounded-lg px-4 py-3 shadow-xl">
            <div class="flex items-center gap-3">
              <span
                class="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
              <div>
                <p class="text-gray-400 text-xs">
                  {{ t("hero.available_for") }}
                </p>
                <p class="text-white text-sm font-medium">
                  {{ t("hero.opportunities") }}
                </p>
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
    flex-wrap: wrap;
  }
  .hero-btn {
    justify-content: center;
    gap: 20px;
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
    flex-wrap: wrap;
  }
  .hero-btn {
    justify-content: center;
    gap: 20px;
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
    flex-wrap: wrap;
  }
  .hero-btn {
    justify-content: center;
    gap: 20px;
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
    flex-wrap: wrap;
  }
  .hero-btn {
    justify-content: space-between;
    gap: 20px;
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
    flex-wrap: wrap;
  }
  .hero-btn {
    justify-content: space-between;
    gap: 20px;
  }
}
</style>
