<template>
  <TheHeader
    class="large-screens"
  />
  <TheSideNavToggle
    class="mobile-screens"
  />
  <router-view/>
</template>

<script>
import TheHeader from '@/components/navigation/TheHeader'
import TheSideNavToggle from '@/components/navigation/TheSideNavToggle.vue'
export default {
  components: { TheHeader, TheSideNavToggle },
  setup() {
    const displaySidenav = false
    return {
      displaySidenav
    }
  },
}
</script>

<style lang="scss">
@import url('./assets/main.scss');
.large-screens {
  display: none;
}
@media (min-width: 1000px) {
  .large-screens {
    display: block;
  }
  .mobile-screens {
    display: none;
  }
}
</style>
