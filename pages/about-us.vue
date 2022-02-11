<template>
  <div>
    <div class="bg-hero">
      <div class="bg-text container">
        <h4>About us</h4>
        <h2>
          Who we are
        </h2>
      </div>
    </div>
    <section class="container who-container">
      <div class="who-we-are">
        <div class="content">
          <div class="red-line" />
          <h2>Explore CARMTEK</h2>
          <p>
            We're a leading provider of Cloud Based SCADA and IoT/automation solutions to industrial operations and applications that enable an agile approach to development and innovations that create effective return on investment. We are an end-to-end company with a proven track record in building scalable infrastructure for managing automation devices at massive scale.
          </p>
          <p>
            We help our clients to transform into digital businesses by unlocking the value of their physical assets and remote operations. We are committed to greatly reduce the effort and complexity that companies go through in integrating IoT/automation solutions into their operations.
          </p>
        </div>
      </div>
    </section>
    <section class="container-fluid about-container">
      <div class="row">
        <div class="col-12 col-lg-6 about-item order-6 order-sm-2" />
        <div class="col-12 col-lg-6 about-item order-2 order-sm-6">
          <div class="content">
            <div class="red-line" />
            <h2 class="mb-4">
              Our commitment
            </h2>
            <p>
              We are committed to providing complete end-to-end Cloud Based SCADA, Telemetry/IoT solutions with specialized systems engineered for effective operation reliability and risk detection and management. We also provide support and help you make the most of our automation solutions.
            </p>
          </div>
        </div>
      </div>
    </section>

    <Footer />
  </div>
</template>

<script>
import Footer from '~/components/common/Footer.vue'
export default {
  name: 'About',
  components: { Footer },
  head () {
    return {
      title: 'About us - CARMTEK Solutions',
      meta: [
        {
          hid: 'About us',
          name: 'About us CARMTEK Solutions',
          content: 'About us'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.bg-hero {
  background: linear-gradient(rgba(14, 30, 67, 0.7), rgba(14, 30, 67, 0.7)), url('/img/carmtek-about-us.png');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 391px;
}

@media (min-width: 1000px) {
  .bg-hero {
    height: 75vh;
  }
}
</style>
