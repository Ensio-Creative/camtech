<template>
  <div>
    <div class="bg-hero">
      <div class="bg-text container">
        <h2>
          Our Solutions
        </h2>
      </div>
    </div>
    <section class="solutions">
      <div class="container">
        <div class="row">
          <div
            v-for="solution in solutions"
            :key="solution.title"
            class="col-12 col-md-6 solutions-item"
            :style="{backgroundImage:'url(' + `/img/${solution.img}` + ')'}"
          >
            <div class="solutions-content">
              <h4>{{ solution.title }}</h4>
              <button
                class="btn-outline-base"
                @click="$router.push(`/solutions/${solution.id}`)"
              >
                LEARN MORE 
              </button>
            </div>
          </div>
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

.solutions{
  padding: 80px 0px;

  .solutions-item {
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 50vh;
    color: #fff;
    display: flex;
    align-items: flex-end;
    margin-bottom: 20px;

    .btn-outline-base {
      color: #fff;
      font-size: 15px;
    }

    .solutions-content {
      padding: 10px;
    }
  }
}

@media (min-width: 1000px) {
  .our-solution {
    height: 380px;
  }
  .solutions .solutions-item {
    margin-bottom: 0px;
  }
}
</style>
