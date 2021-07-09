<template>
  <div>
    <div class="bg-hero">
      <div class="bg-text container">
        <h5>Solutions</h5>
        <h2>
          {{ findSolution.title }}
        </h2>
      </div>
    </div>

    <section class="solutions-description">
      <div class="container">
        <p>
          {{ findSolution.description }}
        </p>
        <p>
          {{ findSolution.subDescription }}
        </p>
      </div>
      <div class="solutions-img" :style="{backgroundImage:'url(' + `/img/${findSolution.img}` + ')'}" />
    </section>

    <section class="solutions-cards">
      <div class="container">
        <div class="row row-cols-1 row-cols-md-3 g-4 justify-content-center">
          <div
            v-for="solution in findSolution.subSolutions"
            :key="solution.title"
            class="col my-3"
          >
            <div class="card">
              <div class="card-body">
                <h3>{{ solution.title }}</h3>
                <p class="card-title">
                  {{ solution.description }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="other-solutions container-fluid mt-5">
      <h2>Other solutions</h2>
      <div class="row mt-5">
        <NuxtLink
          v-for="solution in otherSolutions"
          :key="solution.title"
          :to="`/solutions/${solution.id}`"
          class="col-12 col-md-4 other-solutions-items"
          :style="{backgroundImage:'url(' + `/img/${solution.img}` + ')'}"
        >
          <h4>{{ solution.title }}</h4>
        </NuxtLink>
      </div>
    </section>
    <Footer />
  </div>
</template>

<script>
import Footer from '@/components/common/Footer.vue'
import solutions from '~/static/data/solutions.js'
export default {
  name: 'SubSolutions',
  components: { Footer },
  data () {
    return {
      solutions,
      otherSolutions: [],
      currentPage: this.$route.params.subSolution
    }
  },
  computed: {
    findSolution () {
      const result = this.solutions.find(solution => solution.id === this.$route.params.subSolutions)
      return result
    }
  },
  watch: {
    currentPage: {
      immediate: true,
      handler () {
        this.filterOtherSolutions()
      }
    }
  },
  methods: {
    filterOtherSolutions () {
      const result = this.solutions.filter(solution => solution.id !== this.$route.params.subSolutions)
      this.otherSolutions = result.slice(0, 3)
    }
  }
}
</script>

<style lang="scss" scoped>
.bg-hero {
  background: linear-gradient(rgba(21, 37, 81, 0.48), rgba(21, 37, 81, 0.48)), url('/img/carmtek-solutions-header-img.jpg');
  height: 79vh;
  background-position: bottom;
}
.solutions-description {
  padding: 60px 0px;

  .solutions-img {
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 416px;
  }

  h4 {
    padding-top: 50px;
  }

  p {
    padding: 20px 0px;
  }
}

.solutions-cards {
  padding: 40px 0px;
  .card {
    border: 0px;
    h3 {
      color: var(--base-color);
    }
  }
}

.other-solutions {
    h2 {
      color: var(--base-color);
      text-align: center;
    }
    .other-solutions-items {
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      color: #fff;
      height: 50vh;
      display: flex;
      align-items: flex-end;
      h4 {
        font-family: var(--header-font);
        padding-bottom: 20px;
      }
    }
  }

@media (min-width: 1000px) {
  .solutions-description {
    .container {
      padding: 0px 90px 60px 90px;
    }
  }
}
</style>
