<template>
  <div class="w-header-bar">
    <div class="w-header-bar__container">
      <div class="w-header-bar__items">
        <div
          class="w-header-bar__items__item"
          v-for="(menu, i) in headerLinks"
          :key="i">
           <router-link
            class="customBtn"
            aria-curent="page"
            :to="menu.path">
              <span />
              <span />
              <span />
              <span />
              {{ menu.name }}
           </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import './w-header-bar.scss'
import { headerMenuLinks } from '@/const/hd-menu-links'
export default {
  name: 'w-header-bar',
  components: {
  },
  data() {
    return { headerLinks: headerMenuLinks }
  },
}
</script>
