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
      <div class="solutions-img" :style="{backgroundImage:'url(' + `/img/${findSolution.img}` + ')'}"></div>
    </section>

    <section class="solutions-cards">
      <div class="container">
        <div class="row row-cols-1 row-cols-md-3 g-4 justify-content-center">
          <div
            v-for="solutions in findSolution.subSolutions"
            :key="solutions.title"
            class="col my-3"
          >
            <div class="card">
              <div class="card-body">
                <h3>{{ solutions.title }}</h3>
                <p class="card-title">{{ solutions.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <Footer />
  </div>
</template>

<script>
import { computed, watch, reactive } from 'vue'
import { useRoute } from 'vue-router'
import solutions from '@/data/solutions.js'
import Footer from '../components/common/Footer.vue'
export default {
  components: { Footer },
  setup () {
    const state = reactive({
      otherSolutions: [],
      solutions
    })
    const route = useRoute()

    const findSolution = computed(() => state.solutions.find(solution => solution.id === route.params.slug))
    
    // const slicedSolutions = computed(() => state)
    // const slicedSolution = () => {
    //   const result = state.solutions.filter(solution => solution.title !== route.params.slug)
    //   state.otherSolutions = result.slice(0, 3)
    //   return state.otherSolutions
    // }
    watch(findSolution, (currentValue, oldValue) => {
      console.log(currentValue);
      console.log(oldValue);
    })
    
    // onMounted (() => {
    //   slicedSolution()
    // })
    return {
      state,
      findSolution
    }
  }
}
</script>

<style lang="scss" scoped>
.solutions-description {
  padding: 20px 0px;

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
</style>
