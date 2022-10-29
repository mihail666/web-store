<template>
  <div class="w-main-wrapper">
    <header>
      <WHeaderBar />
    </header>
    <main class="w-main-wrapper__body">
      <router-view />
    </main>
    <footer>
      <WFooterBar />
    </footer>
  </div>
</template>

<script>
import WHeaderBar from '@/components/nav-bars/header-bar';
import WFooterBar from '@/components/nav-bars/footer-bar';
export default {
  name: 'w-main-wrapper',
  components: {
    WHeaderBar,
    WFooterBar
  },
  data() {
    return {}
  },
  props: {},
  computed: {},
  methods: {},
}
</script>

<style lang="scss">
.w-main-wrapper {
  &__body {
    min-height: 100vh;
  }
}
</style>
