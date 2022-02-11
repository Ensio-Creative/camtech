<template>
  <div>
    <div class="bg-hero">
      <div class="bg-text container">
        <h4>Our Services</h4>
        <h2>
          Cloud Based SCADA/IoT Services
        </h2>
      </div>
    </div>

    <section class="our-services">
      <div class="container ">
        <div class="our-services-text">
          <div class="red-line" />
          <h2>What we do</h2>
          <p>
            We provide Cloud Based SCADA (Supervisory Control and Data Acquisition) communication technology services for remote control, monitor, store and display accross different sectors which include Oil & Gas, Power Generation and Distribution, Mining, Manufacturing and Water Systems. With years of experience in industrial automation and our team of experienced engineers, we provide top notch services with best of industry standards.
          </p>
        </div>
      </div>
    </section>
    <section class="service-cards">
      <div class="container">
        <div class="row row-cols-1 row-cols-md-3 g-4">
          <NuxtLink
            v-for="service in services"
            :key="service.title"
            :to="`/services/${service.id}`"
            class="col my-3"
          >
            <div class="card">
              <div class="services-thumbnail" :style="{backgroundImage:'linear-gradient(360deg, rgba(14, 30, 67, 0.89) 24.94%, rgba(91, 101, 125, 0.617581) 40.39%, rgba(228, 229, 230, 0.13) 68.03%), url(' + `/img/${service.imgThumbnail}` + ')'}">
                <h5 class="card-title">
                  {{ service.title }}
                </h5>
              </div>
            </div>
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
  name: 'Services',
  components: { Footer },
  data () {
    return {
      services
    }
  },
  head () {
    return {
      title: 'Services - CARMTEK Solutions',
      meta: [
        {
          hid: 'Services',
          name: 'SERVICES CARMTEK Solutions',
          content: 'Services'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.bg-hero {
  background: linear-gradient(rgba(14, 30, 67, 0.7), rgba(14, 30, 67, 0.7)), url('/img/carmtek-industrial-SCADA-telemetry-IoT-solutions-header-img.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 391px;
  background-position: top;
}
@media (min-width: 1000px) {
  .bg-hero {
    height: 79vh;
    .bg-text {
      h2 {
        width: 550px;
      }
    }
  }
}
</style>
