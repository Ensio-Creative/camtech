<template>
  <div>
    <div class="bg-hero">
      <div class="bg-text container">
        <h5>Services</h5>
        <h2>
          {{ findService.title }}
        </h2>
      </div>
    </div>
    <section class="services-description">
      <div class="container">
        <p>
          {{ findService.description }}
        </p>
        <p>
          {{ findService.subDescription }}
        </p>
        <div class="service-img" :style="{backgroundImage:'url(' + `/img/${findService.subImg}` + ')'}"></div>
      </div>
    </section>

  <section class="service-cards">
      <div class="container">
        <div class="row row-cols-1 row-cols-md-3 g-4 justify-content-center">
          <div
            v-for="service in findService.subServices"
            :key="service.title"
            class="col my-3"
          >
            <div class="card">
              <div class="services-thumbnail" :style="{backgroundImage:'url(' + `/img/${service.img}` + ')'}"></div>
              <div class="card-body">
                <p class="card-title">{{ service.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="other-services">
      <h4>Other services</h4>
      <div class="row">
        <div
          v-for="service in state.otherServices"
          :key="service.title"
          class="col-12 col-4 other-services-items"
          :style="{backgroundImage:'url(' + `/img/${service.img}` + ')'}"
        >
          <h3>{{ service.title }}</h3>
        </div>
      </div>
    </section>
    <Footer />
  </div>
</template>

<script>
import { computed, watch, reactive } from 'vue'
import { useRoute } from 'vue-router'
import services from '@/data/services.js'
import Footer from '../components/common/Footer.vue'
export default {
  components: { Footer },
  setup () {
    const state = reactive({
      otherServices: []
    })
    const route = useRoute()
    const findService = computed(() => services.find(service => service.id === route.params.slug))
    let adams
    const slicedServices = () => {
      const result = services.filter(services => services.title !== route.params.slug)
      state.otherServices = result.slice(0, 3)
      adams = services
      console.log('Fired')
      return state.otherServices
    }
      console.log(adams)

    watch (findService, () => {
      slicedServices()
    })

    return {
      findService,
      state
    }
  }
}
</script>

<style lang="scss" scoped>
.services-description {
  .container {
    padding: 20px 10px;
  }
  .service-img {
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 30vh;
  }
}

.services-thumbnail {
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    padding: 100px;
  }

  .card {
    border: 0px;
  }

  .other-services {
    h4 {
      color: var(--base-color);
      text-align: center;
    }
    .other-services-items {
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      padding: 100px;
    }
  }

@media (min-width: 1000px) {
  .services-description {
    
    .container {
      padding: 48px;
      position: relative;
      top: -90px;
      background-color: #fff;
    }

    .service-img {
      margin-top: 50px;
      height: 60vh;
    }
  }
}
</style>
