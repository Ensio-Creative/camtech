<template>
  <div>
    <div class="bg-hero">
      <div class="bg-text container">
        <h2>
          About us
        </h2>
      </div>
    </div>
    <section class="container who-container">
      <div class="row">
        <div class="col-12 col-lg-6 who-we-are">
          <div class="content">
            <h2>Who we are</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque accusamus minus ea, iste porro culpa sapiente voluptatem et ex nulla repellat delectus dolores! Molestiae quis quae animi laborum dolores error! ipsum dolor sit amet consectetur adipisicing elit. Culpa, impedit excepturi labore explicabo vero cumque ipsum voluptatem repellat quo, laborum neque temporibus. Vitae, nemo magni ut qui debitis perferendis dolores.
            </p>
          </div>
        </div>
        <div class="col-12 col-lg-6 who-we-are" />
      </div>
    </section>
    <section class="container about-container">
      <div class="row">
        <div class="col-12 col-lg-6 about-item" />
        <div class="col-12 col-lg-6 about-item">
          <div class="content">
            <h2>Who we are</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque accusamus minus ea, iste porro culpa sapiente voluptatem et ex nulla repellat delectus dolores! Molestiae quis quae animi laborum dolores error! ipsum dolor sit amet consectetur adipisicing elit. Culpa, impedit excepturi labore explicabo vero cumque ipsum voluptatem repellat quo, laborum neque temporibus. Vitae, nemo magni ut qui debitis perferendis dolores.
            </p>
          </div>
        </div>
      </div>
    </section>

    <Footer />
  </div>
</template>

<script>
import Footer from '~/components/common/Footer.vue'
export default {
  name: 'About',
  components: { Footer }
}
</script>

<style lang="scss" scoped>
.bg-hero {
  background: linear-gradient(rgba(21, 37, 81, 0.48), rgba(21, 37, 81, 0.48)), url('/img/carmtek-about-header-img.jpg');
  background-position: center;
  height: 75vh;
  margin-bottom: 99px;
}
.who-container {
  margin-bottom: 99px;
}
.who-we-are {
  height: 75vh;
  h2 {
    color: var(--base-color);
  }
}
.who-we-are:last-child {
  background: url('/img/carmtek-about-1.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}

.about-container {
  margin-bottom: 99px;
}

.about-item {
  height: 75vh;
  background: url('/img/carmtek-about-2.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
.about-item:last-child {
  background: var(--base-color);
  display: flex;
  align-items: center;
  p {
    color: #fff;
  }
}

@media (min-width: 1000px) {
  .who-we-are {
    .content {
      margin-top: 10px;
      p {
        margin-top: 30px;
      }
    }
  }
  .about-item:last-child {
  .content {
    padding: 30px;
  }
  h2 {
    color: #fff;
  }
}
}
</style>
