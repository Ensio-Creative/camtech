<template>
  <div>
    <div
      class="bg-hero"
      :style="{backgroundImage:'linear-gradient(rgba(0, 0, 0, 0), rgba(21, 37, 81, 0.48)), url(' + `/img/${findService.headerImg}` + ')'}"
    >
      <div class="bg-text container">
        <h5>Our Services</h5>
        <h2>
          {{ findService.title }}
        </h2>
      </div>
    </div>
    <section class="services-description">
      <div class="container mt-4">
        <article>
          <nuxt-content :document="texts" />
        </article>
      </div>
    </section>

    <section class="other-services container mt-5">
      <h2>Discover More</h2>
      <div class="row mt-5">
        <div
          v-for="service in otherService"
          :key="service.title"
          class="col-12 col-md-4"
        >
          <NuxtLink
            :to="`/services/${service.id}`"
            class="other-services-items"
          >
            <div class="img-thumb" :style="{backgroundImage:'url(' + `/img/${service.imgThumbnail}` + ')'}" />
            <h5>{{ service.title }}</h5>
          </NuxtLink>
        </div>
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
      currentPage: this.$route.params.subServices,
      texts: ''
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
        this.getText()
      }
    }
  },
  methods: {
    filterOtherServices () {
      const result = this.services.filter(service => service.id !== this.$route.params.subServices)
      this.otherService = result.slice(0, 3)
    },
    async getText () {
      this.texts = await this.$content('services', this.$route.params.subServices).fetch()
    }
  }
}
</script>

<style lang="scss" scoped>
.bg-hero {
  height: 319px;
  background-position: top;
  background-repeat: no-repeat;
  background-size: cover;
}

@media (min-width: 1000px) {
  .bg-hero {
    height: 79vh;
  }
}
</style>
