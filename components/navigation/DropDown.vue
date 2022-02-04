<template>
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
</template>

<script>
export default {
  props: {
    navLinks: {
      type: Array,
      default () {}
    }
  }
}
</script>
