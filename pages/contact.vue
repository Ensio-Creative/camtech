<template>
  <div>
    <div class="bg-hero">
      <div class="bg-text container">
        <h2>
          Contact Us
        </h2>
      </div>
    </div>

    <section class="container-fluid">
      <div class="row justify-content-center full-screen">
        <div class="col-12 col-md-11">
          <div class="row contact-info">
            <div class="col-12 form-half">
              <form @submit.prevent="onSubmit">
                <h2>Get in touch</h2>
                <div class="row">
                  <div class="col-12">
                    <AppControlInput
                      v-model="fullName"
                      type="text"
                      required
                      placeholder="Name"
                    />
                    <p>{{ fullName }}</p>
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
                  <span>{{ errorMessage }}</span>
                </div>
              </form>
            </div>
            <div class="col-12">
              <div class="row contact-first-half">
                <div class="col-12">
                  <h2>Contacts</h2>
                </div>
                <div class="col-12 col-md-6 mt-4">
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
                <div class="col-12 col-md-6 mt-4">
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
                <div class="col-12 col-md-6 mt-5">
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
            </div>
          </div>
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
      errorMessage: ''
    }
  },
  head () {
    return {
      title: 'Contact - CARMTEK',
      meta: [
        {
          hid: 'Contact',
          name: 'Contact CARMTEK',
          content: 'Contact'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.bg-hero {
  background: linear-gradient(rgba(21, 37, 81, 0.48), rgba(21, 37, 81, 0.48)), url('/img/carmtek-contact-header-img.jpg');
  height: 391px;
  background-position: center;
}
.contact-info {
  padding: 20px 0px 40px 0px;

  h2 {
    font-weight: bold;
    border-bottom: 1px solid #f2f2f2;
    padding-bottom: 22px;
    color: var(--base-color);
  }
  .contact-first-half{
    background-color: #fff;
    padding: 0px;
    .row {
      border-top: 2px solid var(--base-text-color);
    }
    h4 {
      padding: 10px 0px 0px 0px;
    }
  }
  .form-half{
    background-color:  #fff;
    form {
      padding: 10px 0px;
      color: #000;
      button{
        width: 221px;
        margin: auto;
      }
      span {
        color: var(--base-color);
      }
    }
  }
}
@media (min-width: 1000px) {
  .bg-hero {
    height: 79vh;
  }
  .container-fluid {
    height: 168vh;
  }
  .full-screen {
    position: relative;
    top: -186px;
  }
  .contact-info {
    padding: 0px;

    .form-half{
      background-color:  #fff;
      form {
        padding: 75px 120px;
        color: #000;
        button{
          width: 100%;
        }
        span {
          color: var(--base-color);
        }
      }
    }

    .contact-first-half {
      padding: 30px 120px;

      p {
        width: 353px;
      }
    }
  }
}
</style>
