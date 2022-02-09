<template>
  <div class="window">
    <div
      class="header"
      :class="toggleMobile"
    >
      <div class="icon icon-apple">
        <NuxtLink to="/">
          <img src="/img/carmtek-logo.png" alt="">
        </NuxtLink>
        <div
          class="burger-container mr-3"
          @click="chanageMobileState"
        >
          <div id="burger">
            <div class="bar topBar" />
            <div class="bar btmBar" />
          </div>
        </div>
      </div>
      <ul
        class="menu"
        @click="chanageMobileState"
      >
        <li
          class="menu-item"
        >
          <NuxtLink
            class="mt-3"
            to="/about-us"
          >
            ABOUT US
          </NuxtLink>
        </li>
        <li
          class="menu-item"
        >
          <NuxtLink
            class="mt-3"
            to="/services"
          >
            OUR SERVICES
            <img class="nav-link-img" src="/img/nav-arrow-dark.svg" alt="">
          </NuxtLink>
        </li>
        <li
          class="menu-item"
        >
          <NuxtLink
            class="mt-3"
            to="/solutions"
          >
            SOLUTIONS
            <img class="nav-link-img" src="/img/nav-arrow-dark.svg" alt="">
          </NuxtLink>
        </li>
        <li
          class="menu-item"
        >
          <NuxtLink
            class="mt-3"
            to="/contact"
          >
            CONTACT
          </NuxtLink>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import routes from '~/static/data/url.js'
export default {
  name: 'MobileNav',
  data () {
    return {
      toggleMobile: '',
      routes
    }
  },
  methods: {
    chanageMobileState () {
      if (this.toggleMobile === 'menu-opened') {
        this.toggleMobile = ''
      } else {
        this.toggleMobile = 'menu-opened'
      }
    }
  }
}
</script>

<style>
body {
  margin: 0;
  line-height: 1.4;
  background: #fff;
}
