<template>
  <div class="footer">
    <div class="footer-link container">
      <div class="link-item">
        <NuxtLink
          v-for="route in routes"
          :key="route.url"
          :to="route.url"
        >
          {{ route.title }}
        </NuxtLink>
      </div>
      <div class="link-item">
        <div class="content-social">
          <div class="social-item">
            <a href="https://business.facebook.com/Integrity-Projects-Limited-110559268204169/" target="_blank" rel="noopener noreferrer">
              <i class="fab fa-facebook-f" />
            </a>
          </div>
          <div class="social-item">
            <a
              href="https://www.linkedin.com/company/integrity-projects-limited-biz"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i class="fab fa-twitter" />
            </a>
          </div>
          <div class="social-item">
            <a
              href="https://www.linkedin.com/company/integrity-projects-limited-biz"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i class="fab fa-instagram" />
            </a>
          </div>
          <div class="social-item">
            <a
              href="https://www.linkedin.com/company/integrity-projects-limited-biz"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i class="fab fa-linkedin-in" />
            </a>
          </div>
        </div>
      </div>
    </div>
    <hr>
    <div class="privacy container">
      <span class="privacy-item">Copyright &copy; {{ date.getFullYear() }} CARMTEK. All Rights Reserved.</span>
      <span class="privacy-item">Web Design: <strong> <a href="https://ensiocreative.com" target="_blank"> Ensio Creative</a> </strong></span>
    </div>
  </div>
</template>

<script>
import routes from '~/static/data/url.js'
export default {
  name: 'Footer',
  data () {
    return {
      footer: '',
      date: new Date(),
      routes
    }
  }
}
</script>
