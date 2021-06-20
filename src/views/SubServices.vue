<template>
  <div>
    <div class="bg-hero">
      <div class="bg-text container">
        <h2>
          {{ findService.title }}
        </h2>
      </div>
    </div>
    
    <section class="services-info container">
      <div class="row">
        <div class="col-12 col-md-4">
          <h4>{{ findService.subTitle }}</h4>
        </div>
        <div class="col-12 col-md-8">
          <p>{{ findService.description }}</p>
          <div class="service-thumbnail" :style="{backgroundImage:'url(' + `/img/${findService.subImg}` + ')'}"></div>
        </div>
      </div>
    </section>

    <Footer />
  </div>
</template>

<script>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import services from '@/data/services.js'
import Footer from '../components/common/Footer.vue'
export default {
  components: { Footer },
  setup () {
    const route = useRoute()
    const findService = computed(() => services.find(service => service.id === route.params.slug))
    return {
      findService
    }
  }
}
</script>

<style lang="scss" scoped>
.services-info {
  padding: 40px 0px;

  .service-thumbnail {
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 216px;
  }
}
</style>
