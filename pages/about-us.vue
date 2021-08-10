<template>
  <div>
    <div class="bg-hero">
      <div class="bg-text container">
        <h2>
          About us
        </h2>
      </div>
    </div>
    <section class="container who-container">
      <div class="row">
        <div class="col-12 col-lg-6 who-we-are">
          <div class="content">
            <h2>Carmtek at a glance</h2>
            <p>
              We're a leading provider of IoT/automation solutions to industrial operations and applications that enable an agile approach to development and innovations that create effective return on investment. We are an end-to-end company with a proven track record in building scalable infrastructure for managing automation devices at massive scale.
            </p>
            <p>
              We help our clients to transform into digital businesses by unlocking the value of their physical assets and remote operations. We are committed to greatly reduce the effort and complexity that companies go through in integrating IoT/automation solutions into their operations.
            </p>
          </div>
        </div>
        <div class="col-12 col-lg-6 who-we-are" />
      </div>
    </section>
    <section class="container about-container">
      <div class="row">
        <div class="col-12 col-lg-6 about-item order-6 order-sm-2" />
        <div class="col-12 col-lg-6 about-item order-2 order-sm-6">
          <div class="content">
            <h2 class="mb-4">
              Our commitment
            </h2>
            <p>
              We are committed to providing complete end-to-end SCADA, Telemetry/IoT solutions with specilized systems engineered for effective operation reliability and risk detection and management. We also provide support and help you make the most of our automation solutions.
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
  components: { Footer }
}
</script>

<style lang="scss" scoped>
.bg-hero {
  background: linear-gradient(rgba(21, 37, 81, 0.48), rgba(21, 37, 81, 0.48)), url('/img/carmtek-about-header-img.jpg');
  background-position: center;
  height: 391px;
}
.who-container {
  padding: 80px 0px;
  .content {
    h2 {
      width: 307px;
      margin-bottom: 10px;
    }
  }
}
.who-we-are {
  height: 96vh;
  h2 {
    color: var(--base-color);
  }
}
.who-we-are:last-child {
  background: url('/img/carmtek-about-2.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 40vh;
}

.about-container {
  margin-bottom: 70px;
}

.about-item {
  height: 40vh;
  background: url('/img/carmtek-about-3.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
.about-item:last-child {
  height: 56vh;
  background: var(--base-color);
  display: flex;
  align-items: center;
  p {
    color: #fff;
  }
   h2 {
      color: #fff;
    }
}

@media (min-width: 1000px) {
  .bg-hero {
    height: 75vh;
  }
  .who-container {
    h2 {
      width: 100%;
    }
  }
  .who-we-are {
    height: 80vh;
    .content {
      margin-top: 10px;
      p {
        margin-top: 30px;
      }
    }
  }
  .who-we-are:last-child {
    height: 80vh;
  }
  .about-item {
    height: 80vh;
  }
  .about-item:last-child {
    height: 80vh;
    .content {
      padding: 30px;
    }
  }
}
</style>
