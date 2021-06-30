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
          <h2>
            A positive impact on our environment
          </h2>
        </div>
        <div class="col-12 col-md-5 positive-items">
          <p>
            Lorem ipsum dolor sit amet, cosectetuer adipiscing elit, sed diam 
            nonummy nibh euismod tincidunt 
            ut laoreet dolore magna aliquam 
            erat volutpat. Ut wisi enim ad 
            minim veniam, quis nostrud exerci 
            tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo 
            consequat. Duis autem vel eum 
            iriure dolor in hendrerit in vulputate velit esse molestie consequat,
          </p>
        </div>
      </div>
    </section>

    <section class="discover-more container-fluid">
      <div class="row">
        <div class="col-12 col-md-6 discover-items">
          <div class="discover-content">
            <h3>
              A positive impact on our
            </h3>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam 
              nonummy nibh euismod tincidunt 
              ut laoreet dolore magna aliquam 
              erat volutpat. Ut wisi enim ad 
              minim veniam.
            </p>
            <button
              class="btn-base-outline-white"
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
          <div class="col-12 col-md-4">
            <div class="environment-content">
              <h2>
                A positive impact on our environment
              </h2>
              <p>
                Lorem ipsum dolor sit amet, 
                consectetuer adipiscing elit, 
                sed diam nonummy nibh 
                euismod tincidunt ut laoreet 
                dolore .
              </p>
              <button
                class="btn-outline-base"
              >
                DISCOVER MORE 
              </button>
            </div>
          </div>
          <div class="col-12 col-md-8">
            <div class="row">
              <div class="col-sm-6">
                <div class="environment-items">
                  <div class="body">
                    <h5>Special title treatment</h5>
                    <p>With supporting text below as a natural lead-in to additional content.</p>
                    <router-link to="/">Learn more</router-link>
                  </div>
                </div>
              </div>
              <div class="col-sm-6">
                <div class="environment-items-second">
                  <div class="body">
                    <h5>Special title treatment</h5>
                    <p>With supporting text below as a natural lead-in to additional content.</p>
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
            Please reach out to get in touch 
            with us or learn more about our 
            services and solutions.
          </p>
          <button
            class="btn-base-outline-white"
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
}

.discover-items {
  background-color: var(--base-color);
  color: #fff;
  height: 35vh;

  .discover-content {
    padding: 20px 0px;
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
  margin: 40px 0px;
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
}
.environment-items-second {
  background-image: url('/img/OLBW0176.JPG');
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
}

.environment-impact {
  padding: 0px 0px 50px 0px;
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

.solutions-first-half{
  color: #fff;
  background-color: var(--base-dark);
  height: 50vh;
  display: flex;

  .container {
    align-self: center;
  }
}
.solution-second-half {
  background: linear-gradient(rgba(21, 37, 81, 0.48), rgba(21, 37, 81, 0.48)), url('/img/Front-Page-picture.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 50vh;
}
.forward-thinking {
  margin-top: 40px;
  margin-bottom: 40px;

  .companies-img {
    text-align: center;
    margin-top: 10px;
  }
  .companies-img img {
    width: 90px;
    padding: 10px;
  }
  .interested{
    color: #fff;
    margin-top: 40px;
    padding: 50px;
    background: linear-gradient(rgba(21, 37, 81, 0.48), rgba(21, 37, 81, 0.48)), url('/img/Front-Page-picture.png');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;

    button {
      margin-top: 20px;
      margin-right: 20px;
    }
  }
}
@media (min-width: 1000px) {
  .bg-hero {
    height: 90vh;

    h2 {
      width: 620px;
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
    height: 80vh;
  }
  .positive-items h2 {
    width: 240px;
    margin: auto;
  }
  .positive-items p {
    border: 1px solid var(--base-color);
    padding: 50px;
    position: relative;
    right: 285px;
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
      }
    }
  }

  .bg-trailers {
    height: 50vh;
  }

  .environment-content {
    width: 233px;
    margin: auto;
    padding: 0px !important;
  }

  .environment-items {
    height: 50vh;
  }
  .environment-items-second {
    height: 50vh;
  }
  .reach-out {
    height: 60vh;

    .reach-container {
      background: rgba(0, 0, 0, 0.6);
      height: 60vh;
      color: #fff;
      width: 668px;
      float: right;
      padding: 110px;
      display: flex;
      align-items: center;

      .reach-content {
        width: 314px;
         button {
           margin-top: 20px;
         }
      }
    }
  }
}
</style>