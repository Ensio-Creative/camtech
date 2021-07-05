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
        <div class="service-img" :style="{backgroundImage:'url(' + `/img/${findService.subImg}` + ')'}" />
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
              <div class="services-thumbnail" :style="{backgroundImage:'url(' + `/img/${service.img}` + ')'}" />
              <div class="card-body">
                <p class="card-title">
                  {{ service.description }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="other-services container-fluid mt-5">
      <h2>Other services</h2>
      <div class="row mt-5">
        <NuxtLink
          v-for="service in otherService"
          :key="service.title"
          :to="`/services/${service.id}`"
          class="col-12 col-md-4 other-services-items"
          :style="{backgroundImage:'url(' + `/img/${service.img}` + ')'}"
        >
          <h4>{{ service.title }}</h4>
        </NuxtLink>
      </div>
    </section>

    <Footer />
  </div>
</template>

<script>
import Footer from '@/components/common/Footer.vue'
import services from '~/static/data/services.js'
export default {
  name: 'SubServices',
  components: { Footer },
  data () {
    return {
      services,
      otherService: [],
      currentPage: this.$route.params.subServices
    }
  },
  computed: {
    findService () {
      const result = this.services.find(service => service.id === this.$route.params.subServices)
      return result
    }
  },
  watch: {
    currentPage: {
      immediate: true,
      handler () {
        this.filterOtherServices()
      }
    }
  },
  methods: {
    filterOtherServices () {
      const result = this.services.filter(service => service.id !== this.$route.params.subServices)
      this.otherService = result.slice(0, 3)
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
    h2 {
      color: var(--base-color);
      text-align: center;
    }
    .other-services-items {
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      color: #fff;
      height: 50vh;
      display: flex;
      align-items: flex-end;
      h4 {
        font-family: var(--header-font);
        padding-bottom: 20px;
      }
    }
  }

@media (min-width: 1000px) {
  .services-description {
    .container {
      padding: 88px 0px 10px 0px;
      position: relative;
      top: -90px;
      background-color: #fff;

      p {
        padding: 0px 90px 0px 90px;
      }
    }

    .service-img {
      margin-top: 75px;
      height: 60vh;
    }
  }
}
</style>
