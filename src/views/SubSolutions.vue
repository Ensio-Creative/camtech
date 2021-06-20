<template>
  <div>
    <div class="container solution-container">
      <h5>Solutions/{{ $route.params.slug }}</h5>
      <div class="solution-thumbnail" :style="{backgroundImage:'url(' + `/img/${findSolution.img}` + ')'}"></div>
      <h4>{{ findSolution.title }}</h4>
      <p>{{ findSolution.description }}</p>
    </div>
    <section class="solutions">
      <div class="container">
        <h4 class="mb-4">Other solutions</h4>
        <div class="row row-cols-1 row-cols-md-3 g-4">
          <router-link
            v-for="solution in state.otherSolutions"
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
import { computed, onMounted, reactive } from 'vue'
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

    const findSolution = computed(() => state.solutions.find(solution => solution.title === route.params.slug))
    
    // const slicedSolutions = computed(() => state)
    const slicedSolution = () => {
      const result = state.solutions.filter(solution => solution.title !== route.params.slug)
      state.otherSolutions = result.slice(0, 3)
      return state.otherSolutions
    }
    
    onMounted (() => {
      slicedSolution()
    })
    return {
      state,
      findSolution
    }
  }
}
</script>

<style lang="scss" scoped>
.solution-container {
  padding: 20px 0px;

  h5{
    color: var(--base-color);
    padding: 20px 0px;
  }
  .solution-thumbnail {
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
</style>
