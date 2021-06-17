<template>
  <div class="footer">
    <div class="nav-footer">
      <router-link
        v-for="route in routes"
        :key="route.url"
        :to="route.url"
        class="nav-footer-item{
          padding: 10px;"
      >
        {{ route.title }}
      </router-link>
    </div>
    <hr>
    <div class="privacy">
      <span class="privacy-item">&copy; {{ date.getFullYear() }} Carmel’s Tekno Limited </span>
      <router-link
        to="/"
      >
        Privacy Policy
      </router-link>
      <router-link
        to="/"
      >
        Terms & Conditions
      </router-link>
    </div>
  </div>
</template>

<script>
import routes from '@/data/url.js';
export default {
  setup () {
    

    return {
      date: new Date(),
      routes
    }
  }
}
</script>

<style lang="scss" scoped>
.footer {
  background-color: var(--base-color);
  padding-top: 40px;
  padding-bottom: 40px;

  .nav-footer {
    color: #fff;
    text-align: center;

    a{
      // padding: 10px;
      margin-right: 10px;
    }
  }
  hr {
    background: #fff;
    margin-top: 40px;
    margin-bottom: 40px;
    opacity: 0.4;
  }
  .privacy {
    margin-top: 20px;
    text-align: center;
    color: #fff;

    .privacy-item{
      display: block;

    }

    a{
      margin-right: 10px;
    }
  }
}
</style>
