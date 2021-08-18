<template>
  <div class="home">
    <div class="bg-hero">
      <div class="bg-text container">
        <h2>
          Industrial leader in
          Cloud Based SCADA/IoT and
          Automation Solutions
        </h2>
      </div>
    </div>
    <section class="positive-impact container-fluid">
      <div class="row">
        <div class="col-12 col-md-7 positive-items">
          <div class="content">
            <h1>
              Industrial Solutions for Remote Assets
            </h1>
            <button
              class="btn-outline-base mt-4"
              @click="$router.push('/about-us')"
            >
              ABOUT US
            </button>
          </div>
        </div>
        <div class="col-12 col-md-5 positive-items">
          <p>
            We are at the forefront of industrial automation solutions providing advanced communication systems for the control and management of remote assets. Our automation services and solutions include both hardware and software with full stack of services for creating a fully connected ecosystem that enables the remote tracking, monitoring and control of industrial assets, operations and people reliably.
          </p>
        </div>
      </div>
    </section>

    <section class="discover-more container-fluid">
      <div class="row">
        <div class="col-12 col-md-6 discover-items">
          <div class="discover-content">
            <h2>
              End-to-End Cloud Based SCADA/IoT Services
            </h2>
            <p>
              We provide an End-to-End Cloud Based SCADA/IoT services with specilized systems that minimize downtime and maximize operation output.
            </p>
            <button
              class="btn-base-outline-white"
              @click="$router.push('/services')"
            >
              DISCOVER MORE
            </button>
          </div>
        </div>
        <div class="col-12 col-md-6 discover-items" />
      </div>
    </section>
    <section class="container-fluid bg-trailers" />

    <section class="environment-impact">
      <div class="container">
        <div class="row">
          <div class="col-12 col-md-5">
            <div class="environment-content">
              <h2>
                Industrial Automation Solutions
              </h2>
              <p>
                CARMTEK automation solutions improve asset utilization, reduce process costs, and help manage risk for better efficiency and return on investment.
              </p>
              <button
                class="btn-outline-base"
                @click="$router.push('/solutions')"
              >
                DISCOVER MORE
              </button>
            </div>
          </div>
          <div class="col-12 col-md-7">
            <div class="row">
              <div
                v-for="solution in solutions.slice(0, 2)"
                :key="solution.title"
                class="col-sm-6"
              >
                <div
                  class="environment-items"
                  :style="{background:'linear-gradient(rgba(0, 0, 0, 0), rgba(21, 37, 81, 0.48)), url(' + `/img/${solution.thumbnail}` + ')'}"
                >
                  <div class="body">
                    <h5>{{ solution.title }}</h5>
                    <NuxtLink
                      :to="`/solutions/${solution.id}`"
                    >
                      Learn more
                    </NuxtLink>
                  </div>
                </div>
              </div>
              <!-- <div class="col-sm-6">
                <div class="environment-items">
                  <div class="body">
                    <h5>Cloud Based SCADA and RTU Solutions</h5>
                    <NuxtLink to="/">
                      Learn more
                    </NuxtLink>
                  </div>
                </div>
              </div> -->
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="reach-out">
      <div class="reach-container">
        <div class="reach-content">
          <p>
            Reach out for complete service or technical support. We are here to help you.
          </p>
          <button
            class="btn-base-outline-white"
            @click="$router.push('/contact')"
          >
            CONTACT US
          </button>
        </div>
      </div>
    </section>
    <Footer />
  </div>
</template>

<script>
import Footer from '@/components/common/Footer.vue'
// import Forward from '../components/common/Forward.vue'
import solutions from '~/static/data/solutions.js'
export default {
  name: 'Home',
  components: { Footer },
  data () {
    return {
      solutions
    }
  }
  // head () {
  //   return {
  //     title: 'CARMTEK',
  //     meta: [
  //       {
  //         hid: 'Services',
  //         name: 'CARMTEK SERVICES',
  //         content: 'Services'
  //       }
  //     ]
  //   }
  // }
}
</script>

<style lang="scss">

.positive-items{
  background-color: var(--base-light-color);
  color: var(--base-color);
  height: 45vh;
  display: flex;
  align-items: center;
  .content {
    h1 {
      font-size: 32px;
    }
    .btn-outline-base {
      width: 149px;
    }
  }
}

.positive-items:last-child {
  background-color: #fff;
  color: var(--base-text-color);
  height: 65vh;
  margin-bottom: 80px;
  p {
    border: 1px solid var(--base-color);
    padding: 38px 30px 38px 30px;
    position: relative;
    background-color: #fff;
    top: -11px;
  }
}

.discover-items {
  background-color: var(--base-color);
  color: #fff;
  height: 58vh;
  p {
    color: #fff;
  }
  .discover-content {
    padding: 30px 0px;
  }
}

.discover-items:last-child {
  background-image: url('/img/carmtek-home-services.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}

.bg-trailers {
  background-image: url('/img/carmtek-home-bg.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: bottom;
  height: 35vh;
}

.environment-items {
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 30vh;
  color: #fff;
  border-radius: 0px;
  border: 0px;
  display: flex;
  align-items: flex-end;
  padding: 20px;
  margin-bottom: 20px;

  h5 {
    font-family: var(--header-font);
    font-size: 23px;
  }
}

.environment-impact {
  padding: 40px 0px;
}

.environment-content {
  padding-left: 20px;
  padding-bottom: 20px;
  h2 {
      color: var(--base-color);
    }
}

.reach-out {
  height: 30vh;
  background-image: url('/img/carmtek-footer-contact.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  .reach-container {
    height: 30vh;
    color: #fff;
    background: rgba(0, 0, 0, 0.6);
    padding: 20px;
    display: flex;
    align-items: center;
    p {
      color: #fff;
    }
  }
}

@media (min-width: 1000px) {
  .solutions-first-half {
    height: 70vh;
  }
  .solution-second-half {
    height: 70vh;
  }
  .positive-items{
    height: 100vh;
    .content {
      h1 {
        font-size: 2.5rem;
      }
    }
  }
  .positive-items:last-child{
    height: 100vh;
    width: 533px;
    margin-bottom: 0px;
  }
  .positive-items {
    .content {
      width: 340px;
      margin: auto;
    }
  }
  .positive-items p {
    border: 1px solid var(--base-color);
    padding: 100px 30px 120px 30px !important;
    position: relative;
    right: 195px;
    top: 0px;
    background-color: #fff;

  }

  .discover-items {
    height: 80vh;
    display: flex;
    align-items: center;

    .discover-content {
      width: 400px;
      margin: auto;

      h2 {
        width: 401px;
      }

      p {
        padding: 40px 0px;
        font-size: 18px;
        color: #fff;
      }
    }
  }

  .bg-trailers {
    height: 80vh;
  }
  .environment-impact {
    padding: 100px 0px;
  }
  .environment-content {
    width: 395px;
    padding: 0px !important;
    p {
        padding: 40px 0px;
        font-size: 18px;
      }
  }

  .environment-items {
    height: 58vh;
  }

  .reach-out {
    height: 80vh;

    .reach-container {
      background: rgba(0, 0, 0, 0.6);
      height: 80vh;
      color: #fff;
      width: 668px;
      float: right;
      padding: 110px;
      display: flex;
      align-items: center;

      .reach-content {
        width: 314px;
        p {
          font-size: 18px;
          color: #fff;
        }
         button {
           margin-top: 20px;
         }
      }
    }
  }
}

span {
  font-size: 18px;
  color: var(--base-text-color);
}
</style>
