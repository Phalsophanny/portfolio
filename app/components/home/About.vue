<template>
  <section class="app-container">
    <div
      class="rounded-2xl border border-color bg-surface p-4 w-full big-screen">
      <div class="grid grid-cols-2 gap-10">
        <div class="flex flex-col gap-5 justify-between">
          <SectionTitle icon="ri-user-fill" label="About Me"></SectionTitle>
          <div class="text-xs text-secondary leading-[20px]">
            I am a passionate Backend Developer with hands-on experience in
            building web applications using Java and Spring Boot. I enjoy
            solving real-world problems, creating efficient APIs, and designing
            robust database systems. I am currently a final year student of
            Management Information Systems at SETEC Institute. I love learning
            new technologies and continuously improving my skills.
          </div>
        </div>
        <div class="border-l border-color flex">
          <div class="w-full ml-10 flex justify-between flex-col">
            <InfoItem icon="ri-user-line" label="Name:"></InfoItem>
            <InfoItem icon="ri-mail-line" label="Gmail:"></InfoItem>
            <InfoItem icon="ri-map-pin-line" label="Location:"></InfoItem>
            <InfoItem
              icon="ri-graduation-cap-line"
              label="Education:"></InfoItem>
            <InfoItem icon="ri-school-line" label="Degree:"></InfoItem>
          </div>
          <div class="w-full flex justify-between flex-col">
            <div class="text-secondary text-xs">Phal Sophanny</div>
            <div class="text-secondary text-xs">Pannyphal1@gmail.com</div>
            <div class="text-secondary text-xs">Phnom Penh, Cambodia</div>
            <div class="text-secondary text-xs">SETEC Institute</div>
            <div class="text-secondary text-xs">Bachelor’s Degree</div>
          </div>
        </div>
      </div>
    </div>
    <div class="flex flex-col gap-5 justify-between">
      <div
        class="rounded-2xl border border-color bg-surface p-4 w-full small-screen">
        <div class="flex flex-col gap-5 justify-between">
          <SectionTitle icon="ri-user-fill" label="About Me"></SectionTitle>
          <div class="text-xs text-secondary leading-[20px]">
            I am a passionate Backend Developer with hands-on experience in
            building web applications using Java and Spring Boot. I enjoy
            solving real-world problems, creating efficient APIs, and designing
            robust database systems. I am currently a final year student of
            Management Information Systems at SETEC Institute. I love learning
            new technologies and continuously improving my skills.
          </div>
        </div>
      </div>
      <div
        class="rounded-2xl border border-color bg-surface p-4 w-full small-screen">
        <div class="flex flex-col gap-5 justify-between w-full">
          <SectionTitle
            icon="ri-info-card-line"
            label="Information"></SectionTitle>
          <div class="flex">
            <div class="w-full flex gap-3.5 flex-col">
              <InfoItem icon="ri-user-line" label="Name:"></InfoItem>
              <InfoItem icon="ri-mail-line" label="Gmail:"></InfoItem>
              <InfoItem icon="ri-map-pin-line" label="Location:"></InfoItem>
              <InfoItem
                icon="ri-graduation-cap-line"
                label="Education:"></InfoItem>
              <InfoItem icon="ri-school-line" label="Degree:"></InfoItem>
            </div>
            <div class="w-full flex justify-between flex-col">
              <div class="text-secondary text-xs">Phal Sophanny</div>
              <div class="text-secondary text-xs">Pannyphal1@gmail.com</div>
              <div class="text-secondary text-xs">Phnom Penh, Cambodia</div>
              <div class="text-secondary text-xs">SETEC Institute</div>
              <div class="text-secondary text-xs">Bachelor’s Degree</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped>
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
@media (min-width: 768px) and (max-width: 1023px) {
  .big-screen {
    display: none;
  }
  .small-screen {
    display: flex;
  }
}

/* Laptop */
@media (min-width: 1024px) and (max-width: 1439px) {
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
