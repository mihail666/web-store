<template>
  <div class="w-sort-bar">
    <!-- parametrs -->
    <div class="w-sort-bar__container">
      <p
        class="w-sort-bar__title customBtn"
        @click="areParametersVisible = !areParametersVisible">
        <span /><span /><span /><span />{{ selectedPar }}
        <svg width="20" height="20" viewBox="0 0 20 10" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8.5 14l4-4-4-4" stroke="currentColor" stroke-width="2" data-v-51dd70cd=""></path>
        </svg>
      </p>
      <div
        class="w-sort-bar__options"
        v-if="areParametersVisible">
        <p
          class="customBtnBlack"
          v-for="p in parameters"
          :key="p.id"
          @click="selectParameter(p)">
          <span /><span /><span /><span />
          {{ p[1] }}
        </p>
      </div>
    </div>
    <!-- conditions -->
    <div class="w-sort-bar__container">
      <p
        class="w-sort-bar__title customBtn"
        @click="areConditionsVisible = !areConditionsVisible">
        <span /><span /><span /><span />{{ selectedCon }}
        <svg width="20" height="20" viewBox="0 0 20 10" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8.5 14l4-4-4-4" stroke="currentColor" stroke-width="2" data-v-51dd70cd=""></path>
        </svg>
      </p>
      <div
        class="w-sort-bar__options"
        v-if="areConditionsVisible">
        <p
          class="customBtnBlack"
          v-for="c in conditions" 
          :key="c.id" 
          @click="selectCondition(c)">
          <span /><span /><span /><span />
          {{ c[0] }}
        </p>
      </div>
    </div>
    <!-- input -->
    <div class="w-sort-bar__container">
      <input
        class="w-sort-bar__pad customBtn w-sort-bar__title" 
        type="text" placeholder="enter a value"
        v-model="enterInput">
    </div>
    <div class="w-sort-bar__container">
      <button 
        class="w-sort-bar__title sortBtn"
        @click="enterInp(enterInput)">
        <span /><span /><span /><span />
        Serach
      </button>
    </div>
  </div>
</template>

<script>
import './w-sort-bar.scss'
export default {
  name: "shop-select",
  props: {
    parameters: {
      type: Array,
      default() {
        return []
      }
    },
    conditions: {
      type: Array,
      default() {
        return []
      }
    },
    selectedPar: {
      type: String,
      default: ''
    },
    selectedCon: {
      type: String,
      default: ''
    },
  },
  data() {
    return {
      enterInput: '',
      areParametersVisible: false,
      areConditionsVisible: false
    }
  },
  methods: {
    selectParameter(p) {
      this.$emit('selectParameter', p)
      this.areParametersVisible = false
    },
    selectCondition(c) {
      this.$emit('selectCondition', c)
      this.areConditionsVisible = false
    },
    enterInp(enterInput) {
      this.$emit('enterInput', enterInput)
    },
  }
}
</script>
