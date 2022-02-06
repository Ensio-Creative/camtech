<template>
  <transition name="fade">
    <div class="drop-link">
      <ul>
        <li v-for="link in navLinks" :key="link.id">
          <NuxtLink :to="link.link">
            {{ link.title }}
            <img src="/img/drop-arrow.svg" alt="drop-arrow">
          </NuxtLink>
        </li>
      </ul>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'Dropdown',
  // transition (to, from) {
  //   console.log(`Mode to: ${to}, Mode from: ${from}`)
  // },
  props: {
    navLinks: {
      type: Array,
      default () {}
    }
  }
}
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
