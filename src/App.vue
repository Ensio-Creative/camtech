<template>
  <TheHeader
      @sidenavToggle="displaySidenav = !displaySidenav"
    />
    <TheSidenav
      :show="displaySidenav"
      @close="displaySidenav = false"
    />
  <router-view/>
</template>

<script>
import TheHeader from '@/components/navigation/TheHeader'
import TheSidenav from '@/components/navigation/TheSidenav.vue'
export default {
  components: { TheHeader, TheSidenav },
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
</style>
