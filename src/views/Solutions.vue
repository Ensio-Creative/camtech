<template>
  <div>
    <div class="bg-hero">
      <div class="bg-text container">
        <h2>
          Our Solutions
        </h2>
      </div>
    </div>

    <section class="our-solution">
      <div class="container">
        <div class="base-color-bar"></div>
        <h2>Our Solutions Overview</h2>
        <p>
          Carmtek Systems is a leading provider in SCADA (Supervisory Control and Data Acquisition) communication technologies. With over 20 years of experience in providing industrial remote monitoring-and-control solutions that range from the Oil & Gas to Water industry, our experience in the field ensures that customer expectations are met with reliable products and quality services.
        </p>
      </div>
    </section>

    <section class="solutions">
      <div class="container">
        <h2>SOLUTIONS</h2>
        <div class="row row-cols-1 row-cols-md-3 g-4">
          <router-link
            v-for="solution in solutions"
            :key="solution.title"
            :to="`/solutions/${solution.title}`"
            class="col my-3"
          >
            <div class="card">
              <div class="solution-thumbnail" :style="{backgroundImage:'url(' + `/img/${solution.img}` + ')'}"></div>
              <div class="card-body">
                <h5 class="card-title">{{ solution.title }}</h5>
                <p class="card-text">{{ solution.description }}</p>
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
import solutions from '@/data/solutions.js'
import Footer from '../components/common/Footer.vue'
export default {
  components: { Footer },
  setup () {
    

    return {
      solutions
    }
  }
}
</script>

<style lang="scss">
.our-solution {
  display: flex;
  background-color: var(--base-black);
  height: 287px;
  color: #fff;

  .container {
    text-align: left;
    align-self: center;

    .base-color-bar {
      background-color: var(--base-color);
      width: 33px;
      height: 3px;
      margin-bottom: 5px;
    }
  }
}

.solutions {
  padding: 40px 0px;
  h2 {
    color: var(--base-color);
    font-size: 13px;
    padding: 0px 0px 20px 0px;
  }
  .solution-thumbnail {
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    padding: 100px;
  }

  a {
    color: #000;
  }
  .card-text {
    height: 115px;
    overflow: hidden;
  }
}
@media (min-width: 1000px) {
  .our-solution {
    height: 380px;
  }
}
</style>
