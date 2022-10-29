<template>
  <div class="w-catalog-item">
    <div>
      <img class="w-catalog-item__el w-catalog-item__image" :src="require('@/assets/images/' + post_data.image)"
        atl="kia img">
      <p class="w-catalog-item__el w-catalog-item__el_name ">{{ post_data.name }}</p>
      <p class="w-catalog-item__el">{{ post_data.date }}</p>
      <p class="w-catalog-item__el">count user`s: {{ post_data.users }}</p>
      <p class="w-catalog-item__el">distance: {{ post_data.mileage }}</p>
      <p class="w-catalog-item__el w-catalog-item__el_price">from: {{ post_data.price }}</p>
      <div class="w-catalog-item__links">

        <div>
          <router-link :to="'/configurator'"> <span class="customBtnBlack"><span />configurator<svg width="20"
                height="20" viewBox="0 0 20 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.5 14l4-4-4-4" stroke="currentColor" stroke-width="2" data-v-51dd70cd=""></path>
              </svg></span>
          </router-link>

        </div>
        <div>
          <router-link :to="'/'"><span class="customBtnBlack"><span />more info <svg width="20" height="20"
                viewBox="0 0 20 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.5 14l4-4-4-4" stroke="currentColor" stroke-width="2" data-v-51dd70cd=""></path>
              </svg></span>
          </router-link>

        </div>
      </div>
    </div>

  </div>
</template>

<script>
import './w-catalog-item.scss'

export default {
  name: 'w-catalog-item',
  components: {},
  data() {
    return {}
  },
  props: {
    post_data: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  computed: {},
  methods: {},
}
</script>