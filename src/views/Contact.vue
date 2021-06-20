<template>
  <div>
    <div class="bg-hero">
      <div class="bg-text container">
        <h2>
          Our Contact
        </h2>
      </div>
    </div>

    <section class="container-fluid">
      <div class="row justify-content-center full-screen">
        <div class="col-12 col-md-11">
          <div class="row contact-info">
            <div class="col-12 col-md-6 contact-first-half">
              <h2>Contact Information</h2>
              <div class="address">
                <h4>Address</h4>
                <p>
                  Plot 385 Prof. Okujagu Street, Off Peter Odili Road, Trans-Amadi Industrial Layout,
                  Port Harcourt, Nigeria.
                </p>
              </div>
              <div class="address">
                <h4>Phone</h4>
                <p>
                  (+234) 909 199 6569
                  <br>
                  (+234) 813 845 7481
                </p>
              </div>
            </div>
            <div class="col-12 col-md-6 form-half">
              <form @submit.prevent="onSubmit">
                <div class="row">
                  <div class="col-12">
                    <AppControlInput
                      v-model="state.fullName"
                      type="text"
                      required
                      placeholder="Full name"
                    >
                      Full Name
                    </AppControlInput>
                    <p>{{ state.fullName }}</p>
                  </div>
                  <div class="col-12">
                    <AppControlInput
                      v-model="state.email"
                      type="email"
                      required
                      placeholder="Email"
                    >
                      Email
                    </AppControlInput>
                  </div>
                  <div class="col-12">
                    <AppControlInput
                      v-model="state.subject"
                      type="text"
                      required
                      placeholder="Subject"
                    >
                      Subject
                    </AppControlInput>
                  </div>
                  <div class="col-12">
                    <AppTextarea
                      v-model="state.message"
                      type="text"
                      required
                      placeholder="Message"
                    >
                      Message
                    </AppTextarea>
                  </div>
                  <button
                    class="btn-base mb-4 mt-2"
                    type="submit"
                  >
                    SUBMIT
                  </button>
                  <span>{{ state.errorMessage }}</span>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
    <Footer />
  </div>
</template>

<script>
import { reactive } from 'vue'
import AppControlInput from '@/components/UI-Components/AppControlInput.vue'
import AppTextarea from '../components/UI-Components/AppTextarea.vue'
import Footer from '../components/common/Footer.vue'
export default {
  name: 'Contact',
  components: { AppControlInput, AppTextarea, Footer },
  setup () {
    const state = reactive({
      fullName: '',
      email: '',
      subject: '',
      message: '',
      errorMessage: ''
    })
    // Functions
    const validEmail = (email) => {
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      return re.test(email)
    }
    const onSubmit = () => {
      state.errorMessage = ''
      console.log('Ran')
      if (state.fullName.length < 3) {
        state.errorMessage = 'Please add a name'
        return
      }else if (!validEmail(state.email)) {
        state.errorMessage = 'Please add a valid emaill'
        return
      }else if (state.subject.length < 3) {
        state.errorMessage = 'Please add a subject'
        return
      }else if (state.message.length < 3) {
        state.errorMessage = 'Please add a message'
        return
      } else {
        const payload = {
          fullName: state.fullName,
          email: state.email,
          subject: state.subject,
          message: state.message
        }
        console.log(payload)
      }
    }
    return {
      state,
      onSubmit
    }
  }
}
</script>

<style lang="scss" scoped>
.contact-info {
  padding: 0px 0px 40px 0px;

  .contact-first-half{
    background-color: #EBEFFA;
    padding: 40px;

    h4 {
      padding: 10px 0px 0px 0px;
    }
  }
  .form-half{
    background-color:  var(--base-blue);
    form {
      padding: 10px 20px;
      color: #fff;
      button{
        margin: auto;
      }
      span {
        color: var(--base-color);
      }
    }
  }
}
@media (min-width: 1000px) {
  .full-screen {
    position: relative;
    top: -186px;
  }
  .contact-info {
    padding: 0px;
  }
}
</style>