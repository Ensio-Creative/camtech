<template>
  <div class="home">
    <div class="bg-hero">
      <div class="bg-text">
        <div class="container">
          <h5>
            Wireless <strong>SCADA/IoT and automation
            solutions</strong> for industries.
          </h5>
          <p>The oil and gas industry, power sector and
              government agencies.
          </p>
          <button
            to="/"
            class="btn-base"
          >
            BROWSE SOLUTIONS
          </button>
        </div>
      </div>
    </div>
    <section class="what-we-do">
      <div class="container">
        <div class="row">
          <div class="col-12 col-lg-4">
            <h6 class="tiny-title">WHAT WE DO</h6>
            <h2 class="our-sevices">Our Services</h2>
            <p>
              Carmtek Systems is a leading provider in SCADA (Supervisory Control and Data Acquisition) communication technologies.
            </p>
            <p>
              With over 20 years of experience in providing industrial remote monitoring-and-control solutions that range from the Oil & Gas to Water industry, our experience in the field ensures that customer expectations are met with reliable products and quality services.
            </p>
          </div>
          <div class="col-12 col-lg-8 card-services">
            <div class="row">
              <div 
                v-for="serve in services"
                :key="serve"
                class="col-12 col-md-6 col-lg-4"
              >
                <div class="card services">
                  <div class="card-body">
                    <span>{{ serve }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="container-fluid our-solutions">
      <div class="row">
        <div class="col-12 col-md-6 solutions-first-half">
          <div class="container">
            <h2 class="solutions-title">
              Our Solutions
            </h2>
            <p class="solution-text">
              Specializing in industrial wireless SCADA and telemetry solutions, Carmel Systems provides various Class I DIV 2 systems for Oil & Gas, Environmental, Water, Mining and manufacturing applications.
            </p>
            <button
              to="/"
              class="btn-base"
            >
              SEE ALL <img src="img/Vector-arrow.svg" alt="">
            </button>

          </div>
        </div>
        <div class="col-12 col-md-6 solution-second-half"></div>
      </div>
    </section>
    
    <Forward />
    <Footer />
  </div>
</template>

<script>
import Footer from '../components/common/Footer.vue'
import Forward from '../components/common/Forward.vue'
export default {
  components: { Footer, Forward },
  name: 'Home',
  setup () {
    const services = [
      'Panel Fabrication',
      'Maintenance and Troubleshooting',
      'Field Installation',
      'SCADA Communications Troubleshooting',
      'Systems and Communication Design',
      'RTU/EFM Programming and Configuration',
      'SCADA Hosting',
      'RF Path Study/Analysis',
      'SCADALink Airtime Provisioning'
    ]
      return {
        services
      }
    }
}
</script>

<style lang="scss">
.bg-hero {
  display: flex;
  background: linear-gradient(rgba(21, 37, 81, 0.48), rgba(21, 37, 81, 0.48)), url('/img/Front-Page-picture.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 60vh;

  .bg-text {
    color: #fff;
    align-self: center;
    .btn-base {
      width: 175px;
      height: 45px;
      background-color: var(--base-color);
      color: #fff;
      font-size: 16px;
      font-weight: bold;
      border: 0px;
    }
  }
}
.what-we-do {
  padding-top: 80px;
  padding-bottom: 80px;
  background-color: var(--base-gray);

  .card-services {
    margin-top: 20px;
  }
  .card {
    border-radius: 0px;
    border: 0px;
  }
  .services{
    background-color: #fff;
    border-left: 1px solid var(--base-color);
    margin-bottom: 10px;
  }
}

.solutions-first-half{
  color: #fff;
  background-color: var(--base-color-dark);
  height: 50vh;
  display: flex;

  .container {
    align-self: center;
  }
}
.solution-second-half {
  background: linear-gradient(rgba(21, 37, 81, 0.48), rgba(21, 37, 81, 0.48)), url('/img/Front-Page-picture.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 50vh;
}
.forward-thinking {
  margin-top: 40px;
  margin-bottom: 40px;

  .companies-img {
    text-align: center;
    margin-top: 10px;
  }
  .companies-img img {
    width: 90px;
    padding: 10px;
  }
  .interested{
    color: #fff;
    margin-top: 40px;
    padding: 50px;
    background: linear-gradient(rgba(21, 37, 81, 0.48), rgba(21, 37, 81, 0.48)), url('/img/Front-Page-picture.png');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;

    button {
      margin-top: 20px;
      margin-right: 20px;
    }
  }
}
</style>