<template>
  <div class="footer">
    <div class="footer-img container">
      <img src="/img/carmtek-logo-white.svg" alt="">
    </div>
    <hr>
    <div class="privacy container">
      <span class="privacy-item">&copy; {{ date.getFullYear() }} Carmels Group. All rights reserved.</span>
      <span class="privacy-item">Site Credit: <strong> <a href="www.ensiocreative.com">Ensio Creative</a> </strong></span>
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
  padding: 30px 0px 60px 0px;

  .footer-img {
    text-align: center;
  }
  .footer-img img {
    width: 300px;
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
@media (min-width: 1000px) {
  .footer-img {
    text-align: left !important;
  }
  .footer-img img {
    width: 220px !important;
  }
  .footer .privacy .privacy-item {
    display: inline;
    padding-right: 20px;
    float: left;
  }
  .footer .privacy .privacy-item:last-child {
    display: inline;
    padding-right: 20px;
    float: right;
  }
}
</style>
