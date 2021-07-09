<template>
  <div>
    <div class="bg-hero">
      <div class="bg-text container">
        <h2>
          Services
        </h2>
      </div>
    </div>

    <section class="our-services">
      <div class="container our-service-text">
        <p>
          We provide SCADA (Supervisory Control and Data Acquisition) communication technology services for remote control, monitor, store and display accross different sectors which include Oil & Gas, Power Generation and Distribution, Mining, Manufacturing and Water Systems. With years of experience in industrial automation and our team of experienced engineers, we provide top notch services with best of industry standards.
        </p>
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
              <div class="services-thumbnail" :style="{backgroundImage:'url(' + `/img/${service.imgThumbnail}` + ')'}" />
              <div class="card-body">
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
  }
}
</script>

<style lang="scss" scoped>
.bg-hero {
  background: linear-gradient(rgba(21, 37, 81, 0.48), rgba(21, 37, 81, 0.48)), url('/img/carmtek-services-header-img.jpg');
  height: 79vh;
  background-position: bottom;
}
.our-services{
  color: #000;
  background-color: #fff;
  padding: 40px 0px;
  text-align: left;
}
.service-cards {
  background-color: var(--base-dark-gray);
  padding: 40px 0px;

  a{
    color: #000;
  }
  .card {
    border-radius: 0px;
    border: 0px;
    height: 49vh;
  }
  .card-body{
    height: 145px;
    display: flex;
    padding: 21px;
    h5 {
      align-self: center;
      font-family: var(--header-font);
    }
  }
  .services{
    background-color: #fff;
    border-left: 2px solid var(--base-color);
    margin-bottom: 10px;
  }
  .services-thumbnail {
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    padding: 100px;
    height: 40vh;
  }
}

@media (min-width: 1000px) {
  .our-services {
    padding: 112px 0px;
    p {
      width: 865px;
      margin: auto;
      padding-left: 65px;
      border-left: 2px solid var(--base-color);
    }
  }
  .service-cards {
    padding: 100px 0px;
  }
  .service-cards .services {
    margin-bottom: 20px;
  }
}
</style>
