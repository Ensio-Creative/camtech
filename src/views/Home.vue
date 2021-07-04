<template>
  <div class="home">
    <div class="bg-hero">
      <div class="bg-text container">
        <h2>
          Industrial leader in 
          Wireless SCADA/IoT and
          Automation Solutions
        </h2>
      </div>
    </div>
    <section class="positive-impact container-fluid">
      <div class="row">
        <div class="col-12 col-md-7 positive-items">
          <h1>
            Industrial Solutions for Remote Assets
          </h1>
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
              End-to-End SCADA/IoT Services
            </h2>
            <p>
              We provide an End-to-End SCADA/IoT services with specilized systems that minimize downtime and maximize operation output.
            </p>
            <button
              class="btn-base-outline-white"
              @click="$router.push('/services')"
            >
              DISCOVER MORE 
            </button>
          </div>
        </div>
        <div class="col-12 col-md-6 discover-items"></div>
      </div>
    </section>
    <section class="container-fluid bg-trailers"></section>

    <section class="environment-impact">
      <div class="container">
        <div class="row">
          <div class="col-12 col-md-5">
            <div class="environment-content">
              <h2>
                Industrial Automation Solutions
              </h2>
              <p>
                We provide effective industrial remote tracking, monitoring and control solutions.
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
              <div class="col-sm-6">
                <div class="environment-items">
                  <div class="body">
                    <h5>Industrial SCADA, Telemetry/ IoT Solutions</h5>
                    <router-link to="/">Learn more</router-link>
                  </div>
                </div>
              </div>
              <div class="col-sm-6">
                <div class="environment-items">
                  <div class="body">
                    <h5>Cloud Based SCADA and RTU Solutions</h5>
                    <router-link to="/">Learn more</router-link>
                  </div>
                </div>
              </div>
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
import Footer from '../components/common/Footer.vue'
// import Forward from '../components/common/Forward.vue'
import services from '@/data/services.js'
export default {
  components: { Footer },
  name: 'Home',
  setup () {
      return {
        services
      }
    }
}
</script>

<style lang="scss">
.bg-hero {
  display: flex;
  background: linear-gradient(rgba(21, 37, 81, 0.48), rgba(21, 37, 81, 0.48)), url('/img/QWTV3392.JPG');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 512px;

  .bg-text {
    color: #fff;
    align-self: center;

    // h2 {
    //   font-famil
    // }

    .btn-base {
      width: 175px;
      height: 45px;
      background-color: var(--base-color);
      color: #fff;
      font-size: 16px;
      font-weight: bold;
      border: 0px;
    }
  }
}
.positive-items{
  background-color: var(--base-light-color);
  color: var(--base-color);
  height: 35vh;
  display: flex;
  align-items: center;
}

.positive-items:last-child {
  background-color: #fff;
  color: var(--base-text-color);
  height: 45vh;
}

.discover-items {
  background-color: var(--base-color);
  color: #fff;
  height: 45vh;

  .discover-content {
    padding: 30px 0px;
  }
}

.discover-items:last-child {
  background-image: url('/img/HSVG1107.JPG');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}

.bg-trailers {
  background-image: url('/img/LVPB8098.JPG');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 35vh;
}

.environment-items {
  background-image: url('/img/IEZB6674.JPG');
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
  padding: 100px 0px;
}

.environment-content {
  padding-left: 20px;
  padding-bottom: 20px;
}

.reach-out {
  height: 30vh;
  background-image: url('/img/VHED0221.JPG');
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
  }
}

@media (min-width: 1000px) {
  .bg-hero {
    height: 100vh;

    h2 {
      width: 620px;
      font-size: 51px;
    }
    p {
      width: 350px;
    }
  }
  .solutions-first-half {
    height: 70vh;
  }
  .solution-second-half {
    height: 70vh;
  }
  .positive-items{
    height: 100vh;
  }
  .positive-items:last-child{
    height: 100vh;
    width: 533px;
  }
  .positive-items h1 {
    width: 340px;
    margin: auto;
  }
  .positive-items p {
    border: 1px solid var(--base-color);
    padding: 100px 30px 120px 30px;
    position: relative;
    right: 195px;
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
        width: 220px;
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

  .environment-content {
    width: 395px;
    padding: 0px !important;

    h2 {
      color: var(--base-color);
    }

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