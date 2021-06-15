<template>
  <TheHeader />
  <router-view/>
</template>

<script>
import TheHeader from '@/components/navigation/TheHeader'
export default {
  components: { TheHeader },
  setup() {
    return {}
  },
}
</script>

<style lang="scss">
@import url('./assets/main.scss');
</style>
