<template>
  <div class="sidenav-container">
    <div
      v-if="show"
      class="sidenav-backdrop"
      @click="$emit('close')"
    />
    <transition name="slide-side">
      <div
        v-if="show"
        class="sidenav"
      >
        <ul
          class="nav-list"
          @click="$emit('close')"
        >
          <li
            v-for="links in routes"
            :key="links.url"
            class="nav-item"
          >
            <router-link
              :to="links.url"
            >
              {{ links.title }}
            </router-link>
          </li>
        </ul>
      </div>
    </transition>
  </div>
</template>

<script>
import routes from '@/data/url.js'
export default {
  name: 'TheSidenav',
  props: {
    show: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      routes
    }
  }
  // setup () {

  //   return {
  //     routes
  //   }
  // }
}
</script>

<style scoped>
.sidenav-container {
  height: 100%;
  width: 100%;
}

.sidenav-backdrop {
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 1000;
  position: fixed;
  top: 0;
  left: 0;
}

.sidenav {
  height: 100%;
  width: 300px;
  background-color: white;
  z-index: 10000;
  position: fixed;
  top: 0;
  left: 0;
  box-sizing: border-box;
  padding: 30px;
}

.slide-side-enter-active,
.slide-side-leave-active {
  transition: all 0.3s ease-out;
}
.slide-side-enter,
.slide-side-leave-to {
  transform: translateX(-100%);
}

.nav-list {
  list-style: none;
  padding: 0;
  margin: 0;
  font-size: 18px;
}

.nav-item {
  margin: 20px 0;
}

.nav-item a {
  text-decoration: none;
  color: var(--bg-dark-blue);
}

.nav-item a:hover,
.nav-item a:active {
  color: var(--bg-dark-blue);
}
.landing-outline {
  color: var(--bg-dark-blue);
  display: block;
}
.landing-outline:nth-child(2) {
  border: 2px solid var(--bg-dark-blue);
  border-radius: 20px;
  color: var(--bg-dark-blue);
}
</style>
