<template>
  <div class="w-catalog">
    <div class="w-catalog__header">
      <WSortBar
      :parameters="parameters"
      :selectedPar="selectedPar"
      :conditions="conditions"
      :selectedCon="selectedCon"
      @selectParameter="selectedParameter"
      @selectCondition="selectedCondition"
      @enterInput="enteredInput"
      />
      <h1 class="w-catalog__h1">Store</h1>
    </div>
    <div class="w-catalog__body">
      <WCatalogItem
      v-for="post in sortedPosts"
      :key="post.id"
      :post_data="post" />
    </div>
    <div class="w-catalog__pagination">
      <div class="w-catalog__page"
      v-for="page in pages"
      :key="page"
      :class="{'w-catalog__page_selected'
      :page === pageNumber}"
      @click="nextPage(page)"
      >{{page}}
      </div>
    </div>
  </div>
</template>

<script lang="js">
import './w-catalog.scss'

import { mapActions, mapGetters } from 'vuex'
import WCatalogItem from '@/view/catalog-page/catalog-item'
import WSortBar from '@/components/nav-bars/sort-bar'
export default {
  name: 'w-catalog',
  components: {
    WCatalogItem,
    WSortBar
  },
  data() {
    return {
      parameters: [
        [    'name', 'name car',     'string' ],
        [   'users', 'count`s user', 'number' ],
        [ 'mileage', 'distance',     'number' ],
      ],
      conditions: [
        [ 'equal',   'equal' ],
        [ 'contains','contains' ],
        [ 'more',    'more' ],
        [ 'less',    'less' ],
      ],
      types: {
        string: {
          equal: (a, b) => a.toLowerCase() === b,
          contains: (a, b) => a.toLowerCase().includes(b),
          more: (a, b) => a.toLowerCase() > b,
          less: (a, b) => a.toLowerCase() < b,
        },
        number: {
          equal: (a, b) => a == +b,
          contains: (a, b) => `${a}`.includes(b),
          more: (a, b) => a > +b,
          less: (a, b) => a < +b,
        },
      },
      selectedPar: 'select parameter',
      selectedCon: 'select condition',
      enterInput: '',
      perPage: 6,
      pageNumber: 1,
    }
  },
  props: {},
  computed: {
    ...mapGetters([
      'POSTS'
    ]),
    pages(){
      return Math.ceil(this.POSTS.length / 6)
    },
    // paginatedPost(){
    //   let from = (this.pageNumber - 1) * this.perPage
    //   let to = from + this.perPage
    //   return this.POSTS.slice(from, to)
    // },
    sortedPosts() {
      let from = (this.pageNumber - 1) * this.perPage
      let to = from + this.perPage
      const { POSTS, selectedPar } = this;
      const type = this.parameters.find(n => n[0] === selectedPar)?.[2];
      const sortFn = this.types[type]?.[this.selectedCon];
      const sortVal = this.enterInput.toLowerCase();

      return sortFn && sortVal
        ? POSTS.filter(n => sortFn(n[selectedPar], sortVal)).slice(from, to)
        : POSTS.slice(from, to);
    }
  },
  methods: {
    ...mapActions([
      'GET_POSTS_FROM_API'
    ]),
    selectedParameter(p) {
      this.selectedPar = p[0]
    },
    selectedCondition(c) {
      this.selectedCon = c[0]
    },
    enteredInput(enterInput){
      this.enterInput = enterInput
    },
    nextPage(page) {
      this.pageNumber = page
    },
  },
  mounted() {
    this.GET_POSTS_FROM_API()
  }
}
</script>
