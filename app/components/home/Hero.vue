<template>
  <section class="app-container">
    <div class="container">
      <!-- left -->
      <div>
        <div class="flex flex-col gap-4">
          <div
            class="flex gap-2 items-center w-fit px-2 py-1 rounded-xl bg-primary/[0.23] text-xs text-primary font-semibold">
            <div class="w-2 h-2 rounded-full bg-success"></div>
            <div>Backend Developer</div>
          </div>

          <div class="text-4xl font-semibold">
            <span>Hi, I’m </span>
            <span class="text-primary">Sophanny Phal</span>
          </div>
          <div class="text-lg">Backend Developer | Java | Spring Boot</div>
          <div class="text-xs text-secondary">
            I build secure, scalable, and high-performance backend applications
            and RESTful APIs.
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
                    <p class="text-gray-400 text-xs">Available for</p>
                    <p class="text-white text-sm font-medium">opportunities</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="flex flex-wrap hero-btn">
            <div class="flex flex-wrap gap-5 items-center w-fit hero-btn">
              <NuxtLink
                to="/project"
                class="flex gap-2 text-white bg-primary rounded-lg text-xs px-4 py-3 shadow-xl backdrop-blur-md hover:bg-[#1d4ed8] hover:-translate-y-0.5 hover:shadow-xl active:scale-95 transition-all duration-300 ease-in-out cursor-pointer">
                <span>View My Projects</span>
                <i class="ri-arrow-right-line"></i>
              </NuxtLink>
              <a
                :href="resume"
                target="_blank"
                rel="noopener noreferrer"
                class="flex gap-2 text-white rounded-xs text-xs px-3 py-3 bg-slate-800/90 backdrop-blur-md border border-slate-700 rounded-lg px-4 py-3 shadow-xl hover:bg-[#1d4ed8] hover:-translate-y-0.5 hover:shadow-xl active:scale-95 transition-all duration-300 ease-in-out cursor-pointer">
                <span>View My CV</span>
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
                  @click="copyGmail"
                  class="flex items-center justify-center text-white bg-slate-800/90 backdrop-blur-md border border-slate-700 rounded-full w-[42px] h-[42px] shadow-xl hover:bg-[#1d4ed8] hover:-translate-y-0.5 hover:shadow-xl active:scale-95 transition-all duration-300 ease-in-out cursor-pointer">
                  <Transition
                    enter-active-class="transition-all duration-300"
                    leave-active-class="transition-all duration-300 absolute"
                    enter-from-class="opacity-0 scale-50 rotate-90"
                    enter-to-class="opacity-100 scale-100 rotate-0"
                    leave-from-class="opacity-100 scale-100 rotate-0"
                    leave-to-class="opacity-0 scale-50 -rotate-90">
                    <i
                      :key="copied"
                      :class="
                        copied
                          ? 'ri-check-line text-green-400 text-xl'
                          : 'ri-mail-line text-xl'
                      " />
                  </Transition>
                </button>
              </div>
            </div>
          </div>
          <div class="flex gap-10 justify-between">
            <div class="flex flex-col items-center justify-center">
              <div class="text-lg font-semibold text-primary">2+</div>
              <div class="text-xs text-secondary whitespace-nowrap">
                Years Learning
              </div>
            </div>
            <div class="flex flex-col items-center justify-center">
              <div class="text-lg font-semibold text-primary">10+</div>
              <div class="text-xs text-secondary">Project</div>
            </div>
            <div class="flex flex-col items-center justify-center">
              <div class="text-lg font-semibold text-primary">5+</div>
              <div class="text-xs text-secondary">Techologies</div>
            </div>
            <div class="flex flex-col items-center justify-center">
              <div class="text-lg font-semibold text-primary">100%</div>
              <div class="text-xs text-secondary">Dedication</div>
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
                <p class="text-gray-400 text-xs">Available for</p>
                <p class="text-white text-sm font-medium">opportunities</p>
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
const gmail = "Pannyphal1@gmail.com";
const copied = ref(false);

const copyGmail = async () => {
  try {
    await navigator.clipboard.writeText(gmail);

    copied.value = true;

    setTimeout(() => {
      copied.value = false;
    }, 3000);
  } catch (err) {
    console.error("Failed to copy:", err);
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
