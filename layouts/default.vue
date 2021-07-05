<template>
  <div>
    <TheHeader class="desktop" />
    <TheSideNavToggle class="mobile" />
    <Nuxt />
  </div>
</template>

<script>
import TheHeader from '~/components/navigation/TheHeader.vue'
import TheSideNavToggle from '~/components/navigation/TheSideNavToggle.vue'
export default {
  name: 'DefaultLayout',
  components: { TheSideNavToggle, TheHeader },
  data () {
    return {
      displaySidenav: false
    }
  }
}
</script>

<style>
.desktop {
  display: none;
}
@media (min-width: 1000px) {
  .mobile {
    display: none;
  }
  .desktop {
    display: block;
  }
}
</style>
