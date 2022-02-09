<template>
  <div class="home">
    <div class="bg-hero">
      <div class="bg-text container">
        <div class="red-line" />
        <h2>
          Industrial leader in
          Cloud Based SCADA/IoT and
          Automation Solutions
        </h2>
        <p>
          We specializes in end to end remote automation
          solutions, servicing the Oil & Gas, Power Generation and Distribution, Mining, Water and Manufacturing sectors.
        </p>
        <button
          class="btn-base"
          @click="$router.push('/solutions')"
        >
          Learn more <img src="/img/arrow-link.svg" alt="">
        </button>
      </div>
    </div>

    <section class="end-end">
      <div class="container">
        <div class="red-line" />
        <div class="end-text">
          <h2>End-to-End Cloud Based SCADA/IoT Services</h2>
          <p>We provide an End-to-End Cloud Based SCADA/IoT services with specialized systems that minimize downtime and maximize operation output. </p>
        </div>
      </div>
    </section>

    <section class="home-about">
      <div class="container">
        <div class="about-content">
          <div class="red-line" />
          <h5>About us</h5>
          <h3>Sure of what we do in automation solutions</h3>
          <p>
            We are at the forefront of industrial automation solutions providing advanced communication systems for the control and management of remote assets. Our automation services and solutions include both hardware and software with full stack of services for creating a fully connected ecosystem that enables the remote tracking, monitoring and control of industrial assets, operations and people reliably.
          </p>
          <button
            class="btn-base"
            @click="$router.push('/about-us')"
          >
            Learn more <img src="/img/arrow-link.svg" alt="">
          </button>
        </div>
      </div>
    </section>

    <section class="home-solutions">
      <div class="container">
        <div class="row">
          <div class="col-12 col-md-4 solution-item">
            <div class="red-line" />
            <h5>Our solutions</h5>
            <h3>Industrial Automation Solutions</h3>
            <p>CARMTEK automation solutions improve asset utilization, reduce process costs, and help manage risk for better efficiency and return on investment. </p>
            <button
              class="btn-base"
              @click="$router.push('/solutions')"
            >
              Explore now <img src="/img/arrow-link.svg" alt="">
            </button>
          </div>

          <div class="col-12 col-md-8 solution-item">
            <div
              v-for="solution in otherSolutions"
              :key="solution.id"
              class="solution-link"
            >
              <div
                class="img-header"
                :style="{backgroundImage:'linear-gradient(rgba(21, 37, 81, 0.48), rgba(21, 37, 81, 0.48)), url(' + `/img/${solution.thumbnail}` + ')'}"
              />
              <h6>{{ solution.title }}</h6>
              <NuxtLink
                :to="`/solutions/${solution.id}`"
              >
                Learn more <img src="/img/drop-arrow.svg" alt="learn-arrow">
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section>

    <Footer />
  </div>
</template>

<script>
import Footer from '@/components/common/Footer.vue'
// import Forward from '../components/common/Forward.vue'
import solutions from '~/static/data/solutions.js'

// import hj from 'cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js'

export default {
  name: 'Home',
  components: { Footer },
  data () {
    return {
      solutions,
      open: true,
      otherSolutions: []
    }
  },
  mounted () {
    this.sliceSolutions()
  },
  methods: {
    sliceSolutions () {
      this.otherSolutions = solutions.slice(0, 2)
    }
  }
}
</script>

<style lang="scss">

</style>
