<template>
  <div>
    <div class="bg-hero">
      <div class="bg-text container">
        <h1>
          Services
        </h1>
      </div>
    </div>

    <section class="our-services">
      <div class="container our-service-text">
        <p>
          Carmtek Systems is a leading provider in SCADA (Supervisory Control and Data Acquisition) communication technologies. With over 20 years of experience in providing industrial remote monitoring-and-control solutions that range from the Oil & Gas to Water industry, our experience in the field ensures that customer expectations are met with reliable products and quality services.
        </p>
      </div>
    </section>
    <section class="service-cards">
      <div class="container">
        <div class="row row-cols-1 row-cols-md-3 g-4">
          <router-link
            v-for="service in services"
            :key="service.title"
            :to="`/services/${service.id}`"
            class="col my-3"
          >
            <div class="card">
              <div class="services-thumbnail" :style="{backgroundImage:'url(' + `/img/${service.img}` + ')'}"></div>
              <div class="card-body">
                <h5 class="card-title">{{ service.title }}</h5>
              </div>
            </div>
          </router-link>
      </div>
      </div>
    </section>
    <Footer />
  </div>
</template>

<script>
import services from '@/data/services.js'
import Footer from '../components/common/Footer.vue'
export default {
  name: 'Services',
  components: { Footer },
  setup () {
    

    return {
      services
    }
  }
}
</script>

<style lang="scss" scoped>
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
  }
  .card-body{
    padding: 0px;
    height: 60px;
    display: flex;
    padding: 5px;
    
    span {
      align-self: center;
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
