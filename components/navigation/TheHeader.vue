<template>
  <div :class="[view.topOfPage ? 'header-container' : 'onScroll']">
    <header class="the-header container">
      <div class="nav-img">
        <NuxtLink to="/">
          <img
            v-if="view.topOfPage"
            src="/img/carmtek-logo-white.png"
            alt="logo-"
          >
          <img
            v-else
            src="/img/carmtek-logo.png"
            alt="logo"
          >
        </NuxtLink>
      </div>
      <div class="navigation-items">
        <ul class="nav-list">
          <li
            class="nav-item"
          >
            <NuxtLink
              to="/about-us"
            >
              ABOUT US
            </NuxtLink>
          </li>
          <li
            class="nav-item dropdown"
          >
            <NuxtLink
              to="/services"
            >
              OUR SERVICES
              <img v-if="view.topOfPage" class="nav-link-img" src="/img/nav-arrow-white.svg" alt="">
              <img v-else class="nav-link-img" src="/img/nav-arrow-dark.svg" alt="">
            </NuxtLink>
            <DropDown
              style="left: -95px; top: 30px;"
              :nav-links="servicesLink"
            />
          </li>
          <li
            class="nav-item dropdown"
          >
            <NuxtLink
              to="/solutions"
            >
              SOLUTIONS
              <img v-if="view.topOfPage" class="nav-link-img" src="/img/nav-arrow-white.svg" alt="">
              <img v-else class="nav-link-img" src="/img/nav-arrow-dark.svg" alt="">
            </NuxtLink>
            <DropDown
              style="left: -95px; top: 30px;"
              :nav-links="solutionsLink"
            />
          </li>
          <li
            class="nav-item"
          >
            <NuxtLink
              to="/contact"
            >
              CONTACT
            </NuxtLink>
          </li>
        </ul>
      </div>
    </header>
  </div>
</template>

<script>
import DropDown from './DropDown.vue'
import services from '~/static/data/services.js'
import solutions from '~/static/data/solutions.js'

const mappedServices = services.map((service) => {
  const item = {
    link: `/services/${service.id}`,
    title: service.title
  }
  return item
})

const mappedSolutions = solutions.map((solution) => {
  const item = {
    link: '/solutions',
    title: solution.title
  }
  return item
})
export default {
  name: 'TheHeader',
  components: { DropDown },
  data () {
    return {
      page: 0,
      view: {
        topOfPage: true
      },
      servicesLink: mappedServices,
      solutionsLink: mappedSolutions
    }
  },
  watch: {
    page (newVal, oldVal) {
      this.changeViewState()
    }
  },
  mounted () {
    window.addEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll () {
      this.page = window.pageYOffset
    },
    changeViewState () {
      if (this.page > 0) {
        this.view.topOfPage = false
      } else {
        this.view.topOfPage = true
      }
    }
  }
}
</script>
