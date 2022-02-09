/* eslint-disable curly */
/* eslint-disable no-return-assign */
/* eslint-disable no-return-assign */
<template>
  <div>
    <div class="bg-hero">
      <div class="bg-text container">
        <h4>Contact us</h4>
        <h2>
          We are here to answer any question you may have
        </h2>
      </div>
    </div>

    <section class="container contact-text">
      <div class="row justify-content-center full-screen">
        <div class="col-12 col-md-10">
          <div class="row contact-form">
            <div class="col-12 form-half">
              <form @submit.prevent="onSubmit">
                <h2>Get in touch</h2>
                <h5>{{ errorMsg }}</h5>
                <div class="row">
                  <div class="col-12">
                    <AppControlInput
                      v-model="fullName"
                      type="text"
                      required
                      placeholder="Name"
                    />
                  </div>
                  <div class="col-12">
                    <AppControlInput
                      v-model="company"
                      type="text"
                      required
                      placeholder="Company"
                    />
                  </div>
                  <div class="col-12">
                    <AppControlInput
                      v-model="email"
                      type="email"
                      required
                      placeholder="Email"
                    />
                  </div>
                  <div class="col-12">
                    <AppTextarea
                      v-model="message"
                      type="text"
                      required
                      placeholder="Message"
                    />
                  </div>
                  <button
                    class="btn-base  mb-4 mt-2"
                    type="submit"
                  >
                    SEND MESSAGE
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div class="row contact-info">
        <div class="col-12">
          <h2>Contact Details</h2>
        </div>
        <div class="col-12 col-md-4 mt-4">
          <h5>PORT HARCOURT</h5>
          <p>
            Plot 385 Prof. Okujagu Street,
            Off Peter Odili Road,
            Trans-Amadi Industrial Layout,
            Port Harcourt, Nigeria
          </p>
          <span>
            M: +234(0)813.086.0903
            <br>
            E: info@carmtek.com
          </span>
        </div>
        <div class="col-12 col-md-4 mt-4">
          <h5>LAGOS</h5>
          <p>
            1B Alh. Hussein Sunmonu St.,
            Lekki Phase 1, Lagos
          </p>
          <span>
            M: +234(0)809.090.2689
            <br>
            E: info@carmtek.com
          </span>
        </div>
        <div class="col-12 col-md-4 mt-5">
          <h5>UNITED KINGDOM</h5>
          <p>
            10 Malvern Road AYLESBURY, BUCKS HP20 1QF,England
          </p>
          <span>
            M: +44.(0)129.658.6159
            <br>
            E: uk@carmtek.com
          </span>
        </div>
      </div>
    </section>
    <Footer />
  </div>
</template>

<script>
import AppControlInput from '@/components/UI-Components/AppControlInput.vue'
import AppTextarea from '@/components/UI-Components/AppTextarea.vue'
import Footer from '@/components/common/Footer.vue'
export default {
  name: 'Contact',
  components: { AppControlInput, AppTextarea, Footer },
  data () {
    return {
      fullName: '',
      company: '',
      email: '',
      message: '',
      errorMsg: ''
    }
  },
  head () {
    return {
      title: 'Contact - CARMTEK Solutions',
      meta: [
        {
          hid: 'Contact',
          name: 'Contact CARMTEK Solutions',
          content: 'Contact'
        }
      ]
    }
  },
  methods: {
    async onSubmit  () {
      const errorText = 'Fill every filed'
      if (!this.fullName) {
        this.errorMsg = errorText
        return this.errorMsg
      }
      if (!this.company) {
        this.errorMsg = errorText
        return this.errorMsg
      }
      if (!this.email) {
        this.errorMsg = errorText
        return this.errorMsg
      }
      if (!this.validEmail(this.email)) {
        this.errorMsg = 'Add a valid email'
        return this.errorMsg
      }
      if (!this.message) {
        this.errorMsg = errorText
        return this.errorMsg
      }
      const data = {
        name: this.name,
        company: this.company,
        email: this.email,
        message: this.message
      }
      const response = await fetch('https://formsubmit.co/ajax/info@carmtek.com', {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data) // body data type must match "Content-Type" header
      })
      // return response.json();
      if (response.status === 200) {
        this.errorMsg = 'Message sent'
        return this.errorMsg
      }
      if (response.status !== 200) {
        this.errorMsg = 'Something went wrong'
        return this.errorMsg
      }
    },
    validEmail (email) {
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      return re.test(email)
    }
  }
}
</script>

<style lang="scss" scoped>
.bg-hero {
  background: linear-gradient(rgba(14, 30, 67, 0.7), rgba(14, 30, 67, 0.7)), url('/img/carmtek-contact-header-img.jpg');
  height: 391px;
  background-position: center;
}
@media (min-width: 1000px) {
  .bg-hero {
    height: 79vh;
  }
}
</style>
