<template>
  <div class="header-container">
    <header class="the-header container">
      <div class="nav-img">
        <router-link to="/">
          <img src="/img/carmtek-logo.svg" alt="">
        </router-link>
      </div>
      <div class="navigation-items">
        <ul class="nav-list">
          <li
            v-for="links in routes"
            :key="links.url"
            class="nav-item"
          >
            <router-link
              class="mt-3"
              :to="links.url"
            >
              {{ links.title }}
            </router-link>
          </li>
        </ul>
      </div>
    </header>
  </div>
</template>

<script>
import routes from '@/data/url.js'
export default {
  name: 'TheHeader',
  setup () {

    return {
      routes
    }
  }
}
</script>

<style lang="scss" scoped>
.header-container {
  width: 100%;
  height: 88px;
  background-color: #fff;
  box-shadow: 0px 0px 4px 1px rgba(35, 51, 111, 0.24);
}

.the-header {
  display: flex;
  color: var(--base-color);
  padding: 20px 18px;
  justify-content:space-between;
}

.logo {
  margin: 0 10px;
  font-size: 1.3rem;
}
.nav-img img {
  width: 221px;
  height: 55px;
}
.spacer {
  /* flex: 1; */
  width: 129px;
}

.navigation-items {
  display: none;
  font-family: var(--nav-font);
}

@media (min-width: 994px) {
  .header-container {
    // position: fixed;
    // top: 0px;
    z-index: 1000;
    width: 100%;
    height: 88px;
    background-color: #fff;
  }
  .navigation-items {
    display: flex;
    width: 425px;
    justify-content: space-between;
  }
  .header-container {
  background-color: #fff;
}
}

.nav-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  font-size: 18px;
}

.nav-item {
  margin: 10px 10px;
}

.nav-item a {
  text-decoration: none;
  font-size: 13px;
  font-weight: bold;
  padding: 0px 10px 10px 10px;
  color: var(--base-dark);
}

.nav-item a:hover,
.nav-item a:active,
.nav-item a.router-link-active {
  color: var(--base-color);
}
</style>
