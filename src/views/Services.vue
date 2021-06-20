<template>
  <div>
    <div class="bg-hero">
      <div class="bg-text container">
        <h2>
          Our Services
        </h2>
      </div>
    </div>

    <section class="our-services">
      <div class="container our-service-text">
        <h2>Our Services Overview</h2>
        <p>
          Carmtek Systems is a leading provider in SCADA (Supervisory Control and Data Acquisition) communication technologies. With over 20 years of experience in providing industrial remote monitoring-and-control solutions that range from the Oil & Gas to Water industry, our experience in the field ensures that customer expectations are met with reliable products and quality services.
        </p>
      </div>
    </section>
    <section class="service-cards">
      <div class="container">
        <div class="row">
          <router-link
            v-for="serve in services"
            :key="serve.title"
            :to="`/services/${serve.id}`"
            class="col-12 col-md-6 col-lg-4"
          >
            <div class="card services">
              <div class="card-body">
                <span>{{ serve.title }}</span>
              </div>
            </div>
          </router-link>
        </div>
      </div>
    </section>
    <section class="bg-hero-bottom"></section>
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
  color: #fff;
  background-color: var(--base-dark);
  padding: 40px 0px;
  text-align: center;
}
.service-cards {
  background-color: var(--base-gray);
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
    height: 52px;
    display: flex;
    padding: 10px;
    
    span {
      align-self: center;
    }
  }
  .services{
    background-color: var(--base-dark-gray);
    border-left: 2px solid var(--base-color);
    margin-bottom: 10px;
  }
}
.bg-hero-bottom {
  background: linear-gradient(rgba(21, 37, 81, 0.48), rgba(21, 37, 81, 0.48)), url('/img/Front-Page-picture.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 248px;
  margin-bottom: 40px;
}

@media (min-width: 1000px) {
  .our-services {
    padding: 112px 0px;
    p {
      width: 795px;
      margin: auto;
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
